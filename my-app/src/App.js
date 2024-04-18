import React from "react";
import Navbar from "./app/Navbar/navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./app/Home/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import BikePrice from "./app/Pages/BikePrice/bikePrice";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />

        <Route path="/BikePrice" element={<BikePrice />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
