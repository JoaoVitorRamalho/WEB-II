import Reprodutor from "../models/reprodutor.js";

import Genero from "../models/genero.js";

import Film from "../models/film.js";



async function createFilm(req, res) {

    const reprodutores = [];

    for (let i = 0; i < req.body.reprodutores.length; i++) {

        const reprodutor = await Reprodutor.findByPk(req.body.reprodutores[i]);

        reprodutores.push(reprodutor);

    }

    const film = await Film.create({

        title: req.body.title,

        description: req.body.description,

        year: req.body.year,

        GeneroId: req.body.GeneroId

    });

    await film.addReprodutor(reprodutores);

    res.json(film);

}



async function listFilms(req, res) {

    const list = await Film.findAll({ include: [Reprodutor, Genero] });

    res.json(list);

}



async function editFilm(req, res) {

    const film = await Film.findOne({ where: { id: req.body.id } });

    film.title = req.body.title;

    film.description = req.body.description;

    film.year = req.body.year;

    await film.save();

    res.json({ mensage: 'Registro alterado' });

}



async function deleteFilm(req, res) {

    const film = await Film.findOne({ where: { id: req.body.id } });

    await film.destroy();

    res.json({ mensage: 'Registro removido.' });

}



export { createFilm, listFilms, editFilm, deleteFilm };