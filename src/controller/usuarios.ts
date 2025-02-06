import { Request, Response } from "express";
import { knex } from "../db/conexao";

export const criarUsuario = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { nome, email, senha } = req.body;
    await knex("usuarios").insert({ nome, email, senha });
    res.status(201).json({ mensagem: "Usuário criado com sucesso" });
  } catch (error) {
    res.status(500).json({ mensagem: "Erro interno do servidor" });
  }
};
