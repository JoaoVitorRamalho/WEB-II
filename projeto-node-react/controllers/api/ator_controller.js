import Ator from "../../models/ator.js";

async function createAtor(req, res){
    const ator = await Ator.create({
        nome: req.body.nome,
        personagem: req.body.personagem,
        idade: req.body.idade,
        salario: req.body.salario
    });
    res.json(ator);
}

async function listAtor(req, res){
    const list = await Ator.findAll();
    res.json(list);
}

async function editAtor(req, res){
    const ator = await Ator.findOne({
        where: {
            id: req.body.id
        }
    });
    ator.nome = req.body.nome;
    ator.personagem = req.body.personagem;
    ator.idade = req.body.idade;
    ator.salario = req.body.salaio;
    if (await ator.save()) {
        res.json({
            mensage: 'Registro alterado'
        });
    } else {
        res.json({
            mensage: 'Erro ao alterar'
        });
    }
}

async function deleteAtor(req, res){
    const ator = await Ator.findOne({where: {id:req.body.id}});
    await ator.destroy();
    res.json({mensage:'Ator Excluido'});
}

export {
    createAtor,
    listAtor,
    editAtor,
    deleteAtor
};

