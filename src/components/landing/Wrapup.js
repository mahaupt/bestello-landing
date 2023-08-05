import React from 'react';
import { useMatomo } from '@datapunt/matomo-tracker-react';
import { HashLink as Link } from 'react-router-hash-link';

export default function Wrapup(props) {
  const { trackEvent } = useMatomo();

  return (
    <div className="text-center mt-5 mb-5 pt-5 pb-5">
      <h2 className="mb-3 fw-light">Die digitale Speisekarte der Zukunft</h2>
      <p><Link to="/signup" onClick={() => trackEvent({ category: 'Landing', action: 'click', name: 'cta-wrapup' })} className="btn btn btn-dark">Jetzt kostenlos anmelden!</Link></p>
    </div>
  );
}