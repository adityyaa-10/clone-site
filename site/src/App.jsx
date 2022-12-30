import React from 'react'
import './App.css'
import Hero from './components/Hero';
import Info from './components/Info';
import Navbar from './components/Navbar';

const App = () => (
  <div>
    <Navbar />
    <Hero />
    <Info />
  </div>
);

export default App