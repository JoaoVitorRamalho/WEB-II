import { DataTypes } from "sequelize";
import sequelize from "../database/mysql.js";

const Ator = sequelize.define('Ator',{
    nome: DataTypes.STRING,
    personagem: DataTypes.STRING,
    idade: DataTypes.INTEGER,
    salario: DataTypes.INTEGER
});

export default Ator;