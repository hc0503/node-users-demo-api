import { Sequelize, Model, DataTypes, BuildOptions } from "sequelize";
import { database } from "../config/database";

export class User extends Model {
  public id!: number;
  public name!: string;
  public surname!: string;
  public age!: number;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

User.init(
    {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: new DataTypes.STRING(128),
            allowNull: false,
        },
        surname: {
            type: new DataTypes.STRING(128),
            allowNull: false,
        },
        age: {
            type: new DataTypes.INTEGER,
            allowNull: false,
        },
    },
    {
        tableName: "users",
        sequelize: database, // this bit is important
    }
);
  
User.sync({ force: false, alter: true }).then(() => console.log("User table created"));

export interface UserInterface {
    name: string;
    surname: string;
    age: number;
}