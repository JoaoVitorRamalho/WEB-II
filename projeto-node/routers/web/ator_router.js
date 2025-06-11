import { createAtor, deleteAtor, editAtor, listAtor, saveAtor } from "../../controllers/web/ator_controller.js";

import { Router } from "express";



const ator_web_router = Router();

ator_web_router.get('/', listAtor);

ator_web_router.post('/create', createAtor);

ator_web_router.post('/edit', editAtor);

ator_web_router.post('/save', saveAtor);

ator_web_router.post('/delete', deleteAtor);



export default ator_web_router;