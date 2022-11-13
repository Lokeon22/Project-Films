import Spider from "../../assets/spider_teste.jpg";
import { AiFillStar } from "react-icons/ai";

export function Card() {
  return (
    <div className="grid grid-cols-1 px-4 py-4">
      <div className="relative max-w-[220px] flex flex-col mx-auto my-5">
        <button className="text-white absolute w-full top-[74%] py-2 bg-gray-900/70 duration-300 delay-75 rounded hover:bg-red-800">
          Detalhes
        </button>
        <img src={Spider} className="rounded-md shadow-lg shadow-black" />
        <h2 className="text-white text-xl font-medium mt-3 ml-1">
          Homem Aranha
        </h2>
        <label className="flex items-center gap-2 ml-1">
          <span className="text-slate-100">8 / 10</span>
          <AiFillStar size={20} className="text-yellow-500" />
        </label>
      </div>
    </div>
  );
}
