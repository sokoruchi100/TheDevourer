import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-secondary text-tertiary py-3 px-5 flex justify-between items-center font-text">
      <h1 className="text-xl cursor-pointer font-title">The Devourer</h1>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="hover:text-gray-300">
              Home
            </Link>
          </li>
          <li>
            <Link to="/toc" className="hover:text-gray-300">
              Table of Contents
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
