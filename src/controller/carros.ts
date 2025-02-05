import { Request, Response } from "express";
import { knex } from "../db/conexao";

export const listarCarros = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const carros = await knex("carros").select();
    res.json(carros);
  } catch (error) {
    res.status(500).json({ mensagem: "Erro interno do servidor" });
  }
};

export const criarCarro = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { marca, modelo, ano, cor, valor } = req.body;
    await knex("carros").insert({ marca, modelo, ano, cor, valor });
    res.status(201).json({ mensagem: "Carro criado com sucesso" });
  } catch (error) {
    res.status(500).json({ mensagem: "Erro interno do servidor" });
  }
};

export const atualizarCarro = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;
    const { marca, modelo, ano, cor, valor } = req.body;
    await knex("carros")
      .where({ id })
      .update({ marca, modelo, ano, cor, valor });
    res.status(200).json({ mensagem: "Carro atualizado com sucesso" });
  } catch (error) {
    res.status(500).json({ mensagem: "Erro interno do servidor" });
  }
};

export const deletarCarro = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;
    await knex("carros").where({ id }).del();
    res.status(200).json({ mensagem: "Carro deletado com sucesso" });
  } catch (error) {
    res.status(500).json({ mensagem: "Erro interno do servidor" });
  }
};

export const obterCarro = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;
    const carro = await knex("carros").where({ id }).first();
    res.status(200).json(carro);
  } catch (error) {
    res.status(500).json({ mensagem: "Erro interno do servidor" });
  }
};
