import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import TableOfContents from "./components/TableOfContents";

import Chapter from "./components/Chapter";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/toc" element={<TableOfContents />} />
        <Route path="/chapter/:chapterId" element={<Chapter />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
