import { Router } from "express";
import {
  atualizarCarro,
  criarCarro,
  deletarCarro,
  listarCarros,
} from "./controller/carros";

const rotas = Router();

rotas.get("/carros", listarCarros);
rotas.post("/carros", criarCarro);
rotas.put("/carros/:id", atualizarCarro);
rotas.delete("/carros/:id", deletarCarro);

export default rotas;
