import React from "react";

function Banner() {
  return (
    <div
      className="bg-cover bg-center h-3/6 flex justify-center items-center text-tertiary text-shadow"
      style={{
        backgroundImage: "url('/images/banner.jpg')", // Correct path assuming image is in the public/images directory
      }}
    >
      <div className="bg-secondary bg-opacity-50 p-4 text-8xl font-title">
        <h2>The Devourer</h2>
      </div>
    </div>
  );
}

export default Banner;
