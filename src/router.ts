import { Router } from "express";
import {
  atualizarCarro,
  criarCarro,
  deletarCarro,
  listarCarros,
  obterCarro,
} from "./controller/carros";
import { criarUsuario, obterUsuario } from "./controller/usuarios";
import { login } from "./controller/login";

const rotas = Router();

rotas.post("/login", login);

rotas.get("/carros", listarCarros);
rotas.post("/carros", criarCarro);
rotas.put("/carros/:id", atualizarCarro);
rotas.delete("/carros/:id", deletarCarro);
rotas.get("/carros/:id", obterCarro);

rotas.post("/usuarios", criarUsuario);
rotas.get("/usuarios/:id", obterUsuario);

export default rotas;
