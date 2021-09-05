import React from 'react';
import './ProductCategories.scss';
import ScrollHint from 'scroll-hint';


class ProductCategories extends React.Component {
  componentDidMount() {
    new ScrollHint('.js-scrollable', {
      i18n: {
        scrollable: ''
      }
    });
  }

  render() { 
    return (
      <>
        <nav className="navbar navbar-light category-navbar bg-light" id="category-navbar">
          <div className="container-fluid">
            <ul className="navbar-nav flex-row w-100 js-scrollable">
              <li className="nav-item">
                <a className="nav-link" href="#getraenke">Getränke</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#vorspeisen">Vorspeisen</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#spezialitaeten">Spezialitäten</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#fleisch">Fleisch</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#fisch">Fisch</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#vegetarisch">Vegetarisch</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Nachspeisen</a>
              </li>
            </ul>
          </div>
        </nav>
      </>
    );
  }
}
 
export default ProductCategories;