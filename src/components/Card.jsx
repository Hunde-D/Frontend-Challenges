import { Link } from "react-router-dom";

export default function Card() {
  return (
    <Link to="/">
      <div className=" w-fit rounded-[40px] grid grid-cols-2 bg-gray-500  px-5 py-5">
        <div className="bg-gray-400 h-64 col-span-2 w-72 rounded-[30px]"></div>
        <h4 className="my-3 mx-1 mb-5 col-span-2">Food</h4>
        <button className="bg-gray-600 w-4/6 mb-2 text-white justify-self-start">
          github
        </button>
        <button className=" bg-amber-600 w-5/6 mb-2 text-white justify-self-end ">
          demo
        </button>
      </div>
    </Link>
  );
}
