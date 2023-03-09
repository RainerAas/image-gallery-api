import express from 'express';
import multer from 'multer';
import { uploadImage, getImages, deleteImage } from './components/images/image.controller';

const router = express.Router();

const storage = multer.diskStorage({
  destination: 'assets/images',
  filename: (req, file, callback) => {
    callback(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });

router.post('/images', upload.array('file', 10), uploadImage);
router.get('/images', getImages);
router.delete('/images/:imageId', deleteImage);

export default router;
