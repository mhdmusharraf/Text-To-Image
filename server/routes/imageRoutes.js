import express from "express";
import { generateImage } from "../controllers/imageController.js";
import userAuth from "../middlewares/auth.js";


const imageRouter = express.Router();

imageRouter.post("/generate-image",userAuth, generateImage);

export default imageRouter;

//0fbcd1fccfac68c160b5183863c651c91f0d9431920ad1328323406cd936d3d40c43b1a4568ca0a620835573106b27ad