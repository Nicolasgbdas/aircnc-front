import { Imovel } from "../entidades/Imovel";
import { ImovelModel } from "./imovelModel";

export class imovelRepositorio {
    static async criarI(imovel: Imovel): Promise<Imovel> {
        return ImovelModel.create(imovel)
    }
    static async buscarI(): Promise<Imovel[]> {
        let consulta = ImovelModel.find();
        return consulta.exec();
    }
    static async buscarIporfiltro(tipo: string) {
        let consultaf = await ImovelModel.where('tipoDeImovel').equals(tipo).exec();
        return consultaf;
    }

}