import express from "express";
import { getKnowledge } from "../controller/controller.js";

const routerKnowledge = express.Router();
routerKnowledge.get("/", getKnowledge);

export { routerKnowledge }