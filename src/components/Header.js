import React from "react";

function Header() {
  return (
    <header className="bg-secondary text-tertiary py-3 px-5 flex justify-between items-center font-text">
      <h1 className="text-xl cursor-pointer font-title">The Devourer</h1>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <a href="/" className="hover:text-gray-300">
              Home
            </a>
          </li>
          <li>
            <a href="/toc" className="hover:text-gray-300">
              Table of Contents
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
