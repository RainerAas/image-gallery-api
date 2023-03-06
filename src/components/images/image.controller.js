import { loadImage, createCanvas } from 'canvas';

export async function uploadImage(req, res) {
  console.time();
  const image = await loadImage(req.file.buffer);
  const canvas = createCanvas(150, 150);
  const context = canvas.getContext('2d');

  context.drawImage(image, 0, 0, 150, 150);

  const buffer = canvas.toBuffer();
  console.timeEnd();

  const b64 = Buffer.from(buffer).toString('base64');

  res.send({ b64, mimetype: req.file.mimetype });
}

export async function getImages(req, res) {
  console.log(req);

  res.send('Get images');
}

export async function deleteImage(req, res) {
  console.log(req);

  res.send('Delete image');
}
