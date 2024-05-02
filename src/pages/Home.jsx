import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <p>this is the Home route</p>
      <Link to="/showroom">ShowRoom</Link>
    </div>
  );
}
