import { Component } from 'react';
import './ProductNavbar.scss';

class ProductNavbar extends Component {
  render() { 
    return (
      <nav className="navbar product-navbar bg-light">
        <div className="container-fluid">
          <ul className="navbar-nav flex-row justify-content-evenly w-100">         
            <li className="nav-item">
              <a href="#"><i className="bi bi-chat-square"></i></a>
            </li>     
            <li className="nav-item">
              <a href="#"><i className="bi bi-cart4"></i></a>
            </li>
          </ul> 
        </div>
      </nav>
    );
  }
}
 
export default ProductNavbar;