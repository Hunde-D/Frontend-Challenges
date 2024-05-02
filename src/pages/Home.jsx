import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="container flex flex-col items-center w-screen py-32">
      <div className="w-[75%] px-16">
        <h1 className="text-5xl  font-black w-full ">
          <span className="pl-3">Rapidly build modern websites</span> without
          ever leaving your HTML.
        </h1>
        <p className="w-5/6 mx-10 px-10 py-3 ">
          A utility-first CSS framework packed with classes like flex, pt-4,
          text-center and
          <span className="pl-4">
            rotate-90 that can be composed to build any design,directly in your
            markup.
          </span>
        </p>
      </div>
      <div>
        <Link
          className=" border-none mx-3 px-3 py-2 text-white bg-[#38bdf8]  rounded"
          to="/showroom"
        >
          Explore
        </Link>
        <Link
          className=" border-none mx-3 px-3 py-2 text-gray-300 rounded bg-[#334155]"
          to="/showroom"
        >
          Github
        </Link>
      </div>
    </div>
  );
}
