import React from "react";
import Navbar from "./app/Navbar/navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./app/Pages/Home";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
