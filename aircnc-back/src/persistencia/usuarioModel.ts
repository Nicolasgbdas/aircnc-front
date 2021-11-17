import { Usuario } from "../entidades/usuario"
import { model, Schema } from 'mongoose'

const usuarioSchema = new Schema<Usuario>({
    nome: {type: String, required: true, min: 1, max: 100},
    genero: { type: String, required: true, min: 1, max: 15},
    dataNasc: {type: Date, required: true},
    email: { type: String, required: true, min: 10, max: 40},
    telefone: {type: String, required: true},
    documento: {type: Number, required: true},
    endereco: {type: String, required: true},
    contatoEmerg: {type: Number, required: true}
})

export const UserModel = model<Usuario>('Usuario', usuarioSchema, 'usuários')