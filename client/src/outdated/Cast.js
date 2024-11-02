import React from "react";
import Header from "../components/Header";

// Example character data - you might want to fetch this from a backend or manage it via state/context
const characters = [
  {
    id: 1,
    name: "Lily Carmine",
    description:
      "Lily is the central character of 'Pursuing Flesh,' a young woman grappling with newly awakened, grotesque supernatural powers following a mysterious tractor accident. Initially living a quiet life on her family's farm, her world is turned upside down by her terrifying abilities. She is introspective and conflicted, torn between her growing powers and the sinister influence of an alien entity that claims to guide her. As she delves deeper into the unknown, Lily's journey becomes one of self-discovery and survival, pushing her towards an inevitable transformation that challenges her humanity.",
    image: "images/Lily.png",
  },
  {
    id: 2,
    name: "Oliver Asturias",
    description:
      "Oliver is Lily's ex-boyfriend, characterized by his earnest and caring nature. Despite their breakup, he remains deeply concerned about Lily's well-being, especially as he notices changes in her behavior. Oliver represents a touchstone of normalcy and past affection in Lily's increasingly chaotic world. He is loyal and determined, often finding himself trying to protect or help Lily despite the complexity of their past relationship and her burgeoning powers. His struggle is marked by confusion and a desperate desire to reconnect with Lily, even as the world around them grows more dangerous.",
    image: "images/Oliver.png",
  },
  {
    id: 3,
    name: "Ella Bancroft",
    description:
      "Ella, a childhood friend of Lily's, returns to town with secrets and a hidden agenda. Working for a mysterious organization, she projects a facade of success and independence, owning a remote job and a new house. However, her true motives are shadowed by her involvement with covert operations that monitor and manipulate those with supernatural abilities. Ella is complex, walking a fine line between old loyalties and her duties, which often puts her at odds with her own moral compass. Her character adds layers of intrigue and betrayal to the story, as she navigates her dual roles and the eventual consequences of her actions.",
    image: "images/Ella.png",
  },
  // Add more characters as needed
];

function Cast() {
  return (
    <div className="bg-primary h-screen">
      <Header></Header>
      <div className="container mx-auto px-4 py-8 font-text">
        <h1 className="text-2xl font-bold text-center mb-6 text-tertiary">
          Cast of Characters
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {characters.map((character) => (
            <div
              key={character.id}
              className="bg-secondary rounded-lg shadow p-6 text-tertiary"
            >
              <img
                src={character.image}
                alt={character.name}
                className="rounded-full w-32 h-32 mx-auto mb-4"
              />
              <h2 className="text-xl font-semibold text-center mb-2 ">
                {character.name}
              </h2>
              <p className="text-center">{character.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Cast;
