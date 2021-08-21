import React, { Component } from 'react';
import '../css/Contact.scss';


class Contact extends Component {
  

  constructor(props) {
    super(props);
    this.state = { name: "", email: "", text: "", submit: false }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state.name, this.state.email, this.state.text);
    this.setState({submit: true});
  }

  handleChange(event) {
    var stateChange = {};
    stateChange[event.target.name] = event.target.value;
    this.setState(stateChange);
  }

  render() { 

    return ( 
      <div className="container">
        <div className="row justify-content-center">
          <div className="col mb-5 text-center contact-wrapper">
            <h2 id="contact">Kontakt</h2>

            <div class="d-block contact-container">
              <form className={this.state.submit?"d-hidden-ease":""} method="get" action="#" onSubmit={this.handleSubmit}>
                <div class="form-floating mb-2">
                  <input className="form-control" placeholder="Name" id="floatingName" type="text" name="name" value={this.state.name} onChange={this.handleChange} disabled={this.state.submit} required/>
                  <label for="floatingName">Name</label>
                </div>
                <div class="form-floating mb-2">
                  <input className="form-control mb-2" placeholder="Email" id="floatingEmail" type="email" name="email" value={this.state.email} onChange={this.handleChange} disabled={this.state.submit} required/>
                  <label for="floatingEmail">Email</label>
                </div>
                <div class="form-floating mb-2">
                  <textarea className="form-control mb-2" placeholder="Ihre Nachricht" id="floatingText" name="text" value={this.state.text} onChange={this.handleChange} disabled={this.state.submit} style={{height: "100px"}} required/>
                  <label for="floatingText">Ihre Nachricht</label>
                </div>
                <button className="btn btn-primary form-control" type="submit" disabled={this.state.submit}>Absenden</button>
              </form>
              
              
              <p className={(!this.state.submit?"d-hidden-ease":"") + " h6"}><i class="bi bi-check-circle text-success"></i> Danke für Ihre Nachricht! Wir werden uns in kürze bei Ihnen melden.</p>
            </div>
          </div>
        </div>
      </div>
     );
  }
}
 
export default Contact;