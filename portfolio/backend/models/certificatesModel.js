import mongoose from "mongoose";

const certificatesSchema = mongoose.Schema({
  certificateName: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  certificateImage: {
    type: String,
    required: true,
  },
  certificateLink: {
    type: String,
    trim: true,
    required: true,
    unique: true,
  },
  certificateFrom: {
    type: String,
    trim: true,
    required: true,
  },
  certificateBy: {
    type: String,
    required: true,
    trim: true,
  },
});

const certificatesModel = mongoose.model("certificates", certificatesSchema);

export default certificatesModel;
