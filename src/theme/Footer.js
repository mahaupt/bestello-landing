import { Component } from 'react';
import '../css/Footer.scss';


class Footer extends Component {
  render() { 
    return ( 
      <footer>
        <div className="container">
          <ul>
            <li><a href="#">Impressum</a></li>
            <li><a href="#">Datenschutzerklärung</a></li>
            <li><a href="#">Created By Bitgladiator</a></li>
          </ul>
        </div>
      </footer>
     );
  }
}
 
export default Footer;