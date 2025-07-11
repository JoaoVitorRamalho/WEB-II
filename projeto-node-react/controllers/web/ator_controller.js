import Ator from "../../models/ator.js";

async function createAtor(req, res){
    const ator = await Ator.create({
        nome: req.body.nome,
        personagem: req.body.personagem,
        idade: req.body.idade,
        salario: req.body.salario
    });
    res.render('alerts', {title: 'Atores', body: 'Ator created.' });
}

async function listAtor(req, res){
    const list = await Ator.findAll({raw: true});
    res.render('atores/atores',{atores: list});
}

async function editAtor(req, res) {

    const ator = await Ator.findOne({ where: { id: req.body.id } });

    res.render('atores/atores', { action: 'edit', ator_editing: ator.dataValues });

}
async function deleteAtor(req, res){
    const ator = await Ator.findOne({where: {id:req.body.id}});
    await ator.destroy();
    res.render('alerts', {title:'Atores', body:'Ator deleted.' });
}

async function saveAtor(req, res) {

    const ator = await Ator.findOne({ where: { id: req.body.id } });

    ator.nome = req.body.nome;

    ator.personagem = req.body.personagem;

    ator.idade = req.body.idade;

    ator.salario = req.body.salario

    await ator.save();

    res.render('alerts', { title: 'Atores', body: 'Ator edited.' });

}

export {createAtor, listAtor, editAtor, deleteAtor, saveAtor};