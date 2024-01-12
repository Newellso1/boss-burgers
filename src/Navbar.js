import { useState } from "react";

import { Link } from "react-router-dom";

export default function Navbar() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <nav>
      <h2>Boss Burgers</h2>
      <div>
        <ul className={navOpen ? "show-nav" : ""}>
          <li>
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/menu">
              Menu
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <button
        className="nav-button"
        onClick={() => setNavOpen((open) => !open)}
      >
        <div className="button-top"></div>
        <div
          className={navOpen ? "button-middle button-open" : "button-middle"}
        ></div>
        <div className="button-bottom"></div>
      </button>
    </nav>
  );
}
