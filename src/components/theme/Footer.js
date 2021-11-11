import { Component } from 'react';
import './Footer.scss';
import { HashLink as Link } from 'react-router-hash-link';

class Footer extends Component {
  render() { 
    return ( 
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <ul>
                <li><Link to="/legal#top">Impressum</Link></li>
                <li><Link to="/legal#datapolicy">Datenschutzerklärung</Link></li>
                <li><a href="https://bitgladiator.de" target="_blank">Created By Bitgladiator</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
     );
  }
}
 
export default Footer;