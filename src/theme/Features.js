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
        <div className="row">
          {this.featureElement("Feature 1", "Lorem Ipsum")}
          {this.featureElement("Feature 2", "Lorem Ipsum")}
          {this.featureElement("Feature 3", "Lorem Ipsum")}
        </div>
      </div>
     );
  }
}
 
export default Features;