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
import { authenticate } from "./middleware/auth";

const rotas = Router();

rotas.post("/usuarios", criarUsuario);
rotas.get("/usuarios/:id", obterUsuario);
rotas.post("/login", login);

rotas.get("/carros", authenticate, listarCarros);
rotas.post("/carros", authenticate, criarCarro);
rotas.put("/carros/:id", authenticate, atualizarCarro);
rotas.delete("/carros/:id", authenticate, deletarCarro);
rotas.get("/carros/:id", authenticate, obterCarro);

export default rotas;
