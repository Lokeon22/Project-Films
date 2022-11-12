import { Link } from "react-router-dom";

export function Details() {
  return (
    <div className="text-white">
      <h2>Bem vindo a pagina detalhes</h2>
      <Link to="/">Voltar para home</Link>
    </div>
  );
}
