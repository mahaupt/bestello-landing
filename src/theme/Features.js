import { Component } from 'react';


class Features extends Component {
  featureElement(title, description)
  {
    return (
      <div className="col-12 col-md-4 mb-5">
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
          {this.featureElement("Digitale Bestellung und Bezahlung", "Ihr Gast setzt sich an Ihren Tisch, scannt einen QR Code ein, hat sofort Zugriff auf die Speisekarte, kann digital bestellen und auf wunsch sogar direkt bezahlen.")}
          {this.featureElement("Behalten Sie den Überblick", "Mit dem Personaldashboard behalten Sie immer den Überblick über aktuelle Bestellungen und Status. Optional kann Ihr Gast genau verfolgen, wie weit die Bestellung bereits fertig ist und für SB Bereiche: ob er sie abholen kann.")}
          {this.featureElement("Automatisierte Rechnungserstellung", "Die Zettelwirtschaft bekommt ein Upgrade: Auf Wunsch kann Ihr Gast die Rechnungen direkt herunterladen, oder sich per Email weiterleiten.")}
        </div>
        <div className="d-none d-md-block p-5"></div>
      </div>
     );
  }
}
 
export default Features;