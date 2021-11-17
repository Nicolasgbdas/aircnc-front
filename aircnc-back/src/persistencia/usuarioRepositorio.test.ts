import { usuarioRepositorio } from './usuarioRepositorio';
import { UserModel } from './usuarioModel';
import { Usuario } from '../entidades/usuario';
import * as dbhandler from '../util/dbhandler';

jest.setTimeout(600000);

/**
 * Conectar com o banco de dados antes de qualquer teste.
 */
beforeAll(async () => {
    await dbhandler.connect();
});

/**
 * Limpar o banco de dados depois de cada teste.
 */
afterEach(async () => {
    await dbhandler.clearDatabase();
});

/**
 * Desconectar do banco de dados após todos os testes.
 */
afterAll(async () => {
    await dbhandler.disconnect();
});

describe('UsuarioRepositorio', () => {
    const userDeTeste: Usuario = {
    nome: 'nicolas',
    genero: 'masculino',
    dataNasc: new Date("March 19, 1997 09:30:35"),
    email: 'nicolasgbds@jotmail.com',
    telefone: '51984557531',
    documento: 85918768068,
    endereco: 'alameda z, casa 225',
    contatoEmerg: 9846215648

    };
    describe('criar() integração', () => {
        test('deve inserir um usuário sem erro', async() => {
            expect(async () => {
                await usuarioRepositorio.criarU(userDeTeste);
            }).not.toThrow();
        });
        test('deve inserir usuário e retornar o objeto inserido no bd', async () => {
            const userInserido = await usuarioRepositorio.criarU(userDeTeste);
            expect(userInserido).toBeInstanceOf(UserModel);
            expect(userInserido.nome).toBe(userDeTeste.nome);
            expect(userInserido.genero).toBe(userDeTeste.genero);
            expect(userInserido.dataNasc).toBe(userDeTeste.dataNasc);
            expect(userInserido.email).toBe(userDeTeste.email);
            expect(userInserido.telefone).toBe(userDeTeste.telefone);
            expect(userInserido.documento).toBe(userDeTeste.documento);
            expect(userInserido.endereco).toBe(userDeTeste.endereco);
            expect(userInserido.contatoEmerg).toBe(userDeTeste.contatoEmerg);
        });
    });
});