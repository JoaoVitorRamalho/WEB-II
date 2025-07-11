import { API_PATH } from "../constants/constants";



async function createReprodutor(dataReprodutor) {}



async function listReprodutor() {

    const res = await fetch(`${API_PATH}/reprodutores`);

    const reprodutores = await res.json();

    return reprodutores;

}



async function editReprodutor() {}



async function deleteReprodutor() {}



export { createReprodutor, listReprodutor, editReprodutor, deleteReprodutor };