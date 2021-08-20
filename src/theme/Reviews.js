import { Component } from 'react';

class Reviews extends Component {
  carouselItem(title, text, active=false) {
    return (
      <div className={"carousel-item mt-4 mb-4" + (active?" active":"")}>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    );
  }


  render() { 
    return ( 
      <div className="container text-center">
        <div id="reviewCarousel" className="carousel carousel-dark slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            {this.carouselItem("Review 1", "This app is great", true)}
            {this.carouselItem("Review 2", "Hello World")}
            {this.carouselItem("Review 3", "Lol")}
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
     );
  }
}

export default Reviews;