import { Storage } from '@google-cloud/storage';

const storage = new Storage({
  projectId: process.env.PROJECT_ID,
  credentials: {
    type: process.env.TYPE,
    project_id: process.env.PROJECT_ID,
    private_key_id: process.env.PRIVATE_KEY_ID,
    private_key: process.env.PRIVATE_KEY,
    client_email: process.env.CLIENT_EMAIL,
    client_id: process.env.CLIENT_ID,
    auth_uri: process.env.AUTH_URI,
    token_uri: process.env.TOKEN_URI,
    auth_provider_x509_cert_url: process.env.AUTH_PROVIDER_X509_CERT_URL,
    client_x509_cert_url: process.env.CLIENT_X509_CERT_URL,
  },
});

const bucket = storage.bucket(process.env.BUCKET_NAME);

export async function uploadImage(req, res) {
  if (!req.file) {
    res.status(400).send('No file uploaded.');
    return;
  }

  const blob = bucket.file(`${Date.now()}-${req.file.originalname}`);
  const blobStream = blob.createWriteStream();

  blobStream.on('error', (err) => {
    res.status(500).send({ error: err });
  });

  blobStream.on('finish', () => {
    const publicUrl = `https://storage.googleapis.com/${bucket.name}/${blob.name}`;
    res.status(200).send(publicUrl);
  });

  blobStream.end(req.file.buffer);
}

export async function getImages(req, res) {
  const [files] = await bucket.getFiles();

  res.send(files);
}

export async function deleteImage(req, res) {
  console.log(req);

  res.send('Delete image');
}
