import React from 'react';
import { useMatomo } from '@datapunt/matomo-tracker-react';

import Navbar from '../components/theme/Navbar';
import Footer from '../components/theme/Footer';
import Signup from '../components/landing/Signup';


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
      <Signup />
      <Footer /> 
    </>
  );
}
 