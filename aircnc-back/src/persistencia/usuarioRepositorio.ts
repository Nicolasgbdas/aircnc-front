import { Usuario } from "../entidades/usuario";
import { UserModel } from "./usuarioModel";

export class usuarioRepositorio {
    static async criarU(usuario: Usuario): Promise<Usuario> {
        return UserModel.create(usuario)
    }
    static async buscarU(): Promise<Usuario[]> {
        let consulta = UserModel.find();
        return consulta.exec();
    }
    static async buscarUNome(nome: string): Promise<Usuario[]> {
        let consultaNome = UserModel.find().where({ nome: nome });
        return consultaNome.exec();
    }

    static async atualizaU(
        id: string,
        nome?: string,
        genero?: string,
        dataNasc?: Date,
        email?: string,
        telefone?: string,
        documento?: number,
        endereco?: string,
        contatoEmerg?: number) {
        if (nome != undefined) {
            let alteraUser = await UserModel.where({ _id: id }).updateOne({ nome: nome }).exec();
        }
        if (genero != undefined) {
            let alteraUser = await UserModel.where({ _id: id }).updateOne({ genero: genero }).exec();
        }
        if (dataNasc != undefined) {
            let alteraUser = await UserModel.where({ _id: id }).updateOne({ dataNasc: dataNasc }).exec();
        }
        if (email != undefined) {
            let alteraUser = await UserModel.where({ _id: id }).updateOne({ email: email }).exec();
        }
        if (telefone != undefined) {
            let alteraUser = await UserModel.where({ _id: id }).updateOne({ telefone: telefone }).exec();
        }
        if (documento != undefined) {
            let alteraUser = await UserModel.where({ _id: id }).updateOne({ documento: documento }).exec();
        }
        if (endereco != undefined) {
            let alteraUser = await UserModel.where({ _id: id }).updateOne({ endereco: endereco }).exec();
        }
        if (contatoEmerg != undefined) {
            let alteraUser = await UserModel.where({ _id: id }).updateOne({ contatoEmerg: contatoEmerg }).exec();
        }
    }
}

