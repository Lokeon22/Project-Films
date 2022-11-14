import { AiOutlineSearch } from "react-icons/ai";
import { useState, useRef } from "react";
import { Link } from "react-router-dom";

export function Menu() {
  const [search, setSearch] = useState("");
  const input = useRef(null);

  return (
    <div className="flex gap-1 justify-between items-center py-4 px-1 sm:px-4 mb-4">
      <h2 className="text-white text-lg font-medium 2xl:text-2xl">
        Top Filmes
      </h2>
      <div className="flex items-center gap-2">
        <input
          type="text"
          placeholder="Search"
          className="py-1 px-1 outline-none rounded placeholder:px-[2px]"
          onChange={(e) => setSearch(e.target.value)}
          ref={input}
        />
        <Link to={`/filmes/${search.toLowerCase()}`}>
          <AiOutlineSearch
            size={22}
            className="text-white"
            onClick={() => {
              input.current.value = "";
            }}
          />
        </Link>
      </div>
    </div>
  );
}
