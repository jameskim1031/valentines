import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TwentyFour from "./Components/TwentyFour.js"; // Adjust the import path as needed
import "./App.css";
import TwentyFive from "./Components/TwentyFive.js";
import Main from "./Components/Main.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/2025" element={<TwentyFive />} />
        <Route path="/2024" element={<TwentyFour />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
