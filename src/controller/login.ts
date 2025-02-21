import { Request, Response } from "express";
import { knex } from "../db/conexao";

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

export const login = async (req: Request, res: Response): Promise<void> => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400).json({ mensagem: "Email e senha são obrigatórios" });
    return;
  }

  try {
    const usuario = await knex("usuarios").where({ email }).first();

    if (!usuario) {
      res.status(404).json({ mensagem: "Usuário não encontrado" });
      return;
    }

    if (!usuario.password) {
      console.log("Senha não encontrada no banco:", usuario);
      res.status(500).json({ mensagem: "Erro na validação do usuário" });
      return;
    }

    console.log("Dados recebidos:", {
      passwordRecebido: password,
      senhaNoBanco: usuario.password,
    });

    const senhaCorreta = await bcrypt.compare(
      String(password),
      usuario.password
    );

    if (!senhaCorreta) {
      res.status(401).json({ mensagem: "Email ou senha incorretos" });
      return;
    }

    const secretKey = process.env.SECRET_KEY_JWT;

    if (!secretKey) {
      res.status(500).json({ mensagem: "Erro na configuração do servidor" });
      return;
    }

    const token = jwt.sign({ id: usuario.id }, secretKey, {
      expiresIn: "8h",
    });

    const { senha: _, ...dadosUsuario } = usuario;

    res.status(200).json({
      usuario: dadosUsuario,
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ mensagem: "Erro interno do servidor" });
  }
};
