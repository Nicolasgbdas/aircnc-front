import { Imovel } from "../entidades/Imovel";
import { model, Schema} from 'mongoose';

const imovelSchema = new Schema<Imovel>({
    preco: {type: Number, required: true},
    tipoDeImovel: {type: String, required: true, min:4, max:50},
    comodos: {type: Number, min:1, max:50},
    banheiros: {type: Number, required: true, min:1, max:50},
    disponibilidade: {type: Boolean, required: true, min:4, max:50},
    endereco: {type: String, required: true, min:1, max:50},
    comodidades: {type: {arCond: Boolean, wifi: Boolean, cozinha: Boolean, garagem: Boolean }, required: true},
    seguranca: {type: {detecFumaça: Boolean, extintorIncend: Boolean, cameras: Boolean, alarmcorbono: Boolean}, required: true},
    andar: {type: Number, min:1},
    elevador: {type: Boolean,},
    txServico: {type: Number, required: true},
    txLimpeza: {type: Number, required: true}
})
export const ImovelModel = model<Imovel>('Imovel', imovelSchema ,'imoveis')