import Reprodutor from "../../models/reprodutor.js";

import Genero from "../../models/genero.js";

import Film from "../../models/film.js";



async function createFilm(req, res) {

    const reprodutores = [];

    for (let i = 0; i < req.body.reprodutores.length; i++) {

        const reprodutor = await Reprodutor.findByPk(req.body.reprodutor[i]);

        reprodutores.push(reprodutor);

    }

    const film = await Film.create({

        title: req.body.title,

        description: req.body.description,

        year: req.body.year,

        GeneroId: req.body.GeneroId

    });

    await film.addReprodutor(reprodutores);


    res.render('alerts', { title: 'Films', body: 'Film created.' });

}



async function listFilms(req, res) {

    const list = await Film.findAll({ include: [Reprodutor, Genero], raw: true, nest: true });
    console.log(list);

    res.render('films/films', { films: list });

}



async function editFilm(req, res) {

    const film = await Film.findOne({ where: { id: req.body.id } });

    res.render('films/films', { action: 'edit', film_editing: film.dataValues });

}



async function saveFilm(req, res) {

    const film = await Film.findOne({ where: { id: req.body.id } });

    film.title = req.body.title;

    film.description = req.body.description;

    film.year = req.body.year;

    film.GeneroId = req.body.GeneroId;

    await film.save();

    res.render('alerts', { title: 'Films', body: 'Film edited.' });

}



async function deleteFilm(req, res) {

    const film = await Film.findOne({ where: { id: req.body.id } });

    await film.destroy();

    res.render('alerts', { title: 'Films', body: 'Film deleted.' });

}



export { createFilm, listFilms, editFilm, saveFilm, deleteFilm };