import { createAtor, listAtor, editAtor, deleteAtor } from "../../controllers/api/ator_controller.js";
import {Router} from "express";

const ator_router = Router();
ator_router.get('/',listAtor);
ator_router.post('/', createAtor);
ator_router.put('/',editAtor);
ator_router.delete('/',deleteAtor);

export default ator_router;