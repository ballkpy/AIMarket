import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";

import connectDB from "./mongodb/connect.js";
import createimgRoutes from "./routes/CreateimgRoutes.js";
import leonardoRoutes from "./routes/LeonardoRoutes.js";

dotenv.config();

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(express.json({ limit: "50mb" }));

app.use("/api/createimg", createimgRoutes);
app.use("/api/leonardo", leonardoRoutes);

app.get("/", async (req, res) => {
  res.send("Hello from server");
});

const startServer = async () => {
  try {
    connectDB(process.env.MONGODB_URL);
    app.listen(8080, () =>
      console.log("Server has started on port http://localhost:8080")
    );
  } catch (error) {
    console.log(error);
  }
};

startServer();
