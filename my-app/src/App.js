import React from "react";
import Navbar from "./app/Navbar/navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./app/Pages/Home/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import BikePrice from "./app/Pages/BikePrice/bikePrice";
import Accessories from "./app/Pages/Accessories/accessories";
import TopBike from "./app/Pages/TopBike/topBike";
import Showrooms from "./app/Pages/Showrooms/showrooms";
import Brand from "./app/Pages/Brands/brands";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/bike-price" element={<BikePrice />} />
        <Route path="/accessories" element={<Accessories />} />
        <Route path="/topBike" element={<TopBike />} />
        <Route path="/showrooms" element={<Showrooms />} />
        <Route path="/brand" element={<Brand />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
