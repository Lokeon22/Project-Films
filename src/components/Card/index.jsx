import { Link } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";

export function Card({ title, link, vote, src }) {
  return (
    <div className="grid grid-cols-1 px-4 py-4">
      <div className="relative max-w-[250px] flex flex-col mx-auto my-0">
        <Link
          to={link}
          className="text-white text-center absolute w-full top-[68%] py-2 bg-gray-900/70 duration-300 delay-75 rounded hover:bg-red-800"
        >
          Detalhes
        </Link>
        <img
          src={src}
          className="rounded-md shadow-lg shadow-black w-[250px] object-cover mx-auto my-0"
        />
        <h2 className="text-white text-xl font-medium mt-3 ml-1">{title}</h2>
        <label className="flex items-center gap-2 ml-1">
          <span className="text-slate-100">{vote} / 10</span>
          <AiFillStar size={20} className="text-yellow-500" />
        </label>
      </div>
    </div>
  );
}
