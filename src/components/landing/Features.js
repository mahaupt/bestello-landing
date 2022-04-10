import { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { HashLink as Link } from 'react-router-hash-link';

class Features extends Component {
  featureElement(icon, header, text) {
    return (
      <div className="col-lg-6 mb-5">
        <div className="d-flex">
          <div className="icon-stack icon-stack-sm bg-success">
            <FontAwesomeIcon icon={icon} />
          </div>
          <div className="ms-4 text-start">
            <h5>{header}</h5>
            <p className="text-white-50 fw-light text-justify">{text}</p>
          </div>
        </div>
      </div>
    );
  }

  render() { 
    return ( 
      <div className="bg-dark text-light text-center">
        <div className="p-5"></div>
        <h2>Features</h2>
        <div className="container px-5" style={{maxWidth: "1000px"}}>
          <div className="row gx-5 mt-5 justify-content-center">
            {this.featureElement(faCheck, "Interaktive Speisekarte", "Mit der interaktiven Speisekarte können Gäste kinderleicht durch Speisen und Getränke navigieren. Die Speisekarte kann auch auf Ihrer Webseite eingebunden werden.")}
            {this.featureElement(faCheck, "Digitale Bestellung", "Gäste eines Tisches können ihre Bestellung gemeinsam auswählen und abschicken. Die Bestellung wandert direkt in die Küche und kann dort zubereitet werden.")}
            {this.featureElement(faCheck, "Click & Collect", "Statt Schlange stehen können Ihre Gäste direkt digital bestellen und bekommen eine Benachrichtigung, sobald ihre Bestellung abholbereit ist.")}
            {this.featureElement(faCheck, "Sonderwünsche", "Gäste können zu einzelnen Speisen Sonderwünsche angeben, wie z.B. eine spezielle Zutat oder auf eine Allergie hinweisen. Je nach Angebot kann alles individuell angepasst werden.")}
            {this.featureElement(faCheck, "Allergenkennzeichnung", "Sie können zu jeder Speise eine detaillierte Übersicht aller Allergene angeben. So haben Ihre Gäste mit Allergien immer den Überblick, ohne nachfragen zu müssen.")}
            {this.featureElement(faCheck, "Barrierefreiheit", "Seh-, Hör- und Sprechbehinderte Personen können z.B. mittels Screenreader-Funktionen selbst bestellen und sind nicht mehr auf fremde Hilfe angewiesen.")}
            {this.featureElement(faCheck, "Secure by design", "Durch integrierte Sicherheitsfunktionen können nur die Personen bestellen, die sich auch wirklich in Ihrem Lokal befinden. Künstliche Intelegenz sorgt für zusätzlichen Schutz gegen unangemessene Bestellungen.")}
          </div>
          <p><Link to="/signup" className="btn btn-outline-light">Jetzt kostenlos anmelden!</Link></p>
        </div>
        <div className="p-5"></div>
      </div>
     );
  }
}

export default Features;