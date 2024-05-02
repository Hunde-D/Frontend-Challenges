import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="w-100% bg-green-200">
      <nav className="w-100% flex flex-row gap-3">
        <Link to="/">LOGO</Link>
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="#">Github</Link>
        <Link to="#">GetStarted</Link>
      </nav>
    </header>
  );
}
