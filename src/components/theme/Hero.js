import { Component } from 'react';
import './Hero.scss';
import mobile from '../../assets/mobile-4.png';

class Hero extends Component {
  render() { 
    return ( 
      <div className="hero mb-70">
        <div className="background-wave"></div>
        <div className="hero-content container">
          <div className="row">
            <div className="col-12 col-md-6 mb-5 pe-5">
              <p className="display-5">Jetzt in wenigen Minuten zur digitalen Speisekarte!</p>
              <p className="h5 fw-light text-light mb-4">
                Schnauze voll mit langem Warten auf die Speisekarte und Bestellaufnahme?
              </p>
              <p className="h5 fw-light text-light mb-4">
                Geben Sie Ihren Gästen die Möglichkeit, digital mit dem Smartphone zu bestellen und zu bezahlen.
              </p>
              <p>
                <a href="#contact" className="btn btn-outline-light">Jetzt kostenlos testen!</a>
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
}
 
export default Hero;