import React from 'react';
import { useMatomo } from '@datapunt/matomo-tracker-react';

import DataPolicy from '../components/theme/DataPolicy';
import Imprint from '../components/theme/Imprint';
import Navbar from '../components/theme/Navbar';
import Footer from '../components/theme/Footer';


export default function LegalPage(props) {
  const { trackPageView } = useMatomo();
  // Track page view
  React.useEffect(() => {
    trackPageView();
    // eslint-disable-next-line
  }, []);

  return ( 
    <>
      <Navbar useLightScheme="true" />
      <Imprint />
      <DataPolicy />
      <Footer /> 
    </>
  );
}
 