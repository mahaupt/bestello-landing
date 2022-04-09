import { Component } from 'react';
import "./Navbar.scss";
import { HashLink as Link } from 'react-router-hash-link';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({open: !this.state.open})
  }


  render() { 
    const useLightScheme = (this.state.open || this.props.useLightScheme==="true");
    const navBarClass = useLightScheme ? "navbar-light bg-light" : "navbar-dark";

    return ( 
      <nav className={"navbar navbar-sticky navbar-expand-lg " + navBarClass}>
        <div className="container">
          <Link className="navbar-brand mr-70" to="/#features">Bestello</Link>
          <button onClick={this.handleClick} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <Link className="nav-link" to="/#features">Features</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/#prices">Preise</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/#contact">Kontakt</Link>
              </li>
            </ul>
            <div className="flex-row ml-auto mr-70">
              <Link to="/#contact" className={"btn btn-outline-" + (useLightScheme?"dark":"light")}>Jetzt kostenlos testen!</Link>
            </div>
          </div>
        </div>
      </nav>
     );
  }
}
 
export default Navbar;