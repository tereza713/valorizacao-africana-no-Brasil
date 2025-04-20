import express from "express";

// importa a função getReligion do controller para responder essa rota
import { getReligion } from "../controller/controller.js";

const routerReligion = express.Router();

// cria uma rota GET para o caminho "/", que será usado no caminho /religioes
// quando a rota for acessada ela chama a função getReligion do controller
routerReligion.get("/", getReligion);

export { routerReligion } 