import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";

export default function Home() {
  return (
    <div className=" layer flex flex-col items-center gap-6 w-full h-screen py-32">
      <div className="home-content text-center">
        <h1 className="text-5xl  font-black w-full mb-6 ">
          Explore My Solution Showcase for Frontend Mentor Challenges.
        </h1>
        <p className="w-5/6 mx-10 px-10 py-3 ">
          Dive into a world of real-world projects provided by{" "}
          <a
            className="text-sky-400 after:content-['_↗'] ..."
            href="https://www.frontendmentor.io/challenges"
            target="_blank"
          >
            Frontend Mentor
          </a>
        </p>
      </div>
      <div className=" flex gap-6 text-center ">
        <Link
          className=" border-none py-2 w-52 text-white bg-sky-500  rounded"
          to={{ pathname: "/projects" }}
        >
          Explore
        </Link>
        <Link
          className=" w-32 flex gap-2 justify-center items-center border-none mx-3  py-2 text-gray-300 rounded bg-[#334155]"
          to="/"
        >
          <FaGithub /> Github
        </Link>
      </div>
    </div>
  );
}
