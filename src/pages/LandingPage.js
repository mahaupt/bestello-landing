import React, { Component } from 'react';

import Navbar from '../components/theme/Navbar';
import Hero from '../components/theme/Hero';
import Bulletpoints from '../components/landing/Bulletpoints';
import Features from '../components/landing/Features';
import Demo from '../components/landing/Demo';
import Prices from '../components/landing/Prices';
import Footer from '../components/theme/Footer';
import Contact from '../components/landing/Contact';
import Partner from '../components/landing/Partner';
import Wrapup from '../components/landing/Wrapup';

class LandingPage extends Component {
  render() { 
    return ( 
      <>
        <Navbar />
        <Hero />
        <Bulletpoints />
        <Features />
        <Demo />
        <Prices />
        <Wrapup />
        
        <Contact />
        <Partner />
        <Footer />
      </>
     );
  }
}
 
export default LandingPage;