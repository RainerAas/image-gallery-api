import { deleteImageCore, getImagesCore, uploadImageCore } from './image.core';

/**
 * Controller for image uploading.
 *
 * @param {object} req - Request object.
 * @param {object} res - Response object.
 * @param {function} next
 * @returns {object} Uploaded image data.
 */
export async function uploadImage(req, res, next) {
  try {
    const image = await uploadImageCore(req.file);

    res.send(image);
  } catch (error) {
    next(error);
  }
}

/**
 * Controller for getting all images.
 *
 * @param {object} req - Request object.
 * @param {object} res - Response object.
 * @param {function} next
 * @returns {array} Images array.
 */
export async function getImages(req, res, next) {
  try {
    const images = await getImagesCore();

    res.send(images);
  } catch (error) {
    next(error);
  }
}

/**
 * Controller for image deleting.
 *
 * @param {object} req - Request object.
 * @param {object} res - Response object.
 * @param {function} next
 */
export async function deleteImage(req, res, next) {
  try {
    await deleteImageCore(req.params.imageId);

    res.status(204).send();
  } catch (error) {
    next(error);
  }
}
