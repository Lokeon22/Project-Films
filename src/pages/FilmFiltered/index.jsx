import { useEffect, useState } from "react";
import { apiKey } from "../../data";
import { Link, useParams } from "react-router-dom";

import { Card } from "../../components/Card";

export const FilmFiltered = () => {
  /* const [filmes, setFilmes] = useState([]);
  const { name } = useParams();

  useEffect(() => {
    const getMovieFiltered = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=pt-BR&page=1&include_adult=false&query=${name}`
      ).then((res) => res.json());
      setFilmes(response.results);
      console.log(response.results);
    };
    getMovieFiltered();
  }, []);*/

  return (
    <div>
      <h2 className="text-white">Pagina filme</h2>
      <Link to="/">Voltar</Link>
    </div>
  );
};
