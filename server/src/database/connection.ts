import knex from 'knex';
import path from 'path';

const connection = knex({
    client: 'sqlite3',
    connection: {
        filename: path.resolve(__dirname, 'database.sqlite'),
    },
    useNullAsDefault:true,
});

export default connection;

//migrations = Histórico do banco de dados
//exemplo
//create table points
// create table users
// utilizando o knex, basta só um comando para
// criar as tabelas

