import Jimp from 'jimp';

export async function uploadImage(req, res) {
  console.time();
  const resizedBuffer = await Jimp.read(req.file.buffer).then((img) => img.resize(150, 150)
    .getBufferAsync(req.file.mimetype));
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
