import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <h2>Boss Burgers</h2>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/menu">Menu</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}