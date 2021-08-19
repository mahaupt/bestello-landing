import { Component } from 'react';
import '../css/Hero.scss';

class Hero extends Component {
  render() { 
    return ( 
      <div className="hero">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <span className="display-5">Jetzt in wenigen minuten zur digitalen Speisekarte!</span>
            </div>
          </div>
        </div>
      </div>
     );
  }
}
 
export default Hero;