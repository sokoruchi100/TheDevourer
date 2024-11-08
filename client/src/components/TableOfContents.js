import React from "react";
import Header from "./Header";
import { Link } from "react-router-dom";

// Example data
const chapters = [
  {
    id: 1,
    title: "Chapter 1",
    link: "/chapter/1",
  },
  // Add more chapters as needed
];

function TableOfContents() {
  return (
    <div className="bg-primary h-screen">
      <Header />
      <div className="container mx-auto px-4 py-8 font-text">
        <h1 className="text-2xl font-bold text-center mb-6 text-tertiary">
          Table of Contents
        </h1>
        <ul className="space-y-2">
          {chapters.map((chapter) => (
            <li key={chapter.id} className="bg-secondary p-4 rounded shadow">
              <Link to={chapter.link} className="text-lg text-tertiary">
                {chapter.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TableOfContents;
