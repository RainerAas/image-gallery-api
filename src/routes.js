import express from 'express';

const router = express.Router();

router.post('/images', (req, res) => {
  res.send('Hello world');
});

router.get('/images', (req, res) => {
  res.send('Hello world');
});

router.delete('/images/:imageId', (req, res) => {
  res.send('Hello world');
});

export default router;
