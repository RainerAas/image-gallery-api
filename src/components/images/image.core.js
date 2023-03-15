import sharp from 'sharp';
import { encode } from 'blurhash';
import Image from './image';
import imageConfig from '../../config';
import uploadToGCS from '../../services/gcs/upload-to-gcs';
import { bucket } from '../../services/gcs/gcs-client';
import deleteFromGCS from '../../services/gcs/delete-from-gcs';

/**
 * Function that uploads images.
 *
 * @param {object} imageFile - Image file object.
 * @returns {object}
 */
export async function uploadImageCore(imageFile) {
  if (!imageFile) {
    throw new Error('No file specified');
  }

  if (!imageConfig.ALLOWED_IMAGE_TYPES.includes(imageFile.mimetype)) {
    throw new Error('Image format not supported');
  }

  if (imageFile.size > imageConfig.MAX_IMAGE_SIZE_BYTES) {
    throw new Error(`Image too large, maximum allowed size is ${imageConfig.MAX_IMAGE_SIZE_BYTES} bytes`);
  }

  const { width: originalWidth, height: originalHeight } = await sharp(imageFile.buffer).metadata();

  const image = new Image({
    width: originalWidth,
    height: originalHeight,
    imageName: imageFile.originalname,
    imageType: imageFile.mimetype,
  });

  const imageName = `${image._id}-${imageFile.originalname}`;

  await uploadToGCS(imageName, imageFile.buffer);

  image.src = `https://storage.googleapis.com/${bucket.name}/${imageName}`;

  const { data, info } = await sharp(imageFile.buffer)
    .raw()
    .ensureAlpha()
    .resize(32, null, { fit: 'inside' })
    .toBuffer({ resolveWithObject: true });

  image.placeholder = encode(new Uint8ClampedArray(data), info.width, info.height, 4, 3);

  return image.save();
}

/**
 * Function that gets all images.
 *
 * @returns {Array}
 */
export async function getImagesCore() {
  const images = await Image.find({});

  return images;
}

/**
 * Function that deletes image with imageId.
 *
 * @param {string} imageId - ID of image to be deleted.
 */
export async function deleteImageCore(imageId) {
  if (!imageId) {
    throw new Error('No image ID specified');
  }

  const image = await Image.findById(imageId);

  if (!image) {
    throw new Error(`Image with given id ${imageId} not found`);
  }

  await deleteFromGCS(`${image._id.toString()}-${image.imageName}`);
  await Image.deleteOne({ _id: imageId });
}
