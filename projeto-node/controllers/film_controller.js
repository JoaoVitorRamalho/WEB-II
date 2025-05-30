import Film from "../models/film.js";

async function createFilm(req, res) {
    const film = await Film.create({
        title: req.body.title,
        description: req.body.description,
        year: req.body.year
    });
    res.json(film);
}

async function listFilms(req, res) {
    const list = await Film.findAll();
    res.json(list);
}

async function editFilm(req, res) {
    const film = await Film.findOne({
        where: {
            id: req.body.id
        }
    });
    film.title = req.body.title;
    film.description = req.body.description;
    film.year = req.body.year;
    if (await film.save()) {
        res.json({
            mensage: 'Registro alterado'
        });
    } else {
        res.json({
            mensage: 'Erro ao alterar'
        });
    }
}

 async function deleteFilm(req, res) {
        const film = await Film.findOne({where: {id:req.body.id}});
        await film.destroy();
        res.json({mensage:'Registro Excluido'});
    }

export {
    createFilm,
    listFilms,
    editFilm,
    deleteFilm
};