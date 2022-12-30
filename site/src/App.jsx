import React from 'react'
import './App.css'
import Cards from './components/Cards';
import Hero from './components/Hero';
import Info from './components/Info';
import Navbar from './components/Navbar';

const App = () => (
  <div>
    <Navbar />
    <Hero />
    <Info />
    <Cards />

  </div>
);

export default App