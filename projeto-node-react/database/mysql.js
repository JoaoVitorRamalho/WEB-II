import { Sequelize } from "sequelize";

const sequelize = new Sequelize({
    dialect: 'mysql',
    host: 'localhost',
    port: '3306',
    username: 'root',
    password: 'root',
    database: 'pratica_node'
});
//const sequelize = new Sequelize('postgresql://pratica_filmes_user:EsmGtJDBgslv50XCI9VUyOGZSkkMBtVI@dpg-d1ir7l2li9vc73bsk6vg-a/pratica_filmes_db_8v7b');

export default sequelize;