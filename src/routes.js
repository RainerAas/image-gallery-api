import express from 'express';
import Test from './components/test/test';

const router = express.Router();

router.get('/', (req, res) => {
  res.send(`db is ${process.env.DATABASE}`);
});

router.post('/add-test', async (req, res) => {
  const { name, age } = req.body;

  const test = new Test({ name, age });

  try {
    await test.save();
    res.send(test);
  } catch (e) {
    res.status(500).send(e);
  }
});

router.get('/test', async (req, res) => {
  const test = await Test.find({});

  try {
    res.send(test);
  } catch (e) {
    res.status(500).send(e);
  }
});

export default router;
