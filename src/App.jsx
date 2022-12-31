import React from 'react'
import Home from './components/Home';
import About from './components/About';
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}></Route>
    </Routes>
    <Routes>
      <Route path="/about" element={<About />}></Route>
    </Routes>
  </BrowserRouter>
);

export default App