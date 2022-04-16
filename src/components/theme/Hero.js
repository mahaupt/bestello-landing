import React from 'react';
import { useMatomo } from '@datapunt/matomo-tracker-react';
import { HashLink as Link } from 'react-router-hash-link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import './Hero.scss';
import mobile from '../../assets/mobile-4.png';

export default function Hero(props) {
  const { trackEvent } = useMatomo();
  const testLink = "https://app.bestello.at/?t=eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiZ3Vlc3QiLCJ1c2VyX2lkIjoiIiwicmVzdGF1cmFudF9pZCI6IjYxOTY5NjFiMmE1ZTUwMjc0NmRjOTY1MyIsInRhYmxlX2lkIjoiMDAwMDAwIiwiZXhwaXJlc19hdCI6Ijk5OTktMDEtMDFUMTI6MDA6MDAuMDBaIn0.qdoaYY9cJPiiMNwh7qwRfzmfb9_HnnllRGn0Uq4bv_c0OnD4BzyaRePtsAxCQKhYGDNPY1r7gUFeCFd4ovNhPw";

  return ( 
    <div className="hero mb-70">
      <div className="background-wave"></div>
      <div className="hero-content container">
        <div className="row">
          <div className="col-12 col-md-6 mb-5 pe-5">
            <p className="display-5">Jetzt in wenigen Minuten zur digitalen Speisekarte!</p>
            <p className="h5 fw-light text-light mb-4">
              Bestello ist dein digitaler Service-Mitarbeiter - Schneller und effizienter Gäste bedienen - Mehr Zeit für besseren Service.
            </p>
            <p className="h5 fw-light text-light mb-4">
              Geben Sie Ihren Gästen die Möglichkeit, digital mit dem Smartphone zu bestellen und zu bezahlen.
            </p>
            <p>
              <Link to="/signup" onClick={() => trackEvent({ category: 'Landing', action: 'click', name: 'cta-hero' })} className="btn btn-light">Jetzt kostenlos testen!</Link>
            </p>
            <p>
              <a href={testLink} onClick={() => trackEvent({ category: 'Landing', action: 'click', name: 'demo-hero' })} className="btn btn-warning" target="_blank" rel="noreferrer">Zur Demokarte <FontAwesomeIcon icon={faArrowRight}/></a>
            </p>
          </div>
          <div className="col-12 col-md-6 background-dots">
            <img src={mobile} alt="IPhone Mockup" />
          </div>
        </div>
      </div>
      <div className="hero-end-shape"></div>
    </div>
  );
}
 