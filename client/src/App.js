import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import TableOfContents from "./components/TableOfContents";

import Chapter from "./components/Chapter";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/toc" element={<TableOfContents />} />
        <Route path="/chapter/:chapterId/:chapterTitle" element={<Chapter />} />
      </Routes>
    </Router>
  );
}

export default App;