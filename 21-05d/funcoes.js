const getCidades = async (uf) => {
    const res = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/municipios`);
    const dados = await res.json();
    return dados;
};

export default getCidades;