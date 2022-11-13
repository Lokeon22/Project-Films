import { AiOutlineSearch } from "react-icons/ai";

export function Menu() {
  return (
    <div className="flex justify-between items-center py-4 px-4">
      <h2 className="text-white text-xl font-medium">Filmes</h2>
      <input
        type="text"
        placeholder="Search"
        className="py-1 px-1 outline-none rounded placeholder:px-[2px]"
      />
      <AiOutlineSearch size={22} className="text-white" />
    </div>
  );
}
