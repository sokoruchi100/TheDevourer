import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import TableOfContents from "./components/TableOfContents";
import { BrowserRouter } from "react-router-dom";

import Chapter from "./components/Chapter";

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/toc" element={<TableOfContents />} />
        <Route path="/chapter/:chapterId" element={<Chapter />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
