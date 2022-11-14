import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { apiKey } from "../../data"; //Free Key from TMDB

import { AiFillStar, AiFillCalendar } from "react-icons/ai";
import { BiMoviePlay } from "react-icons/bi";
import { BsStopwatch } from "react-icons/bs";

export function Details() {
  const { id } = useParams();

  const [movie, setMovie] = useState([]);

  useEffect(() => {
    const movieDetails = async () => {
      const data = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=pt-BR`
      ).then((res) => res.json());

      //Preserv Error async object and corrections dates to BR
      const vote = data.vote_average.toFixed(1);
      const imgBG = "https://image.tmdb.org/t/p/w185" + data.poster_path;
      let date_american = data.release_date;
      let date_br = date_american.split("-").reverse().join("/");

      const movie = {
        id: data.id,
        title: data.title,
        overview: data.overview,
        runtime: data.runtime,
        imgBG: imgBG,
        release: date_br,
        vote: vote,
        genre1: data.genres[0].name,
        genre2: data.genres[1].name,
      };
      setMovie(movie);
    };
    movieDetails();
  }, []);

  return (
    <div className="min-w-[300px] pt-[10%] md:max-w-[1200px] md:h-full md:mx-auto my-0">
      <div key={movie.id} className="md:grid md:grid-cols-2">
        <img
          src={`${movie.imgBG}`}
          className="w-[300px] md:w-[350px] mx-auto my-0 md:mx-4 rounded-md md:col-span-1"
        />
        <div className="flex flex-col justify-center mt-2 px-4 md:px-0 md:pr-4">
          <h2 className="text-white text-xl font-medium text-center md:text-start lg:text-4xl lg:mb-2">
            {movie.title}
          </h2>
          <label className="flex items-center justify-center gap-2 mb-2 md:justify-start lg:text-2xl">
            <span className="text-slate-100">{movie.vote} / 10</span>
            <AiFillStar className="text-yellow-500 lg:w-7 lg:h-7" />
          </label>
          <p className="text-white text-sm text-start mb-2 lg:text-lg xl:mb-4">
            <strong className="text-slate-200 text-base lg:text-xl">
              Sinopse:
            </strong>{" "}
            {movie.overview}
          </p>
          <label className="text-white flex items-center gap-2 mb-2 lg:text-lg">
            <AiFillCalendar className="text-red-600 lg:w-5 lg:h-5" size={16} />
            <p>Data de lançamento: {movie.release}</p>
          </label>
          <label className="text-white flex items-center gap-2 mb-2 lg:text-lg">
            <BsStopwatch className="text-red-600 lg:w-5 lg:h-5" size={16} />
            <p>Duração: {movie.runtime} minutos</p>
          </label>
          <label className="text-white flex items-center gap-2 mb-2 lg:text-lg">
            <BiMoviePlay className="text-red-600 lg:w-5 lg:h-5" size={16} />
            <span>{movie.genre1}</span>
            <span>{movie.genre2}</span>
          </label>
        </div>
      </div>
      <div className="flex items-center justify-center px-4 md:mt-2 md:flex-col">
        <Link
          to="/"
          className="text-white text-center bg-red-600 w-full mb-4 py-2  rounded-sm"
        >
          Voltar
        </Link>
      </div>
    </div>
  );
}
