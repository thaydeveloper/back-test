import { Router } from "express";
import {
  atualizarCarro,
  criarCarro,
  deletarCarro,
  listarCarros,
  obterCarro,
} from "./controller/carros";

const rotas = Router();

rotas.get("/carros", listarCarros);
rotas.post("/carros", criarCarro);
rotas.put("/carros/:id", atualizarCarro);
rotas.delete("/carros/:id", deletarCarro);
rotas.get("/carros/:id", obterCarro);

export default rotas;
