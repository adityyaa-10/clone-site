import React from 'react'
import Cards from './components/Cards';
import Hero from './components/Hero';
import Info from './components/Info';
import Navbar from './components/Navbar';
import Venture from './components/Venture';

const App = () => (
  <div>
    <Navbar />
    <Hero />
    <Info />
    <Cards />
    <Venture />

  </div>
);

export default App