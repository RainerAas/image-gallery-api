export async function uploadImage(req, res) {
  console.log(req.file);

  res.send('Upload image');
}

export async function getImages(req, res) {
  console.log(req);

  res.send('Get images');
}

export async function deleteImage(req, res) {
  console.log(req);

  res.send('Delete image');
}
