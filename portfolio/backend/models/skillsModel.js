import mongoose from "mongoose";

const skillsSchema = mongoose.Schema({
  skillName: {
    type: String,
    required: true,
    unique: true,
  },
  skillImage: {
    type: String,
    required: true,
  },
});

const skillsModel = mongoose.model("skill", skillsSchema);

export default skillsModel;
