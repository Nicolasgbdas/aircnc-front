import { Imovel } from "./Imovel";

export interface Usuario {
    nome: string,
    genero: string,
    dataNasc: Date,
    email: string,
    telefone: string,
    documento: number,
    endereco: string,
    contatoEmerg: number,
    imoveis: Imovel[];
}