import React, { Component } from 'react';

import Navbar from '../components/theme/Navbar';
import Hero from '../components/theme/Hero';
import Features from '../components/landing/Features';
import Reviews from '../components/landing/Reviews';
import Prices from '../components/landing/Prices';
import Footer from '../components/theme/Footer';
import Contact from '../components/landing/Contact';

class LandingPage extends Component {
  render() { 
    return ( 
      <>
        <Navbar />
        <Hero />
        <Features />
        <Reviews />
        <Prices />

        <Contact />
        <Footer />
      </>
     );
  }
}
 
export default LandingPage;