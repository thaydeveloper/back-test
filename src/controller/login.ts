import { Request, Response } from "express";
import { knex } from "../db/conexao";

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

export const login = async (req: Request, res: Response): Promise<void> => {
  const { email, password } = req.body;

  try {
    const usuario = await knex("usuarios").where({ email }).first();

    if (!usuario) {
      res.status(404).json({ mensagem: "Usuário não encontrado" });
    }

    const senhaCorreta = await bcrypt.compare(password, usuario.password);

    if (!senhaCorreta) {
      res.status(401).json({ mensagem: "Senha incorreta" });
    }
    const secretKey = process.env.SECRET_KEY_JWT;

    const token = jwt.sign({ id: usuario.id }, secretKey, {
      expiresIn: "8h",
    });

    res.status(200).json({ mensagem: "Login bem-sucedido", token });
  } catch (error) {
    console.log(error);
    res.status(500).json({ mensagem: "Erro interno do servidor" });
  }
};
