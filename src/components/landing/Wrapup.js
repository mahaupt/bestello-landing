import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

export default function Wrapup(props) {
  return (
    <div className="text-center bg-light mt-5 mb-5 pt-5 pb-5">
      <h2 className="mb-3 fw-light">Die digitale Speisekarte der Zukunft</h2>
      <p><Link to="/signup" className="btn btn btn-dark">Jetzt kostenlos anmelden!</Link></p>
    </div>
  );
}