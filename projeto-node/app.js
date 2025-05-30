import express from 'express';
import film_router from './routers/film_router.js';
import ator_router from './routers/ator_router.js';
import sequelize from './database/mysql.js';
//sequelize.sync();



const app = express();
app.use(express.json());
app.get('/', (req, res)=>{
    res.end('Rodando');
});

app.use('/films', film_router);
app.use('/atores', ator_router)

app.listen(80, ()=> {
    console.log('Escutando...');
});