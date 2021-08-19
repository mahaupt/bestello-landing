import { Component } from 'react';
import "../css/Navbar.scss";

class Navbar extends Component {

  render() { 
    return ( 
      <nav className="navbar navbar-sticky navbar-expand-lg navbar-dark">
        <div class="container">
          <a className="navbar-brand mr-70" href="#">Menero</a>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <a className="nav-link" href="#">Features</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Reviews</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Preise</a>
              </li>
            </ul>
            <div className="flex-row ml-auto mr-70">
              <button className="btn btn-outline-light">Jetzt kostenlos starten!</button>
            </div>
          </div>
        </div>
      </nav>
     );
  }
}
 
export default Navbar;