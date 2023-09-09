import express from "express";
import * as dotenv from "dotenv";
// import { v2 as cloudinary } from "cloudinary";
import { Leonardo } from "@leonardo-ai/sdk";
import { CreateGenerationResponse } from "@leonardo-ai/sdk/dist/sdk/models/operations";
import {
  ControlnetType,
  SdGenerationSchedulers,
  SdGenerationStyle,
  SdVersions,
} from "@leonardo-ai/sdk/dist/sdk/models/shared";

dotenv.config();

const router = express.Router();

router.route("/").post(async (req, res) => {
  const { prompt } = req.body;

  //   const sdk = new Leonardo({
  //     security: {
  //       bearerAuth: "16513cf-9771-439a-a48a-b299dd1b82e3",
  //     },
  //   });

  //   sdk.generation
  //     .createGeneration({
  //       alchemy: false,
  //       contrastRatio: 3834.41,
  //       controlNet: false,
  //       controlNetType: ControlnetType.Canny,
  //       expandedDomain: false,
  //       guidanceScale: 791725,
  //       height: 812169,
  //       highContrast: false,
  //       highResolution: false,
  //       imagePromptWeight: 5288.95,
  //       imagePrompts: ["excepturi", "nisi"],
  //       initGenerationImageId: "recusandae",
  //       initImageId: "temporibus",
  //       initStrength: 710.36,
  //       modelId: "quis",
  //       negativePrompt: "veritatis",
  //       nsfw: false,
  //       numImages: 648172,
  //       numInferenceSteps: 20218,
  //       presetStyle: SdGenerationStyle.Leonardo,
  //       prompt: "repellendus",
  //       promptMagic: false,
  //       promptMagicVersion: "sapiente",
  //       public: false,
  //       scheduler: SdGenerationSchedulers.DpmSolver,
  //       sdVersion: SdVersions.V15,
  //       seed: 870013,
  //       tiling: false,
  //       unzoom: false,
  //       unzoomAmount: 8700.88,
  //       upscaleRatio: 9786.19,
  //       weighting: 4736.08,
  //       width: 799159,
  //     })
  //     .then((res: CreateGenerationResponse) => {
  //       if (res.statusCode == 200) {
  //         res.status(200).json({ imgid: CreateGenerationResponse });
  //       }
  //     });
  //   const sdk = require("api")("@leonardoai/v1.0#3vp6l34lm4ans46");

  //   sdk.auth("216513cf-9771-439a-a48a-b299dd1b82e3");
  //   sdk
  //     .createGeneration({
  //       height: 512,
  //       modelId: "6bef9f1b-29cb-40c7-b9df-32b51c1f67d3",
  //       prompt: prompt,
  //       width: 512,
  //     })
  //     .then(({ data }) => console.log(data))
  //     .catch((err) => console.error(err));
  // const sdk = require("api")("@leonardoai/v1.0#3vp6l34lm4ans46");

  // sdk.auth("216513cf-9771-439a-a48a-b299dd1b82e3");
  // const aiResponse = await sdk.createGeneration({
  //   height: 512,
  //   modelId: "6bef9f1b-29cb-40c7-b9df-32b51c1f67d3",
  //   prompt: prompt,
  //   width: 512,
  // });
  // //   .then(({ data }) => console.log(data));

  // const imgId = aiResponse.sdGenerationJob.generationId;
  // res.status(200).json({ imgid: imgId });
});

// router.route("/").get(async (req, res) => {
//   //   const sdk = require("api")("@leonardoai/v1.0#3vp6l34lm4ans46");
//   //   sdk.auth("216513cf-9771-439a-a48a-b299dd1b82e3");
//   //   sdk
//   //     .getGenerationById({ id: imgId })
//   //     .then(({ data }) => console.log(data))
//   //     .catch((err) => console.error(err));
// });

export default router;
