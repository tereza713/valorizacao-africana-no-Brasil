import { data } from "../data/data.js";

export function getPersonality(req, res) {
    res.status(200).json(data.personality);
  }

export function getKnowledge(req, res) {
    res.status(200).json(data.knowledge);
  }

export function getReligion(req, res) {
    res.status(200).json(data.religion);
  }