import { Component } from 'react';
import '../css/Footer.scss';


class Footer extends Component {
  render() { 
    return ( 
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <ul>
                <li><a href="#legal">Impressum</a></li>
                <li><a href="#datapolicy">Datenschutzerklärung</a></li>
                <li><a href="#bitgladiator">Created By Bitgladiator</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
     );
  }
}
 
export default Footer;