import React from 'react';
import { useMatomo } from '@datapunt/matomo-tracker-react';
import "./Navbar.scss";
import { HashLink as Link } from 'react-router-hash-link';
import bestello from '../../assets/bestello.png';
import bestelloWhite from '../../assets/bestello_white.png';


export default function Navbar(props) {
  const { trackEvent } = useMatomo();
  const [ isOpen, setIsOpen ] = React.useState(false);
  
  const useLightScheme = (isOpen || props.useLightScheme==="true");
  const navBarClass = useLightScheme ? "navbar-light bg-light" : "navbar-dark";

  return ( 
    <nav className={"navbar navbar-sticky navbar-expand-lg " + navBarClass}>
      <div className="container">
        <Link className="navbar-brand mr-70" to="/#features">
          <img src={useLightScheme?bestello:bestelloWhite} alt="Bestello" height="40" />
        </Link>
        <button onClick={() => setIsOpen(!isOpen)} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link className="nav-link" to="/#features">Features</Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/#demo">Demo</Link>
            </li>
            {/*<li className="nav-item">
              <Link className="nav-link" to="/#prices">Preise</Link>
            </li>*/}
            <li className="nav-item">
              <Link className="nav-link" to="/#contact">Kontakt</Link>
            </li>
          </ul>
          <div className="flex-row ml-auto mr-70">
            <Link to="/signup" onClick={() => trackEvent({ category: 'Landing', action: 'click', name: 'cta-header' })} className={"btn btn-" + (useLightScheme?"dark":"light")}>Jetzt kostenlos testen!</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
 