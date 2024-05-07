/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

export default function Card({ card }) {
  return (
    <div className=" w-fit rounded-[40px] grid grid-cols-2 px-5 py-5 border-[1px] shadow-xl shadow-gray-200 hover:scale-105 hover:scale-y-105 transition-transform">
      <Link to={card.id} className="  col-span-2 rounded-[30px]">
        <img src={card.img} className="h-64 rounded-[30px] object-cover" />
        <h4 className="my-3 mx-1 mb-5  capitalize">{card.title}</h4>
      </Link>
      <Link
        to="http://www.github.com"
        className="bg-gray-600 w-3/6 mb-2 text-white justify-self-start rounded-lg  text-center py-1"
      >
        github
      </Link>
      <Link
        to={`./${card.title}`}
        className=" bg-amber-400 w-4/6 mb-2 text-white justify-self-end rounded-lg text-center py-1 "
      >
        demo
      </Link>
    </div>
  );
}
