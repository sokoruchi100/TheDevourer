import React from "react";

function Home() {
  return (
    <div className="font-sans">
      <header className="bg-gray-800 text-white py-3 px-5 flex justify-between items-center">
        <h1 className="text-xl cursor-pointer">Pursuing Flesh</h1>
        <nav>
          <ul className="flex space-x-4">
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
      <main
        className="bg-cover bg-center h-128 flex justify-center items-center text-white text-shadow"
        style={{ backgroundImage: "url('path-to-your-image.jpg')" }}
      >
        <div className="bg-black bg-opacity-50 p-4">
          <h2>Welcome to the World of Pursuing Flesh</h2>
        </div>
      </main>
      <section className="bg-gray-100 py-5 text-center">
        <h3 className="text-lg">About the Novel</h3>
        <p className="max-w-xl mx-auto">
          Welcome to "Pursuing Flesh", a tale of mystery and suspense that
          delves deep into the unexplored corners of the human psyche. Follow
          the journey of our protagonists as they navigate through perilous
          adventures and dark revelations.
        </p>
      </section>
    </div>
  );
}

export default Home;
