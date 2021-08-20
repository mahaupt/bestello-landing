import { Component } from 'react';

class Prices extends Component {
  tableRow(feature, enabled, text="")
  {
    if (text == "")
    {
      text = (enabled)?
      (
        <i className='bi bi-check text-success'>y</i>
      ):(
        <i className='bi bi-x text-danger'>n</i>
      );
    }

    return (
      <tr>
        <td>
          {feature}
          <i className='bi bi-check'></i>
        </td>
        <td className="text-end">
          {text}
        </td>
      </tr>
    );
  }

  render() { 
    return (
      <div className="container">
        <div class="row">
          <div class="col-12">
            <div class="card">
              <div class="card-body">
                <h3 className="text-center">Light</h3>
                <table>
                  {this.tableRow("Tische", true, "5")}
                  {this.tableRow("Digitale Speisekarte", true)}
                  {this.tableRow("Abrufe pro Tag", true, "30.000")}
                  {this.tableRow("Digitales Bestellen", true)}

                  {this.tableRow("Direktes Bezahlen", false)}
                  {this.tableRow("Personal Dashboard", false)}
                  {this.tableRow("Automatische Rechnungserstellung", false)}
                  {this.tableRow("Automatische Abrechnung", false)}
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