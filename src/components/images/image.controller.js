import { promises } from 'fs';

export async function uploadImage(req, res) {
  console.log(req.file);

  res.send(req.file);
}

export async function getImages(req, res) {
  try {
    const files = await promises.readdir('assets/images');
    res.status(200).json(files);
  } catch (err) {
    res.status(500).json(err);
  }
}

export async function deleteImage(req, res) {
  console.log(req);

  res.send('Delete image');
}
