import React from "react";
import Navbar from "./app/Navbar/navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./app/Home/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import BikePrice from "./app/Pages/BikePrice/bikePrice";
import Accessories from "./app/Pages/Accessories/accessories";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/bike-price" element={<BikePrice />} />
        <Route path="/accessories" element={<Accessories />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
