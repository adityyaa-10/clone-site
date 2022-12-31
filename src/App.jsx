import React from 'react'
import Cards from './components/Cards';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Info from './components/Info';
import Navbar from './components/Navbar';
// import New from './components/test';
import Venture from './components/Venture';

const App = () => (
  <div>
    <Navbar />
    {/* <New /> */}
    <Hero />
    <Info />
    <Cards />
    <Venture />
    <Footer />
  </div>
);

export default App