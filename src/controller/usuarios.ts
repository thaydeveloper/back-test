import { Request, Response } from "express";
import { knex } from "../db/conexao";

const bcrypt = require("bcrypt");

export const criarUsuario = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { nome, email, senha } = req.body;
    const hash = await bcrypt.hash(senha, 10);
    await knex("usuarios").insert({ nome, email, senha });
    res.status(201).json({ mensagem: "Usuário criado com sucesso" });
  } catch (error) {
    res.status(500).json({ mensagem: "Erro interno do servidor" });
  }
};

export const obterUsuario = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;
    const usuario = await knex("usuarios").where({ id }).first();
    res.status(200).json(usuario);
  } catch (error) {
    res.status(500).json({ mensagem: "Erro interno do servidor" });
  }
};
