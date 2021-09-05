import { Component } from 'react';
import './Prices.scss';

class Prices extends Component {
  tableRow(feature, enabled, text="")
  {
    if (text === "")
    {
      text = (enabled)?
      (
        <i className='bi bi-check text-success h4'></i>
      ):(
        <i className='bi bi-x text-danger h4'></i>
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
              <table>
                <tbody>
                  {this.tableRow("Digitale Speisekarte", true)}
                  {this.tableRow("Abrufe pro Tag", true, "30k")}
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
              <h3 className="text-center">Standard</h3>
              <h4 className="text-center">109€ <span className="small text-muted fw-light">/ Monat</span></h4>
              <table>
                <tbody>
                  {this.tableRow("Digitale Speisekarte", true)}
                  {this.tableRow("Abrufe pro Tag", true, "∞")}
                  {this.tableRow("konfigurierbare Tische", true, "50")}

                  {this.tableRow("Dashboard fürs Personal", true)}
                  {this.tableRow("Digitales Bestellen", true)}
                  {this.tableRow("Einsicht in Bestellstatus", true)}

                  {this.tableRow("Digitales Bezahlen", false)}
                  {this.tableRow("Automatische Rechnungserstellung", false)}
                  {this.tableRow("Automatische Abrechnung", false)}
                </tbody>
              </table>
            </div>
          </div>

          <div className="col-md-auto mb-5 card-prices card bg-light">
            <div className="card-body">
              <h3 className="text-center">Premium</h3>
              <h4 className="text-center">229€ <span className="small text-muted fw-light">/ Monat</span></h4>
              <table>
                <tbody> 
                  {this.tableRow("Digitale Speisekarte", true)}
                  {this.tableRow("Abrufe pro Tag", true, "∞")}
                  {this.tableRow("konfigurierbare Tische", true, "200")}

                  {this.tableRow("Dashboard fürs Personal", true)}
                  {this.tableRow("Digitales Bestellen", true)}
                  {this.tableRow("Einsicht in Bestellstatus", true)}

                  {this.tableRow("Digitales Bezahlen", true)}
                  {this.tableRow("Automatische Rechnungserstellung", true)}
                  {this.tableRow("Automatische Abrechnung", true)}
                </tbody>
              </table>
            </div>
          </div>

        </div>
        <div className="d-none d-md-block p-5"></div>
      </div>
     );
  }
}
 
export default Prices;