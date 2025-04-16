import express from "express";
import { getReligion } from "../controller/controller.js";

const routerReligion = express.Router();
routerReligion.get("/", getReligion);

export { routerReligion } 