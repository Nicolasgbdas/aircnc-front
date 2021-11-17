import { comodImovel } from "./comodImovel";
import { segImoveis } from "./segImovel";

export interface Imovel {
    //fotosDoImovel: [],
    preco: number,
    tipoDeImovel: string,
    comodos?: number,
    banheiros: number,
    disponibilidade: boolean,
    endereco: string,
    comodidades: comodImovel,
    seguranca: segImoveis,
    andar?: number,
    elevador?: boolean,
    txServico: number,
    txLimpeza: number;
};
