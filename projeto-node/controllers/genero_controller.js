import Genero from "../models/genero.js";

import Film from "../models/film.js";



async function createGenero(req, res) {

    const genero = await Genero.create({

        tipo: req.body.tipo,

        descricao: req.body.descricao

    });

    res.json(genero);

}



async function listGenero(req, res) {

    const list = await Genero.findAll({ include: Film });

    res.json(list);

}



async function editGenero(req, res) {

    const genero = await Genero.findOne({ where: { id: req.body.id } });

    genero.tipo = req.body.tipo;

    genero.descricao = req.body.descricao;

    await genero.save();

    res.json({ mensage: 'Registro alterado' });

}



async function deleteGenero(req, res) {

    const genero = await Genero.findOne({ where: { id: req.body.id } });

    await genero.destroy();

    res.json({ mensage: 'Registro removido.' });

}



export { createGenero, listGenero, editGenero, deleteGenero };