import express from 'express';
import film_router from './routers/film_router.js';
import ator_router from './routers/ator_router.js';
import genero_router from './routers/genero_router.js';
import reprodutor_router from './routers/reprodutor_router.js';
import syncer from './database/syncer.js';
// import sequelize from './database/mysql.js';
//sequelize.sync();


if(!await syncer()){

    process.exit();

}


const app = express();
app.use(express.json());
app.get('/', (req, res)=>{
    res.end('Rodando');
});

app.use('/films', film_router);
app.use('/atores', ator_router);
app.use('/generos', genero_router);
app.use('/reprodutores', reprodutor_router);

app.listen(80, ()=> {
    console.log('Escutando...');
});