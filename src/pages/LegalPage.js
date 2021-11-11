import React, { Component } from 'react';
import DataPolicy from '../components/theme/DataPolicy';
import Imprint from '../components/theme/Imprint';
import Navbar from '../components/theme/Navbar';
import Footer from '../components/theme/Footer';


class LegalPage extends Component {
  render() { 
    return ( 
      <>
        <Navbar useLightScheme="true" />
        <Imprint />
        <DataPolicy />
        <Footer /> 
      </>
     );
  }
}
 
export default LegalPage;