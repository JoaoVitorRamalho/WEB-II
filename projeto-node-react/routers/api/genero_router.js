import { createGenero, listGenero, editGenero, deleteGenero } from "../../controllers/api/genero_controller.js";

import { Router } from "express";



const genero_router = Router();

genero_router.get('/', listGenero);

genero_router.post('/', createGenero);

genero_router.put('/', editGenero);

genero_router.delete('/', deleteGenero);



export default genero_router;