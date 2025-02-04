import { Router } from "express";

const rotas = Router();

rotas.get("/", (req, res) => {
  res.send("Hello World!");
});

export default rotas;
