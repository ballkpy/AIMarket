import express from 'express';
import * as dotenv from 'dotenv';
import axios from 'axios';

// import { v2 as cloudinary } from "cloudinary";
// import { Leonardo } from '@leonardo-ai/sdk';
// import { CreateGenerationResponse } from '@leonardo-ai/sdk/dist/sdk/models/operations';
// import {
//   ControlnetType,
//   SdGenerationSchedulers,
//   SdGenerationStyle,
//   SdVersions,
// } from '@leonardo-ai/sdk/dist/sdk/models/shared';

dotenv.config();

const router = express.Router();

router.route('/').get(async (req, res) => {});

export default router;
