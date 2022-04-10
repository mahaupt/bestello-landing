import React from 'react';
import './Demo.scss';
import '../theme/Hero.scss';

export default function Demo(props) {
  const testLink = "https://app.bestello.at/?t=eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiZ3Vlc3QiLCJ1c2VyX2lkIjoiIiwicmVzdGF1cmFudF9pZCI6IjYxOTY5NjFiMmE1ZTUwMjc0NmRjOTY1MyIsInRhYmxlX2lkIjoiMDAwMDAwIiwiZXhwaXJlc19hdCI6Ijk5OTktMDEtMDFUMTI6MDA6MDAuMDBaIn0.qdoaYY9cJPiiMNwh7qwRfzmfb9_HnnllRGn0Uq4bv_c0OnD4BzyaRePtsAxCQKhYGDNPY1r7gUFeCFd4ovNhPw";
  return (
    <div className="bg-dark text-light text-center demo-wrapper">
      <div className="hero-end-shape"></div>
      <h2 id="demo">Demo</h2>
      <h5>Scanne mich oder klicke mich an für eine interaktive Vorschau.</h5>
      <div className="d-flex justify-content-center">
        <div className="card text-dark shadow p-1">
          <a href={testLink} target="_blank" rel="noreferrer">
            <img src={"https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=" + encodeURIComponent(testLink)} alt="QR Code" width="150" />
          </a>
        </div>
      </div>
    </div>
  );
}