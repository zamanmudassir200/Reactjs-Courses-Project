import mongoose from "mongoose";

const experienceSchema = new mongoose.Schema(
  {
    experienceTitle: {
      type: String,
      required: true,
      trim: true,
    },
    experienceImage: {
      type: String,
      default: "", // optional
    },
    experienceCompany: {
      type: String,
      required: true,
      trim: true,
    },
    experienceRole: {
      type: String,
      required: true,
      trim: true,
    },
    experienceStart: {
      type: Date,
      required: true,
    },
    experienceEnd: {
      type: Date, // optional if it's a current job
    },
    isCurrentlyWorking: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const experienceModel = mongoose.model("Experience", experienceSchema);

export default experienceModel;
