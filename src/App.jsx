import React from 'react'
import Home from './components/Home';
import Gallery from './components/Gallery';
import About from './components/About';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Speakers from './components/Speakers';
import Team from './components/Team';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}></Route>
    </Routes>
    <Routes>
      <Route path="/about" element={<About />}></Route>
    </Routes>
    <Routes>
      <Route path="/gallery" element={<Gallery />}></Route>
    </Routes>
    <Routes>
      <Route path="/speakers" element={<Speakers />}></Route>
    </Routes>
    <Routes>
      <Route path="/team" element={<Team />}></Route>
    </Routes>
  </BrowserRouter>
);

export default App