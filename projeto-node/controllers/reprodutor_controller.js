import Reprodutor from "../models/reprodutor.js";

import Film from "../models/film.js";



async function createReprodutor(req, res) {

    const reprodutor = await Reprodutor.create({

        nome: req.body.nome,

        forma: req.body.forma

    });

    res.json(reprodutor);

}



async function listReprodutor(req, res) {

    const list = await Reprodutor.findAll({ include: Film });

    res.json(list);

}



async function editReprodutor(req, res) {

    const reprodutor = await Reprodutor.findOne({ where: { id: req.body.id } });

    reprodutor.nome = req.body.nome;

    reprodutor.forma= req.body.forma;

    await reprodutor.save();

    res.json({ mensage: 'Registro alterado' });

}



async function deleteReprodutor(req, res) {

    const reprodutor = await Reprodutor.findOne({ where: { id: req.body.id } });

    await reprodutor.destroy();

    res.json({ mensage: 'Registro removido.' });

}



export { createReprodutor, listReprodutor, editReprodutor, deleteReprodutor };