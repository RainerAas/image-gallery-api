import mongoose from '../../database';

const TestSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
}, { timestamps: true });

export default mongoose.model('Test', TestSchema);
