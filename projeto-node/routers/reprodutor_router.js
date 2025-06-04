import { createReprodutor, deleteReprodutor, editReprodutor, listReprodutor } from "../controllers/reprodutor_controller.js";

import { Router } from "express";



const reprodutor_router = Router();

reprodutor_router.get('/', listReprodutor);

reprodutor_router.post('/', createReprodutor);

reprodutor_router.put('/', editReprodutor);

reprodutor_router.delete('/', deleteReprodutor);



export default reprodutor_router;