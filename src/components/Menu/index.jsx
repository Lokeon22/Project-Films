import { AiOutlineSearch } from "react-icons/ai";
import { useState, useRef } from "react";
import { Link } from "react-router-dom";

export function Menu() {
  const [search, setSearch] = useState("");
  const input = useRef(null);

  return (
    <div className="flex justify-between items-center py-4 px-4">
      <h2 className="text-white text-xl font-medium">Filmes</h2>
      <input
        type="text"
        placeholder="Search"
        className="py-1 px-1 outline-none rounded placeholder:px-[2px]"
        onChange={(e) => setSearch(e.target.value)}
        ref={input}
      />
      <Link to={`/filmes/${search}`}>
        <AiOutlineSearch
          size={22}
          className="text-white"
          onClick={() => {
            input.current.value = "";
          }}
        />
      </Link>
    </div>
  );
}
