import Genero from "../models/genero.js";

import Reprodutor from "../models/reprodutor.js";

import Film from "../models/film.js";

import sequelize from "./mysql.js";

async function syncer() {
    try{
    await sequelize.authenticate();


        Film.belongsTo(Genero);

        Genero.hasMany(Film);


        Film.belongsToMany(Reprodutor, { through: 'Film_Reprodutor' });

        Reprodutor.belongsToMany(Film, { through: 'Film_Reprodutor' });


    await sequelize.sync();
}catch (error){
    console.log('Erro ao acessar a base de dados.')
    return false;
}
return true;
}

export default syncer;