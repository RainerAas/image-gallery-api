import mongoose from 'mongoose';

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const instance = new mongoose.Mongoose();
instance.connect(process.env.DATABASE, options);

export default instance;
