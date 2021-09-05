import React, { Component } from 'react';
import './Products.scss';


class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }


  renderSection(name, id) {
    return (
      <div className="col-12 p-2">
        <h2 id={id}>{name}</h2>
      </div>
    )
  }

  renderProduct() {
    return (
      <div className="col-12 p-0">
        <div className="card product-card mb-2">
          <div className="card-body product-body">
            <h5 className="product-title">Schnitzel mit Pommes <a className="product-more" href="#info"><i class="bi bi-question-circle"></i></a></h5>
            <p className="product-info mb-1">Mit Kartoffelsalat, Ketchup und Salatbeilage</p>
            <p className="product-choices mb-1 text-muted">Nach Wahl: Pommes, Wedges, Preiselbeeren</p>
            <p className="product-price mb-2">25,99 €</p>
            <p className="product-subinfo mb-1 small text-muted">Enthält glutenhaltiges Getreide</p>
          </div>

          <button className="product-button">+</button>
        </div>
      </div>
    )
  }


  render() { 
    return ( 
      <div className="container" data-bs-spy="scroll" data-bs-target="#category-navbar" data-bs-offset="0">
        <div className="row">
          {this.renderSection("Getränke", "getraenke")}
          {this.renderProduct()}
          {this.renderProduct()}
          {this.renderProduct()}
          {this.renderProduct()}
          {this.renderProduct()}

          {this.renderSection("Vorspeisen", "vorspeisen")}
          {this.renderProduct()}
          {this.renderProduct()}
          {this.renderProduct()}
          {this.renderProduct()}
          {this.renderProduct()}

          {this.renderSection("Spezialitäten", "spezialitaeten")}
          {this.renderProduct()}
          {this.renderProduct()}
          {this.renderProduct()}
          {this.renderProduct()}
          {this.renderProduct()}

          {this.renderSection("Fleisch", "fleisch")}
          {this.renderProduct()}
          {this.renderProduct()}
          {this.renderProduct()}
          {this.renderProduct()}
          {this.renderProduct()}

          {this.renderSection("Vegetarisch", "vegetarisch")}
          {this.renderProduct()}
          {this.renderProduct()}
          {this.renderProduct()}
          {this.renderProduct()}
          {this.renderProduct()}

          {this.renderSection("Nachspeisen", "nachspeisen")}
          {this.renderProduct()}
          {this.renderProduct()}
          {this.renderProduct()}
          {this.renderProduct()}
          {this.renderProduct()}
        </div>
      </div>
     );
  }
}
 
export default Item;