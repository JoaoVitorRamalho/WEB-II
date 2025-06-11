import Reprodutor from "../../models/reprodutor.js";

import Film from "../../models/film.js";



async function createReprodutor(req, res) {

    const reprodutor = await Reprodutor.create({

        nome: req.body.nome,

        forma: req.body.forma

    });

    res.render('alerts', {title: 'Reprodutores', body: 'Reprodutor created.'});

}



async function listReprodutor(req, res) {

    const list = await Reprodutor.findAll({ include: Film, raw: true });

    res.render('reprodutores/reprodutores', {reprodutores:list});

}



async function editReprodutor(req, res) {

    const reprodutor = await Reprodutor.findOne({ where: { id: req.body.id } });

    res.render('reprodutores/reprodutores',{action: 'edit',reprodutor_editing: reprodutor.dataValues });

}



async function deleteReprodutor(req, res) {

    const reprodutor = await Reprodutor.findOne({ where: { id: req.body.id } });

    await reprodutor.destroy();

    res.render('alerts', {title: 'Reprodutores', body: 'Reprodutor Deleted.' });

}

async function saveReprodutor(req, res) {

    const reprodutor = await Reprodutor.findOne({ where: { id: req.body.id } });

    reprodutor.nome = req.body.nome;

    reprodutor.forma = req.body.forma;

    await reprodutor.save();

    res.render('alerts', { title: 'Reprodutores', body: 'Reprodutor edited.' });

}

export { createReprodutor, listReprodutor, editReprodutor, deleteReprodutor, saveReprodutor };