import express from "express";
import { getPersonality } from "../controller/controller.js";

const routerPersonality = express.Router();
routerPersonality.get("/", getPersonality);

export { routerPersonality} 
