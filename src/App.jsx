import { useState } from "react";
import Home from "./Componets/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./Componets/About";
import Dashboard from "./Componets/Dashboard";
import Login from "./Componets/Login";
import ApplyService from "./Componets/ApplyService";

import Schemes from "./Componets/Schemes";
import Signup from "./Componets/Signup";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/about" element={<About />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/applyservice" element={<ApplyService />} />
       
          <Route path="/schemes" element={< Schemes />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
