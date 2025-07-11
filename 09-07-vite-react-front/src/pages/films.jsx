import { useEffect, useState } from "react";

import { createOrEditFilm, deleteFilm, listFilms } from "../data_access/film_access";

import { listReprodutor } from "../data_access/reprodutor_access";

import { listGenero } from "../data_access/genero_access";

const Films = () => {
  const [films, setFilms] = useState([]);

  const [allReprodutores, setAllReprodutores] = useState([]);

  const [generos, setGeneros] = useState([]);

  const [action, setAction] = useState("Criar");

  const [id, setId] = useState(null);

  const [title, setTitle] = useState("");

  const [description, setDescription] = useState("");

  const [year, setYear] = useState("");

  const [genero, setGenero] = useState(0);


  useEffect(() => {
    listFilms().then((films) => setFilms(films));

    listReprodutor().then((reprodutores) => {
      reprodutores = reprodutores.map((reprodutor) => {
        reprodutor.checked = false;

        return reprodutor;
      });

      setAllReprodutores(reprodutores);
    });

    listGenero().then((generos) => {
      setGeneros(generos)
      setGenero(generos[0].id)
    });
  }, []);

  function handleSubmitFilm(e) {
    e.preventDefault();
    const data = {
      id: id,
      title: title,
      description: description,
      year: year,
      GeneroId: genero,
      reprodutores: allReprodutores
        .filter((reprodutor) => reprodutor.checked)
        .map((reprodutor) => reprodutor.id),
    };

    createOrEditFilm(data).then((res) => {
      alert(res.message);

      listFilms().then((films) => setFilms(films));
    });

    setId(null);

    setTitle("");

    setDescription("");

    setYear("");

    setGenero("");

    setAllReprodutores(
      allReprodutores.map((reprodutor, index) => {
        reprodutor.checked = false;
        return reprodutor;
      })
    );

    setAction("Criar");
  }

  function handleEditButton(e) {
    const filmId = e.target.dataset.id;

    const film = films.find((f) => f.id == filmId);

    if (film) {
      setId(film.id);

      setTitle(film.title);

      setDescription(film.description);

      setYear(film.year);

      setGenero(film.GeneroId);

      allReprodutores.forEach((reprodutor) => {
        reprodutor.checked = film.Reprodutores.some((a) => a.id == reprodutor.id);
      });

      setAllReprodutores(allReprodutores.map((v) => v));

      setAction("Editar");
    }
  }

  function handleDelButton(e) {
    deleteFilm(e.target.dataset.id).then((res) => {
      alert(res.message);

      listFilms().then((films) => setFilms(films));
    });
  }

  function toggleSelectReprodutores(id) {
    const index = allReprodutores.findIndex((reprodutor) => reprodutor.id == id);

    allReprodutores[index].checked = !allReprodutores[index].checked;

    setAllReprodutores(allReprodutores.map((v) => v));
  }

  return (
    <div>
      <h1>Filmes</h1>

      <form onSubmit={handleSubmitFilm} method="post">
        <label>Title</label>
        <br />

        <input
          type="text"
          value={title}
          required
          onInput={(e) => setTitle(e.target.value)}
        />
        <br />

        <label>Description</label>
        <br />

        <input
          type="text"
          value={description}
          required
          onInput={(e) => setDescription(e.target.value)}
        />
        <br />

        <label>Year</label>
        <br />

        <input
          type="number"
          value={year}
          required
          onInput={(e) => setYear(e.target.value)}
        />
        <br />

        <label>Genero</label>
        <br />

        <select
          value={genero}
          required
          onChange={(e) => setGenero(e.target.value)}
        >
          {generos.map((genero, index) => {
            return (
              <option key={index} value={genero.id}>
                {genero.tipo}
              </option>
            );
          })}
        </select>

        <br />

        <label>Reprodutores</label>
        <br />

        {allReprodutores.map((reprodutor, index) => {
          return (
            <div key={reprodutor.id}>
              <label>
                <input
                  type="checkbox"
                  value={reprodutor.id}
                  checked={reprodutor.checked}
                  onChange={(e) => toggleSelectReprodutores(reprodutor.id)}
                />

                {reprodutor.nome}
              </label>
            </div>
          );
        })}

        <button>{action}</button>
      </form>

      <table>
        <thead>
          <tr>
            <th>Title</th>

            <th>Description</th>

            <th>Year</th>

            <th>Genero</th>

            <th>Reprodutores</th>

            <th>Ações</th>
          </tr>
        </thead>

        <tbody>
          {films.map((v, i) => {
            console.log(v);
            return (
              <tr key={i}>
                <td>{v.title}</td>

                <td>{v.description}</td>

                <td>{v.year}</td>

                <td>{v.Genero.tipo}</td>

                <td>
                  {v.Reprodutors.map((v, i) => {
                    return <p key={i}>{v.nome}</p>;
                  })}
                </td>
                <td>
                  <button data-id={v.id} onClick={handleEditButton}>
                    Edit
                  </button>
                  <button data-id={v.id} onClick={handleDelButton}>
                    Del
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Films;
