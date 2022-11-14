import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { apiKey } from "../../data"; //Free Key from TMDB

import { AiFillStar } from "react-icons/ai";

export function Card() {
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
    <div className="grid grid-cols-1 px-4 py-4">
      {filmes.map((filme) => (
        <div
          className="relative max-w-[200px] flex flex-col mx-auto my-5"
          key={filme.id}
        >
          <Link
            to={`/details/${filme.id}`}
            className="text-white text-center absolute w-full top-[68%] py-2 bg-gray-900/70 duration-300 delay-75 rounded hover:bg-red-800"
          >
            Detalhes
          </Link>
          <img
            src={`${getImage}/${filme.poster_path}`}
            className="rounded-md shadow-lg shadow-black w-[200px] object-cover"
          />
          <h2 className="text-white text-xl font-medium mt-3 ml-1">
            {filme.title}
          </h2>
          <label className="flex items-center gap-2 ml-1">
            <span className="text-slate-100">{filme.vote_average} / 10</span>
            <AiFillStar size={20} className="text-yellow-500" />
          </label>
        </div>
      ))}
    </div>
  );
}
