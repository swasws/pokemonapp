import React from "react";
import { Routes, Route } from "react-router-dom";
import PokemonsList from "./components/PokemonsList";
import PokemonPage from "./components/PokemonPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<PokemonsList />} />
      <Route path="/pokemon/:id" element={<PokemonPage />} />
    </Routes>
  );
}

export default App;
