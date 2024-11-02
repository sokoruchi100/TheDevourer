import React from "react";
import Header from "./Header";
import Banner from "./Banner";

function Home() {
  return (
    <div className="font-sans h-screen">
      <Header></Header>
      <Banner></Banner>
      <section className="py-5 text-justify font-text bg-primary text-tertiary">
        <h3 className="text-3xl my-1 text-center">About the Novel</h3>
        <p className="max-w-xl mx-auto text-xl my-5">
          In the quiet expanse of a small town, Lily's life takes a shocking
          turn when she miraculously survives a gruesome tractor accident
          unscathed. This near-death experience awakens bizarre, grotesque
          abilities within her, marking the beginning of her chilling
          transformation. Guided by a mysterious entity embedded in her hand,
          which claims to be an alien here to unlock her potential, Lily
          grapples with her new, horrifying powers. As she delves deeper, she
          uncovers cryptic messages warning her of the malevolent nature of her
          guide.
        </p>
        <p className="max-w-xl mx-auto text-xl my-5">
          Amidst her personal turmoil, the local sheriff, spurred by Lily's
          paranoid father, keeps a close watch, escalating tensions. Meanwhile,
          Lily's return to church stirs unease as the sermon eerily mirrors her
          ordeal, amplifying her fears of discovery.
        </p>
        <p className="max-w-xl mx-auto text-xl my-5">
          Her struggle for understanding and control intertwines with the darker
          agendas of old friends and new foes alike. Ella, a childhood friend,
          now a mysterious figure with hidden motives, and Mr. Johnson, a figure
          from the past with ominous intentions, weave a complex web of deceit
          and danger around her.
        </p>
        <p className="max-w-xl mx-auto text-xl my-5">
          As Lily's powers grow, so does her isolation, driving her towards a
          dark path that blurs the lines between hero and monster. "Pursuing
          Flesh" is a tale of supernatural horror and personal descent, where
          the pursuit of one's desires leads to unfathomable depths.
        </p>
      </section>
    </div>
  );
}

export default Home;
