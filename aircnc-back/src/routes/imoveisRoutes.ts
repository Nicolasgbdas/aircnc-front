import { Router } from "express";
import * as appController from '../controllers/appController';

export const router = Router();
router.get(`/imoveis`, appController.getImovel);
router.post(`/CadastrarImovel`,appController.postImovel);
router.get(`/buscaporcasa`, appController.getImovelPorCasa);
router.get(`/buscaporap`, appController.getImovelPorAp);
router.get(`/buscaporquarto`, appController.getImovelPorQuarto);


