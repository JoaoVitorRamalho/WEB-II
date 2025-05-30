import sequelize from "./mysql";

async function syncer() {
    try{
    await sequelize.authenticate();
    Film.sync();
    Film.belongsTo(Director);
    Director.hasManu(Film);
    Film.belongsToMany(Actor, {through: 'Film_Actor'});
    Actor.belongsToMany(Film, {through: 'Film_Actor'});
    sequelize.sync();
    true;
}catch (error){
    console.log('Erro ao acessar a base de dados.')
    return false;
}
return true;
}

export default syncer;