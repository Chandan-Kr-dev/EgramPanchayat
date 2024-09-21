import { useState } from "react";
import Home from "./Componets/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./Componets/About";
import Dashboard from "./Componets/Dashboard";
import Login from "./Componets/Login";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
