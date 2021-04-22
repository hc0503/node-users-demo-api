import { Sequelize } from "sequelize";

const dbName: any = process.env.DB_NAME,
    dbUser: any = process.env.DB_USER,
    dbPassword: any = process.env.DB_PASSWORD,
    dbHost: any = process.env.DB_HOST,
    dbDialect: any = process.env.DB_Dialect;

export const database = new Sequelize(dbName, dbUser, dbPassword, {
    host: dbHost,
    dialect: dbDialect,
});