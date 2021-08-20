import { Component } from 'react';
import "../css/Navbar.scss";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    }
  }


  render() { 
    const navBarClass = this.state.open ? "navbar-light bg-light" : "navbar-dark";

    return ( 
      <nav className={"navbar navbar-sticky navbar-expand-lg " + navBarClass}>
        <div className="container">
          <a className="navbar-brand mr-70" href="#">Menero</a>
          <button onClick={() => this.setState({open: !this.state.open})} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
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