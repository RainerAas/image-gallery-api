import mongoose from '../../database';

const ImageSchema = new mongoose.Schema({
  src: {
    type: String,
    required: true,
  },
  imageName: {
    type: String,
    required: true,
  },
  imageType: {
    type: String,
    required: true,
  },
  width: {
    type: Number,
    required: true,
  },
  height: {
    type: Number,
    required: true,
  },
  placeholder: String,
}, { timestamps: true });

export default mongoose.model('Image', ImageSchema);
