import React, { Component } from 'react';
import '../css/Product.scss';


class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="card product-card">
              <div className="card-body product-body">
                <h5 className="product-title">Schnitzel mit Pommes</h5>
                <a href="#info">Info</a>
                <p className="product-info">Mit Kartoffelsalat, Ketchup und Salatbeilage</p>
                <p className="product-choices">Nach Wahl: Pommes, Wedges, Preiselbeeren</p>
                <p className="product-price">25,99 €</p>
                <p className="product-subinfo">Enthält glutenhaltiges Getreide</p>
              </div>

              <div className="product-button">+</div>
            </div>
          </div>
        </div>
      </div>
     );
  }
}
 
export default Item;