import { API_PATH } from "../constants/constants";



async function createGenero(dataGenero) {}



async function listGenero() {

    const res = await fetch(`${API_PATH}/generos`);

    const generos = await res.json();

    return generos;

}



async function editGenero() {}



async function deleteGenero() {}



export { createGenero, listGenero, editGenero, deleteGenero };