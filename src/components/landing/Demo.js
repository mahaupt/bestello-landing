import React from 'react';
import { useMatomo } from '@datapunt/matomo-tracker-react';

import './Demo.scss';
import '../theme/Hero.scss';

export default function Demo(props) {
  const { trackEvent } = useMatomo();
  const testLink = "https://bit.ly/bestello";
  return (
    <div className="bg-dark text-light text-center demo-wrapper">
      <div className="hero-end-shape"></div>
      <h2 id="demo">Demo</h2>
      <h5>Scanne mich oder klicke mich an für eine interaktive Vorschau.</h5>
      <div className="d-flex justify-content-center">
        <div className="card text-dark shadow p-1">
          <a href={testLink} onClick={() => trackEvent({ category: 'Landing', action: 'click', name: 'demo' })} target="_blank" rel="noreferrer">
            <img src={"https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=" + encodeURIComponent(testLink)} alt="QR Code" width="150" />
          </a>
        </div>
      </div>
    </div>
  );
}