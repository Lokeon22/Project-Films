import { useEffect, useState } from "react";
import { apiKey } from "../../data";
import { Link, useParams } from "react-router-dom";

import { Card } from "../../components/Card";
import { NotFound } from "../NotFound";

export const FilmFiltered = () => {
  const [filmes, setFilmes] = useState([]);
  const { name } = useParams();

  const getImage = "https://image.tmdb.org/t/p/w185/";

  useEffect(() => {
    const getMovieFiltered = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=pt-BR&page=1&include_adult=false&query=${name}`
      ).then((res) => res.json());
      setFilmes(response.results);
    };
    getMovieFiltered();
  }, []);

  return (
    <div className="mt-2">
      <Link to="/" className="text-white text-2xl px-4">
        Voltar
      </Link>
      {filmes.length > 0 ? (
        filmes.map((filme) => (
          <div key={filme.id}>
            <Card
              title={filme.title}
              src={`${getImage}${filme.poster_path}`}
              vote={filme.vote_average}
              link={`/details/${filme.id}`}
            />
          </div>
        ))
      ) : (
        <NotFound />
      )}
    </div>
  );
};
