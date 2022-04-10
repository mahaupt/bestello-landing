import React, { Component } from 'react';
import Navbar from '../components/theme/Navbar';
import Footer from '../components/theme/Footer';
import Signup from '../components/landing/Signup';


class LegalPage extends Component {
  render() { 
    return ( 
      <>
        <Navbar useLightScheme="true" />
        <Signup />
        <Footer /> 
      </>
     );
  }
}
 
export default LegalPage;