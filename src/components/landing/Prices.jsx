import { Component } from 'react';
import './Prices.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faCircle } from '@fortawesome/free-regular-svg-icons'

class Prices extends Component {
  tableRow(feature, enabled, text="")
  {
    if (text === "")
    {
      text = (enabled)?
      (
        <FontAwesomeIcon icon={faCircleCheck} className="text-success" />
      ):(
        <FontAwesomeIcon icon={faCircle} className="text-gray-400" />
      );
    }

    return (
      <tr>
        <td className="text-center pe-2">
          {text}
        </td>
        <td className="text-start">
          {feature}
        </td>
      </tr>
    );
  }

  render() { 
    return (
      <div className="container mt-5">
        <div className="d-none d-md-block p-5"></div>
        <h2 className="text-center mb-5" id="prices">Preise</h2>
        <div className="row justify-content-center">

          <div className="col-md-auto mb-5 card-prices card bg-light">
            <div className="card-body">
              <h3 className="text-center">Light</h3>
              <h4 className="text-center fw-light text-muted">kostenlos</h4>
              <p className="text-center"><small>Lediglich die interaktive Speisekarte z.B. zum Einbinden auf einer Webseite</small></p>
              <table>
                <tbody>
                  {this.tableRow("Digitale Speisekarte", true)}
                  {this.tableRow("Individuelles Design", true)}
                  {this.tableRow("konfigurierbare Tische", true, "5")}

                  {this.tableRow("Dashboard fürs Personal", false)}
                  {this.tableRow("Digitales Bestellen", false)}
                  {this.tableRow("Digitales Bezahlen", false)}
                </tbody>
              </table>
            </div>
          </div>

          <div className="col-md-auto mb-5 card-prices card bg-light">
            <div className="card-body">
              <h3 className="text-center">Basic</h3>
              <h4 className="text-center">99 <span className="small text-muted fw-light">/ Monat</span></h4>
              <p className="text-center"><small>Die digitale Speisekarte mit voller Bestellfunktionalität.</small></p>
              <table>
                <tbody>
                  {this.tableRow("Digitale Speisekarte", true)}
                  {this.tableRow("Individuelles Design", true)}
                  {this.tableRow("konfigurierbare Tische", true, "50")}

                  {this.tableRow("Dashboard fürs Personal", true)}
                  {this.tableRow("Digitales Bestellen", true)}
                  {this.tableRow("Einsicht in Bestellstatus", true)}

                  {this.tableRow("Integration in bestehendes Kassensystem", true)}

                  {this.tableRow("Digitales Bezahlen", false)}
                  {this.tableRow("Automatische Rechnungserstellung", false)}
                  {this.tableRow("Automatische Abrechnung", false)}
                </tbody>
              </table>
            </div>
          </div>

          <div className="col-md-auto mb-5 card-prices card bg-light">
            <div className="card-body">
              <h3 className="text-center">Professional</h3>
              <h4 className="text-center">199 <span className="small text-muted fw-light">/ Monat</span></h4>
              <p className="text-center"><small>Das Komplettpaket mit digitaler Bezahlung und automatischer Belegerstellung</small></p>
              <table>
                <tbody> 
                  {this.tableRow("Digitale Speisekarte", true)}
                  {this.tableRow("Individuelles Design", true)}
                  {this.tableRow("konfigurierbare Tische", true, "200")}

                  {this.tableRow("Dashboard fürs Personal", true)}
                  {this.tableRow("Digitales Bestellen", true)}
                  {this.tableRow("Einsicht in Bestellstatus", true)}

                  {this.tableRow("Integration in bestehendes Kassensystem", true)}

                  {this.tableRow("Digitales Bezahlen", true)}
                  {this.tableRow("Automatische Rechnungserstellung", true)}
                  {this.tableRow("Automatische Abrechnung", true)}
                </tbody>
              </table>
            </div>
          </div>

        </div>
        <p className="small fw-light text-gray-500 text-center">Alle Preisangaben in Euro und inkl. MwSt.</p>
        <div className="d-none d-md-block p-2"></div>
      </div>
     );
  }
}
 
export default Prices;