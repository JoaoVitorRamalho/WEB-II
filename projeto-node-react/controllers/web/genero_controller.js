import Genero from "../../models/genero.js";

import Film from "../../models/film.js";



async function createGenero(req, res) {

    const genero = await Genero.create({

        tipo: req.body.tipo,

        descricao: req.body.descricao

    });

  res.render('alerts', { title: 'Generos', body: 'Genero created.' });

}



async function listGenero(req, res) {

    const list = await Genero.findAll({ include: Film, raw:true });

    res.render('generos/generos', { generos: list });

}



async function editGenero(req, res) {

    const genero = await Genero.findOne({ where: { id: req.body.id } });

    res.render('generos/generos', { action: 'edit', genero_editing: genero.dataValues });

}



async function deleteGenero(req, res) {

    const genero = await Genero.findOne({ where: { id: req.body.id } });

    await genero.destroy();

    res.render('alerts', { title: 'Generos', body: 'Genero deleted.' });

}

async function saveGenero(req, res) {

    const genero = await Genero.findOne({ where: { id: req.body.id } });

    genero.tipo = req.body.tipo;

    genero.descricao = req.body.descricao;

    await genero.save();

    res.render('alerts', { title: 'Generos', body: 'Genero edited.' });

}

export { createGenero, listGenero, editGenero, deleteGenero, saveGenero };