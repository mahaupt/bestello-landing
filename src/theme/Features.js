import { Component } from 'react';


class Features extends Component {
  featureElement(title, description)
  {
    return (
      <div className="col-12 col-md-4 mb-5">
        <h3>{title}</h3>
        <p>
          {description}
        </p>
      </div>
    );
  }


  render() { 
    return ( 
      <div className="container text-center">
        <div className="d-none d-md-block p-5"></div>
        <div className="row" id="features">
          {this.featureElement("Feature 1", "Lorem Ipsum")}
          {this.featureElement("Feature 2", "Lorem Ipsum")}
          {this.featureElement("Feature 3", "Lorem Ipsum")}
        </div>
        <div className="d-none d-md-block p-5"></div>
      </div>
     );
  }
}
 
export default Features;