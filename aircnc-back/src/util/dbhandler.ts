import { MongoMemoryServer } from 'mongodb-memory-server';
import mongoose from 'mongoose';

const mongod = new MongoMemoryServer();

/**
 * Conectar com o banco de dados antes de qualquer teste.
 */
export async function connect() {
    const uri = mongod.getUri();
    await mongoose.connect(uri, (err) => {
        if (err) {
            console.log(err);
        }
    });
}

/**
 * Limpar o banco de dados depois de cada teste.
 */
export async function disconnect() {
    await mongoose.connection.dropDatabase();
    await mongoose.connection.close();
    await mongod.stop();
}

/**
 * Desconectar do banco de dados após todos os testes.
 */
export async function clearDatabase() {
    const collections = mongoose.connection.collections;
    for (const key in collections) {
        const collection = collections[key];
        await collection.deleteMany({});
    }
}


