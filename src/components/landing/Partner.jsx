import React from 'react';
import fhcampuswien from '../../assets/FH_Campus_Wien_Logo_Druck_40_mm.png';


export default function Partner() {
  return (
    <div className="container">
      <div className="d-none d-md-block p-3"></div>
      <div className="row justify-content-center">
        <div className="col mb-5 text-center contact-wrapper">
          <h3 className="mb-4">Unsere Partner</h3>
          <a href="https://www.fh-campuswien.ac.at/" target="_blank" rel="noreferrer">
            <img src={fhcampuswien} alt="FH Campus Wien" style={{maxWidth: "200px"}}/>
          </a>
        </div>
      </div>
    </div>
  );
}