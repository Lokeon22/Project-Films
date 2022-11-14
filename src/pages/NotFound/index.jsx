import { Link } from "react-router-dom";

export function NotFound() {
  return (
    <div className="w-full h-full absolute flex flex-col justify-center items-center top-0 left-0">
      <h2 className="text-white text-center text-4xl mb-8">
        Filme não encontrado
      </h2>
      <Link
        to="/"
        className="text-white bg-red-700 w-52 py-2 text-center rounded-md"
      >
        Voltar
      </Link>
    </div>
  );
}
