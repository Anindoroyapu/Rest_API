import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./app/Navbar/navbar";
import Home from "./app/Pages/Home.jsx";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
