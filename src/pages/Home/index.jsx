import { useEffect, useState } from "react";
import { apiKey } from "../../data"; //Free Key from TMDB

import { Menu } from "../../components/Menu";
import { Card } from "../../components/Card";

export function Home() {
  const [filmes, setFilmes] = useState([]);

  const getImage = "https://image.tmdb.org/t/p/w185/";

  useEffect(() => {
    const getMovies = async () => {
      const response = await fetch(
        `
      https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=pt-BR`
      ).then((res) => res.json());
      setFilmes(response.results);
    };
    getMovies();
  }, []);

  return (
    <section className="w-full h-full">
      <Menu />
      {filmes.map((filme) => (
        <div key={filme.id}>
          <Card
            title={filme.title}
            vote={filme.vote_average}
            link={`/details/${filme.id}`}
            src={`${getImage}${filme.poster_path}`}
          />
        </div>
      ))}
    </section>
  );
}
