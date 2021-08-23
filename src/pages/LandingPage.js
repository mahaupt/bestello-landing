import React, { Component } from 'react';

import Navbar from '../theme/Navbar';
import Hero from '../theme/Hero';
import Features from '../theme/Features';
import Reviews from '../theme/Reviews';
import Prices from '../theme/Prices';
import Footer from '../theme/Footer';
import Contact from '../theme/Contact';

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