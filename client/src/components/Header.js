import React from "react";

function Header() {
  return (
    <header className="bg-secondary text-tertiary py-3 px-5 flex justify-between items-center font-text">
      <h1 className="text-xl cursor-pointer font-title">Pursuing Flesh</h1>
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
          <li>
            <a href="/cast" className="hover:text-gray-300">
              Cast of Characters
            </a>
          </li>
          <li>
            <a href="/fanart" className="hover:text-gray-300">
              Fan Art Gallery
            </a>
          </li>
          <li>
            <a href="/support" className="hover:text-gray-300">
              Support the Author
            </a>
          </li>
          <li>
            <a href="/faq" className="hover:text-gray-300">
              FAQ
            </a>
          </li>
          <li>
            <a href="/extras" className="hover:text-gray-300">
              Extra Material
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
