import React from 'react'
import Cards from './Cards';
import Footer from './Footer';
import Hero from './Hero';
import Info from './Info';
import Navbar from './Navbar';
import Venture from './Venture';
import styles from '../index.css?inline'

const Home = () => (
    <div>
      <Navbar />
      <Hero />
      <Info />
      <Cards />
      <Venture />
      <Footer />
    </div>
  )

export default Home
