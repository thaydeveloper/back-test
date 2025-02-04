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
  res.send("Criando um carro");
};

export const atualizarCarro = async (
  req: Request,
  res: Response
): Promise<void> => {
  res.send("Atualizando um carro");
};

export const deletarCarro = async (
  req: Request,
  res: Response
): Promise<void> => {
  res.send("Deletando um carro");
};

export const obterCarro = async (
  req: Request,
  res: Response
): Promise<void> => {
  res.send("Obter um carro");
};
