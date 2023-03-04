import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Hello world');
});

// - real stuff below - TODO: remove this comment later

router.post('/images', (req, res) => { // pildi ülesse laadimine
  res.send('Hello world');
});

router.get('/images', (req, res) => { // piltide päring
  res.send('Hello world');
});

router.delete('/images/:imageId', (req, res) => { // pildi kustutamine
  res.send('Hello world');
});

export default router;
