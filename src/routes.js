/* eslint-disable no-unused-vars */
import express from 'express';
import multer from 'multer';
import { GridFsStorage } from 'multer-gridfs-storage';
import dbInstance from './database';
import { uploadImage, getImages, deleteImage } from './components/images/image.controller';

const router = express.Router();

const storage = new GridFsStorage({
  db: dbInstance.connection,
  file: (req, file) => ({
    filename: `${Date.now()}-${file.originalname}`,
    bucketName: 'files',
  }),
});

const upload = multer({ storage });

router.post('/images', upload.single('file'), uploadImage);

router.get('/images', async (req, res) => {
  try {
    const { db } = await storage.ready();

    const images = db.collection('files.files');
    const result = [];

    await images.find({}).forEach((item) => result.push(item));

    return res.status(200).send(result);
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
});

router.delete('/images/:imageId', deleteImage);

export default router;
