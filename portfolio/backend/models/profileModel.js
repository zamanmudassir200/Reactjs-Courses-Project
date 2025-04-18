import mongoose from "mongoose";

const profileSchema = mongoose.Schema(
  {
    profileImage: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { timestamps: true }
);

const profileModel = mongoose.model("profile", profileSchema);

export default profileModel;
