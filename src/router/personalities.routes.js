import express from "express";

// importa a função getPersonality do controller para responder essa rota
import { getPersonality } from "../controller/controller.js";

const routerPersonality = express.Router();

// cria uma rota GET para o caminho "/", que será usado no caminho /personalidades
//  quando a rota for acessada ela chama a função getPersonality do controller
routerPersonality.get("/", getPersonality);
 
export { routerPersonality} 
