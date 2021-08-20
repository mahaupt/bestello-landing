import { Component } from 'react';
import '../css/Prices.scss';

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
        <td className="text-end pe-2">
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
        <div class="flex-row justify-content-center">

          <div class="col-12 mb-5 card-prices">
            <div class="card">
              <div class="card-body">
                <h3 className="text-center">Light</h3>
                <h4 className="text-center fw-light text-muted">kostenlos</h4>
                <table>
                  {this.tableRow("Tische", true, "5")}
                  {this.tableRow("Digitale Speisekarte", true)}
                  {this.tableRow("Abrufe pro Tag", true, "30k")}
                  {this.tableRow("Digitales Bestellen", false)}

                  {this.tableRow("Direktes Bezahlen", false)}
                  {this.tableRow("Personal Dashboard", false)}
                  {this.tableRow("Automatische Rechnungserstellung", false)}
                  {this.tableRow("Automatische Abrechnung", false)}
                </table>
              </div>
            </div>
          </div>

          <div class="col-12 mb-5 card-prices">
            <div class="card">
              <div class="card-body">
                <h3 className="text-center">Standard</h3>
                <h4 className="text-center">109€ <span className="small text-muted fw-light">/ Monat</span></h4>
                <table>
                  {this.tableRow("Tische", true, "50")}
                  {this.tableRow("Digitale Speisekarte", true)}
                  {this.tableRow("Abrufe pro Tag", true, "∞")}
                  {this.tableRow("Digitales Bestellen", true)}

                  {this.tableRow("Direktes Bezahlen", false)}
                  {this.tableRow("Personal Dashboard", true)}
                  {this.tableRow("Automatische Rechnungserstellung", false)}
                  {this.tableRow("Automatische Abrechnung", false)}
                </table>
              </div>
            </div>
          </div>

          <div class="col-12 mb-5 card-prices">
            <div class="card">
              <div class="card-body">
                <h3 className="text-center">Premium</h3>
                <h4 className="text-center">229€ <span className="small text-muted fw-light">/ Monat</span></h4>
                <table>
                  {this.tableRow("Tische", true, "200")}
                  {this.tableRow("Digitale Speisekarte", true)}
                  {this.tableRow("Abrufe pro Tag", true, "∞")}
                  {this.tableRow("Digitales Bestellen", true)}

                  {this.tableRow("Direktes Bezahlen", true)}
                  {this.tableRow("Personal Dashboard", true)}
                  {this.tableRow("Automatische Rechnungserstellung", true)}
                  {this.tableRow("Automatische Abrechnung", true)}
                </table>
              </div>
            </div>
          </div>

        </div>
      </div>
     );
  }
}
 
export default Prices;