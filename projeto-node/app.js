import express from 'express';
import { create } from 'express-handlebars';

import film_web_router from './routers/web/film_router.js';
import ator_web_router from './routers/web/ator_router.js';
import genero_web_router from './routers/web/genero_router.js';
import reprodutor_web_router from './routers/web/reprodutor_router.js';
import syncer from './database/syncer.js';
// import sequelize from './database/mysql.js';
//sequelize.sync();


if(!await syncer()){

    process.exit();

}


const app = express();
const hbs = create({

    extname: '.handlebars',

    defaultLayout: 'main',

    layoutsDir: 'views/layouts/',

    partialsDir: 'views/partials/'

});

hbs.handlebars.registerHelper('eq', (a, b)=> {return a == b});

app.use(express.json());
app.use(express.urlencoded());

app.engine('handlebars', hbs.engine);

app.set('view engine', 'handlebars');

app.set('views', './views');



app.get('/', (req, res) => {

    res.render('home');

});

app.use('/films', film_web_router);
app.use('/atores', ator_web_router);
app.use('/generos', genero_web_router);
app.use('/reprodutores', reprodutor_web_router);

app.listen(80, ()=> {
    console.log('Escutando...');
});