import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import TableOfContents from "./components/TableOfContents";
import Cast from "./components/Cast";
import FanArtGallery from "./components/FanArtGallery";
import SupportAuthor from "./components/SupportAuthor";
import FAQ from "./components/FAQ";
import Extras from "./components/Extras";
import Chapter from "./components/Chapter";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/toc" element={<TableOfContents />} />
        <Route path="/cast" element={<Cast />} />
        <Route path="/fanart" element={<FanArtGallery />} />
        <Route path="/support" element={<SupportAuthor />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/extras" element={<Extras />} />
        <Route path="/chapter/:chapterId/:chapterTitle" element={<Chapter />} />
      </Routes>
    </Router>
  );
}

export default App;
