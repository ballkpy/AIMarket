import express from 'express';
import * as dotenv from 'dotenv';
import { v2 as cloudinary } from 'cloudinary';

import Createimg from '../mongodb/models/Createimg.js';

dotenv.config();

const router = express.Router();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});
//create a img
router.route('/').post(async (req, res) => {
  try {
    const { prompt, photo } = req.body;
    const photoUrl = await cloudinary.uploader.upload(photo);

    const newImg = await Createimg.create({
      prompt,
      photo: photoUrl.url,
    });

    res.status(201).json({ success: true, data: newImg });
  } catch (error) {
    res.status(500).json({ success: false, message: error });
  }
});

//get all img
router.route('/').get(async (req, res) => {
  try {
    const imgs = await Createimg.find({});

    res.status(200).json({ success: true, data: imgs });
  } catch (error) {
    res.status(500).json({ success: false, message: error });
  }
});
export default router;
