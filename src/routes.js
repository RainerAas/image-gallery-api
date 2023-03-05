import express from 'express';
import multer from 'multer';
import { uploadImage, getImages, deleteImage } from './components/images/image.controller';

const router = express.Router();
const storage = multer.memoryStorage();
const upload = multer({ storage });

router.post('/images', upload.single('file'), uploadImage);
router.get('/images', getImages);
router.delete('/images/:imageId', deleteImage);

export default router;
