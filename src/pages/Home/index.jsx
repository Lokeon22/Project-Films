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
    <section className="2xl:max-w-[1440px] 2xl:mx-auto 2xl:my-0">
      <Menu />
      <div className="sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
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
      </div>
    </section>
  );
}
