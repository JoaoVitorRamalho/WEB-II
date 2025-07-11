import { DataTypes } from "sequelize";

import sequelize from "../database/mysql.js";



const Reprodutor = sequelize.define('Reprodutor', {

    nome: DataTypes.STRING,

    forma: DataTypes.STRING    

});



export default Reprodutor;
