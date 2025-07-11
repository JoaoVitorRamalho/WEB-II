import { createGenero, deleteGenero, editGenero, listGenero, saveGenero } from "../../controllers/web/genero_controller.js";

import { Router } from "express";



const genero_web_router = Router();

genero_web_router.get('/', listGenero);

genero_web_router.post('/create', createGenero);

genero_web_router.post('/edit', editGenero);

genero_web_router.post('/save', saveGenero);

genero_web_router.post('/delete', deleteGenero);



export default genero_web_router;