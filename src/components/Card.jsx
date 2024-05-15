/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

export default function Card({ card }) {
  return (
    <div className=" w-fit  h-96 rounded-[40px] grid grid-cols-2 px-4 py-4  bg-slate-50 shadow-md shadow-gray-200 hover:scale-105 hover:scale-y-105 transition-transform">
      <Link to={`./${card.params}`} className="w-72 col-span-2 rounded-[30px]">
        <img src={card.img} className="h-64 rounded-[30px] object-cover" />
        <h4 className="my-3 mx-1 mb-5  capitalize">{card.title}</h4>
      </Link>
      <Link
        to="http://www.github.com"
        className=" bg-slate-950 hover:bg-white hover:text-slate-950 border-current border-[1px] w-3/6 mb-2 text-white justify-self-start rounded-lg  text-center py-1"
      >
        github
      </Link>
      <Link
        to={`./${card.params}`}
        className=" border-[1px] border-current hover:text-white w-4/6 mb-2 text-black justify-self-end rounded-lg text-center py-1 hover:bg-slate-950"
      >
        demo
      </Link>
    </div>
  );
}
