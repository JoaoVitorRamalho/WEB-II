import express from 'express';
import { create } from 'express-handlebars';

import session from 'express-session';
import css from 'connect-session-sequelize';

import film_web_router from './routers/web/film_router.js';
import ator_web_router from './routers/web/ator_router.js';
import genero_web_router from './routers/web/genero_router.js';
import reprodutor_web_router from './routers/web/reprodutor_router.js';
import user_web_router from './routers/web/user_router.js';
import syncer from './database/syncer.js';
import sequelize from './database/mysql.js';

import { checkLogged } from './controllers/web/user_controller.js';
//sequelize.sync();


if(!await syncer()){

    process.exit();

}

const app = express();


const SequelizeStore = css(session.Store);

const sequelizeStore = new SequelizeStore({

    db: sequelize,

    tableName: 'sessions',

    checkExpirationInterval: 5 * 60 * 1000,

    expiration: 1 * 60 * 60 * 1000 

});

app.use(session({

    secret: '*&long+and+secure+secret=%445',

    name: 'sess_cookie_param',

    store: sequelizeStore,

    cookie: {

        maxAge: 1 * 60 * 60 * 1000,

        secure: false, // if using HTTPS

        httpOnly: true // somente browsers

    },

    saveUninitialized: false, 

    resave: false

}));

await sequelizeStore.sync();


const hbs = create({

    extname: '.handlebars',

    defaultLayout: 'main',

    layoutsDir: 'views/layouts/',

    partialsDir: 'views/partials/'

});

hbs.handlebars.registerHelper('eq', (a, b)=> {return a == b});
hbs.handlebars.registerHelper("contains", (a, b) => {
  return typeof a != 'undefined' && a.indexOf(b) != -1;
});

app.use(express.json());
app.use(express.urlencoded());

app.engine('handlebars', hbs.engine);

app.set('view engine', 'handlebars');

app.set('views', './views');


app.get('/', (req, res) => {

    res.render('home');

});

app.use('/films', checkLogged,film_web_router);
app.use('/atores', checkLogged,ator_web_router);
app.use('/generos', checkLogged,genero_web_router);
app.use('/reprodutores', checkLogged,reprodutor_web_router);
app.use('/users', user_web_router);

app.listen(80, ()=> {
    console.log('Escutando...');
});