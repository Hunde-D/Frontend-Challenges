import { Link } from "react-router-dom";

export default function Card({ card }) {
  return (
    <Link to="/">
      <div className=" w-fit rounded-[40px] grid grid-cols-2 px-5 py-5 border-[1px] shadow-xl shadow-gray-200 hover:scale-105 hover:scale-y-105 transition-transform">
        <img
          src={card.img}
          className="h-64 col-span-2 w-72 rounded-[30px] object-cover"
        />
        <h4 className="my-3 mx-1 mb-5 col-span-2 capitalize">{card.title}</h4>
        <button className="bg-gray-600 w-4/6 mb-2 text-white justify-self-start">
          github
        </button>
        <button className=" bg-amber-400 w-5/6 mb-2 text-white justify-self-end ">
          demo
        </button>
      </div>
    </Link>
  );
}
