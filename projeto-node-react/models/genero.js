import { DataTypes } from "sequelize";

import sequelize from "../database/mysql.js";



const Genero = sequelize.define('Genero', {

    tipo: DataTypes.STRING,

    descricao: DataTypes.STRING    

});



export default Genero;