import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navegation from "./components/Navegation";
import Characters from "./pages/Characters";
import Episodes from "./pages/Episodes";
import Form from "./pages/Form";
import Home from "./pages/Home";
import { getCharacters } from "./helpers/getCharacters";

function App() {
  return (
    <>
      <Navegation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Characters" element={<Characters />} />
        <Route path="/Episodes" element={<Episodes />} />
        <Route path="/Form" element={<Form />} />
        <Route path="*" element={<h1>error</h1>} />
      </Routes>
    </>
  );
}

export default App;
