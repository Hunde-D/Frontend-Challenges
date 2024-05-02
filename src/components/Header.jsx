import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="w-100% flex justify-between px-10 py-4">
      <Link to="/">LOGO</Link>
      <nav className="flex justify-end  w-72 gap-4">
        <Link to="/">Home</Link>
        <Link to="/projects">ShowCase</Link>
        <Link to="#">Theme</Link>
        <Link to="#">Github</Link>
      </nav>
    </header>
  );
}
