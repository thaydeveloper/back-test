import { Request, Response } from "express";

export const listarCarros = async (req: Request, res: Response) => {
  res.send("Listagem de carros");
};

export const criarCarro = async (req: Request, res: Response) => {
  res.send("Criando um carro");
};

export const atualizarCarro = async (req: Request, res: Response) => {
  res.send("Atualizando um carro");
};

export const deletarCarro = async (req: Request, res: Response) => {
  res.send("Deletando um carro");
};

export const obterCarro = async (req: Request, res: Response) => {
  res.send("Obter um carro");
};
