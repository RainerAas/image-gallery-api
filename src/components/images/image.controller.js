import sharp from 'sharp';

export async function uploadImage(req, res) {
  console.time();
  const resizedBuffer = await sharp(req.file.buffer).resize(150, 150).toBuffer();
  console.timeEnd();

  const b64 = Buffer.from(resizedBuffer).toString('base64');

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
