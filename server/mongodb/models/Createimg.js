import mongoose from "mongoose";

const Createimg = new mongoose.Schema({
  prompt: { type: String, required: true },
  photo: { type: String, require: true },
});

const CreateimgSchema = mongoose.model("Createimg", Createimg);

export default Createimg;
