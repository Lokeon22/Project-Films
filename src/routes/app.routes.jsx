import { Routes, Route } from "react-router-dom";

import { Home } from "../pages/Home";
import { Details } from "../pages/Details";
import { FilmFiltered } from "../pages/FilmFiltered";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/details/:id" element={<Details />} />
      <Route path="/filmes/:name" element={<FilmFiltered />} />
    </Routes>
  );
}
