import { saveReprodutor,createReprodutor, deleteReprodutor, editReprodutor, listReprodutor } from "../../controllers/web/reprodutor_controller.js";

import { Router } from "express";



const reprodutor_web_router = Router();

reprodutor_web_router.get('/', listReprodutor);

reprodutor_web_router.post('/create', createReprodutor);

reprodutor_web_router.post('/edit', editReprodutor);

reprodutor_web_router.post('/delete', deleteReprodutor);

reprodutor_web_router.post('/save', saveReprodutor);



export default reprodutor_web_router;