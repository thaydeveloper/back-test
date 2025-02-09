import { Request, Response } from "express";
import { NextFunction } from "connect";

const jwt = require("jsonwebtoken");

export const authenticate = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers.authorization;
  if (authHeader) {
    const token = authHeader.split(" ")[1];
    try {
      const decoded = jwt.verify(token, process.env.SECRET_KEY_JWT);
      req.body.userId = decoded.id;
      next();
    } catch (error) {
      res.status(401).json({ mensagem: "Token inválido" });
    }
  } else {
    res.status(401).json({ mensagem: "Token não fornecido" });
  }
};
