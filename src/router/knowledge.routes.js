import express from "express";

// importa a função getKnowledge do controller para responder essa rota
import { getKnowledge } from "../controller/controller.js";

const routerKnowledge = express.Router();

// cria uma rota GET para o caminho "/", que será usado no caminho /saberes
// quando a rota for acessada ela chama a função getKnowledge do controller
routerKnowledge.get("/", getKnowledge);

export { routerKnowledge }