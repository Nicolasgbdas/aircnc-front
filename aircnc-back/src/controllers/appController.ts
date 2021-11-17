import { Request, Response } from "express";
import { connect, disconnect } from "mongoose";
import { Imovel } from "../entidades/Imovel";
import { imovelRepositorio } from "../persistencia/imovelRepositario";

const uri = process.env.URI;

export async function getImovel(req: Request, res: Response) {
  try {
    const cliente = await connect(uri!);

    const imovel = await imovelRepositorio.buscarI();
    res.send(imovel);
  } catch (error) {
    res.send(error);
  } finally {
    await disconnect();
  }
}
export async function getImovelPorCasa(req: Request, res: Response) {
  try {
    const cliente = await imovelRepositorio.buscarIporfiltro("casa");
    res.send(cliente);
  } catch (error) {
    res.send(error);
  } finally {
    await disconnect();
  }
}
export async function getImovelPorAp(req: Request, res: Response) {
  try {
    const cliente = await imovelRepositorio.buscarIporfiltro("Apartamento");
    res.send(cliente);
  } catch (error) {
    res.send(error);
  } finally {
    await disconnect();
  }
}
export async function getImovelPorQuarto(req: Request, res: Response) {
  try {
    const cliente = await imovelRepositorio.buscarIporfiltro("Quarto");
    res.send(cliente);
  } catch (error) {
    res.send(error);
  } finally {
    await disconnect();
  }
}
export async function postImovel(req: Request, res: Response) {
  try {
    const cliente = await connect(uri!);

    const body: Imovel = req.body;
    if (body) {
      const imovel = await imovelRepositorio.criarI(body);
      res.send("Imóvel adicionado!");
    } else {
      res.status(400).send("Houve um problema na inserção dos dados!");
    }
  } catch (error) {
    res.send(error);
  } finally {
    await disconnect();
  }
}
