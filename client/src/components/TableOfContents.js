import React from "react";

// Example data - you might fetch this from a server or manage it via state/context
const chapters = [
  { id: 1, title: "Chapter 1: The Awakening", link: "/chapter1" },
  { id: 2, title: "Chapter 2: Into the Abyss", link: "/chapter2" },
  { id: 3, title: "Chapter 3: Echoes of the Past", link: "/chapter3" },
  // Add more chapters as needed
];

function TableOfContents() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-center mb-6">Table of Contents</h1>
      <ul className="space-y-2">
        {chapters.map((chapter) => (
          <li
            key={chapter.id}
            className="bg-gray-100 p-4 rounded shadow hover:bg-gray-200"
          >
            <a
              href={chapter.link}
              className="text-lg text-blue-600 hover:text-blue-800"
            >
              {chapter.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TableOfContents;
