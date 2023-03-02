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
}, { timestamps: true });

export default mongoose.model('Image', ImageSchema);
