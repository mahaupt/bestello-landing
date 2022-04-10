import { Component } from 'react';
import './Bulletpoints.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobileScreen, faEye, faRobot } from '@fortawesome/free-solid-svg-icons'

class Bulletpoints extends Component {
  bulletElement(icon, title, description)
  {
    return (
      <div className="col-12 col-md-4 mb-5">
        <div className="icon-stack bg-gradient">
          <FontAwesomeIcon icon={icon} />
        </div>
        <h3>{title}</h3>
        <p>
          {description}
        </p>
      </div>
    );
  }


  render() { 
    return ( 
      <div className="container text-center">
        <div className="d-none d-md-block p-5"></div>
        <div className="row" id="features">
          {this.bulletElement(faMobileScreen, "Digitale Bestellung und Bezahlung", "Ihr Gast setzt sich an Ihren Tisch, scannt einen QR Code ein, hat sofort Zugriff auf die Speisekarte, kann digital bestellen und auf wunsch sogar direkt bezahlen.")}
          {this.bulletElement(faEye, "Behalten Sie den Überblick", "Mit dem Personaldashboard behalten Sie immer den Überblick über aktuelle Bestellungen und Status. Optional kann Ihr Gast genau verfolgen, wie weit die Bestellung bereits fertig ist und für SB Bereiche: ob er sie abholen kann.")}
          {this.bulletElement(faRobot, "Automatisierte Rechnungserstellung", "Die Zettelwirtschaft bekommt ein Upgrade: Auf Wunsch kann Ihr Gast die Rechnungen direkt herunterladen, oder sich per Email weiterleiten.")}
        </div>
        <div className="d-none d-md-block p-5"></div>
      </div>
     );
  }
}
 
export default Bulletpoints;