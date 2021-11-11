import { Component } from 'react';

class Reviews extends Component {
  carouselItem(title, text, active=false) {
    return (
      <div className={"carousel-item" + (active?" active":"")}>
        <h3>{title}</h3>
        <p style={{"maxWidth": "400px", "margin": "auto"}}>{text}</p>
      </div>
    );
  }


  render() { 
    return ( 
      <div className="bg-dark text-light shadow-sm">
        <div className="d-none d-md-block p-5"></div>
        <div className="d-md-none p-4"></div>
        <div className="container text-center" id="reviews">
          <div id="reviewCarousel" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner pb-5 pt-5">
              {this.carouselItem("Keep it simple, stupid", "Einfach Speisen hinzufügen, Tische erstellen und QR Codes bereit stellen. In wenigen Minuten haben Sie ihre eigene digitale Speisekarte in ihrem Restaurant. Der Gast kann in wenigen Klicks seine Lieblingsspeise bestellen.", true)}
              {this.carouselItem("Mehr Zeit für richtigen Service", "Schaffen Sie Zeit für Ihre Mitarbeiter. Sie sparen sich eine Menge Zeit für die Bestellaufnahme und Rechnungserstellung und können sich so mehr dem Gast widmen.")}
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#reviewCarousel" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Zurück</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#reviewCarousel" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Weiter</span>
            </button>
          </div>
        </div>
        <div className="d-md-none p-4"></div>
        <div className="d-none d-md-block p-5"></div>
      </div>
     );
  }
}

export default Reviews;