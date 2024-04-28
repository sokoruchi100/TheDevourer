import React from "react";

// Example character data - you might want to fetch this from a backend or manage it via state/context
const characters = [
  {
    id: 1,
    name: "John Doe",
    description:
      "The protagonist of the story, a brave and curious explorer of unknown realms.",
    image: "path-to-image-of-john.jpg",
  },
  {
    id: 2,
    name: "Jane Smith",
    description:
      "A mysterious figure with powerful abilities and a cryptic past.",
    image: "path-to-image-of-jane.jpg",
  },
  {
    id: 3,
    name: "Maxwell Irving",
    description:
      "A wise mentor to John, providing guidance and ancient knowledge.",
    image: "path-to-image-of-maxwell.jpg",
  },
  // Add more characters as needed
];

function Cast() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-center mb-6">
        Cast of Characters
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {characters.map((character) => (
          <div
            key={character.id}
            className="bg-white rounded-lg shadow p-6 hover:bg-gray-100"
          >
            <img
              src={character.image}
              alt={character.name}
              className="rounded-full w-32 h-32 mx-auto mb-4"
            />
            <h2 className="text-xl font-semibold text-center mb-2">
              {character.name}
            </h2>
            <p className="text-center">{character.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cast;
