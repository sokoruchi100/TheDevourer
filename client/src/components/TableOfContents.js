import React from "react";
import Header from "./Header";

// Example data - you might fetch this from a server or manage it via state/context
const chapters = [
  { id: 1, title: "Chapter 1: The Awakening", link: "/chapter1" },
  { id: 2, title: "Chapter 2: Into the Abyss", link: "/chapter2" },
  { id: 3, title: "Chapter 3: Echoes of the Past", link: "/chapter3" },
  // Add more chapters as needed
];

function TableOfContents() {
  return (
    <div className="bg-primary h-screen">
      <Header></Header>
      <div className="container mx-auto px-4 py-8 font-text">
        <h1 className="text-2xl font-bold text-center mb-6 text-tertiary">
          Table of Contents
        </h1>
        <ul className="space-y-2">
          {chapters.map((chapter) => (
            <li key={chapter.id} className="bg-secondary p-4 rounded shadow">
              <a href={chapter.link} className="text-lg text-tertiary">
                {chapter.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TableOfContents;
