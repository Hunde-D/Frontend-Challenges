import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";

export default function Home() {
  return (
    <div className=" effect flex flex-col items-center gap-6 w-full h-screen py-32 max-sm:py-8">
      <div className="home-content text-center max-sm:w-full">
        <h1 className="text-5xl  font-black w-full mb-6 hover:text-gray-600 text-blue-600 transition-colors max-md:text-2xl max-lg:text-4xl max-sm:text-lg">
          Explore My Solution Showcase for Frontend Mentor Challenges.
        </h1>
        <p className="w-5/6 mx-10 px-10 py-3 font-light text-lg max-md:text-sm max-lg:text-lg max-sm:w-full max-sm:px-0 max-sm:mx-0 max-sm:text-sm">
          Dive into a world of real-world projects provided by{" "}
          <Link
            className="text-blue-600 after:content-['_↗'] ..."
            to="https://www.frontendmentor.io/challenges"
            target="_blank"
          >
            Frontend Mentor
          </Link>
        </p>
      </div>
      <div className=" flex gap-6 text-center justify-center max-sm:text-xs">
        <Link
          className=" border-none -ml-10 py-2 w-52 text-white bg-blue-500 max-sm:w-32 max-sm:ml-1 rounded animate-bounce"
          to="projects"
        >
          Explore
        </Link>
        <Link
          className=" w-32 flex gap-2  justify-center items-center border-none mx-3 max-sm:w-24 py-2 text-gray-300 rounded bg-[#334155]"
          to="https://github.com"
          target="_blank"
        >
          <FaGithub className="" /> Github
        </Link>
      </div>
      <div className=" my-32 text-sm font-thin place-self-end">
        Challenge by{" "}
        <Link
          to="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          className="text-sky-600"
        >
          Frontend Mentor
        </Link>
        . Coded by{" "}
        <Link to="https://github.com" className="text-sky-600">
          Hunde Desalegn
        </Link>
        .
      </div>
    </div>
  );
}
