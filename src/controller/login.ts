import { Request, Response } from "express";
import { knex } from "../db/conexao";

const bcrypt = require("bcrypt");

export const login = async (req: Request, res: Response): Promise<void> => {
  try {
    const { email, password } = req.body;
    const usuario = await knex("usuarios").where({ email }).first();
    if (usuario) {
      const senhaCorreta = await bcrypt.compare(password, usuario.password);

      if (senhaCorreta) {
        res.status(200).json({ mensagem: "Login bem-sucedido", usuario });
      } else {
        res.status(401).json({ mensagem: "Senha incorreta" });
      }
    } else {
      res.status(404).json({ mensagem: "Usuário não encontrado" });
    }
  } catch (error) {
    res.status(500).json({ mensagem: "Erro interno do servidor" });
  }
};
