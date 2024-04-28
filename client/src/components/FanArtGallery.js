import React from "react";
import Header from "./Header";

// Example gallery data - you might want to fetch this from a backend or manage it via state/context
const artworks = [
  {
    id: 1,
    title: "This is where I would put fanart",
    url: "path-to-artwork1.jpg",
  },
  // Add more artworks as needed
];

function FanArtGallery() {
  return (
    <div className="h-screen bg-primary">
      <Header></Header>
      <div className="container mx-auto px-4 py-8 font-text text-tertiary">
        <h1 className="text-2xl font-bold text-center mb-6">Fan Art Gallery</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {artworks.map((art) => (
            <div
              key={art.id}
              className="bg-secondary rounded overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <img src={art.url} alt={art.title} className="w-full" />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 text-center">
                  {art.title}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FanArtGallery;
