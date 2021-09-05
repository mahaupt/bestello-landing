import { Component } from 'react';

class Reviews extends Component {
  carouselItem(title, text, active=false) {
    return (
      <div className={"carousel-item" + (active?" active":"")}>
        <h3>{title}</h3>
        <p>{text}</p>
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
              {this.carouselItem("Review 1", "This app is great", true)}
              {this.carouselItem("Review 2", "Hello World")}
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#reviewCarousel" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#reviewCarousel" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
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