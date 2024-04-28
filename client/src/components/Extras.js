import React from "react";

// Example extras data - could be fetched from a backend or stored locally
const extras = [
  {
    id: 1,
    title: "Behind the Scenes",
    description:
      "Dive deep into the making of 'Pursuing Flesh' with exclusive behind-the-scenes content.",
    link: "#behind-the-scenes",
  },
  {
    id: 2,
    title: "Short Stories",
    description:
      "Explore additional tales set in the world of 'Pursuing Flesh' that enhance the main storyline.",
    link: "#short-stories",
  },
  {
    id: 3,
    title: "Concept Art",
    description:
      "View the original concept art that helped bring the characters and settings of 'Pursuing Flesh' to life.",
    link: "#concept-art",
  },
  // Add more extras as needed
];

function ExtraItem({ extra }) {
  return (
    <div className="p-4 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <h2 className="text-xl font-semibold mb-2">{extra.title}</h2>
      <p className="mb-4">{extra.description}</p>
      <a href={extra.link} className="text-blue-500 hover:text-blue-700">
        Learn More
      </a>
    </div>
  );
}

function Extras() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-center mb-6">Extra Material</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {extras.map((extra) => (
          <ExtraItem key={extra.id} extra={extra} />
        ))}
      </div>
    </div>
  );
}

export default Extras;
