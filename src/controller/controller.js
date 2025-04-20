import { data } from "../data/data.js"; // importando dados do banco de dados mockado

// função que transforma o array de objetos personality em formato json se o status for 200
export function getPersonality(req, res) {
    res.status(200).json(data.personality);
  }

// função que transforma o array de objetos knowledge em formato json se o status for 200
export function getKnowledge(req, res) {
    res.status(200).json(data.knowledge);
  }

// função que transforma o array de objetos religion em formato json se o status for 200
export function getReligion(req, res) {
    res.status(200).json(data.religion);
  }