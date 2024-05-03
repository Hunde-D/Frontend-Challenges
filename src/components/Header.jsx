import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { MdOutlineDarkMode } from "react-icons/md";

export default function Header() {
  return (
    <header className="w-full flex justify-between px-10 py-4">
      <Link to="/">LOGO</Link>
      <nav className="flex justify-end  items-center w-72 gap-4">
        <Link to="/">Home</Link>
        <Link
          to="/projects"
          className="border-r-[1px] px-3 border-gray-400 border-opacity-40"
        >
          Showcase
        </Link>
        <Link to="#">
          <MdOutlineDarkMode />
        </Link>
        <Link to="#">
          <FaGithub />
        </Link>
      </nav>
    </header>
  );
}
