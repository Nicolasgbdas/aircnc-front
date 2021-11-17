import { Router } from "express";
import * as appController from '../controllers/appController';

export const router = Router();
router.get(`/imoveis`, appController.getImovel);
router.post(`/`,appController.postImovel);

