
   
import React, { Component } from 'react';
import './Contact.scss';
import axios from 'axios';
import { deobfuscate } from '../../tools/obfuscate';

class Contact extends Component {
  

  constructor(props) {
    super(props);
    this.state = { name: "", email: "", text: "", submit: false, error: false }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state.name, this.state.email, this.state.text);

    const payload = {
      name: this.state.name,
      email: this.state.email,
      message: this.state.text
    };


    var promise = axios.get("https://bg-back.k3s.ehaupt.de/v1/send", {params: payload});
    promise.catch(function (error) {
      console.log(error);
      this.setState({error: true});
    });

    this.setState({submit: true});
  }

  handleChange(event) {
    var stateChange = {};
    stateChange[event.target.name] = event.target.value;
    this.setState(stateChange);
  }

  render() { 

    return ( 
      <div className="container mt-5 mb-5">
        <div className="d-none d-md-block p-4"></div>
        <div className="row justify-content-center">
          <div className="col mb-5 text-center contact-wrapper">
            <h2 id="contact">Kontakt</h2>
            <p>Wir haben dein Interesse geweckt und du würdest gerne mehr erfahren? Melde dich bei uns! Wir freuen uns auf Deine Nachricht.</p>

            <div className="d-block contact-container mt-4">
              <form className={this.state.submit?"d-hidden ease":""} method="get" action="#" onSubmit={this.handleSubmit}>
                <div className="form-floating mb-2">
                  <input className="form-control" placeholder="Name" id="floatingName" type="text" name="name" value={this.state.name} onChange={this.handleChange} disabled={this.state.submit} required/>
                  <label htmlFor="floatingName">Name</label>
                </div>
                <div className="form-floating mb-2">
                  <input className="form-control mb-2" placeholder="Email" id="floatingEmail" type="email" name="email" value={this.state.email} onChange={this.handleChange} disabled={this.state.submit} required/>
                  <label htmlFor="floatingEmail">Email</label>
                </div>
                <div className="form-floating mb-2">
                  <textarea className="form-control mb-2" placeholder="Ihre Nachricht" id="floatingText" name="text" value={this.state.text} onChange={this.handleChange} disabled={this.state.submit} style={{height: "100px"}} required/>
                  <label htmlFor="floatingText">Ihre Nachricht</label>
                </div>
                <button className="btn btn-dark form-control" type="submit" disabled={this.state.submit}>Absenden</button>
              </form>
              
              
              <p className={(!this.state.submit?"d-hidden ease":"") + " h6"}>
                <i className="bi bi-check-circle text-success"></i> Danke für Deine Nachricht! Wir werden uns in kürze bei Dir melden.
                <br/><br/>
                { (this.state.error)?(
                  <div class="alert alert-danger" role="alert">
                    Oops! Es gab einen Fehler beim Senden Deiner Nachricht. Bitte versuche es später noch einmal, oder schicke uns eine Email an <a href={"mailto:" + deobfuscate("aW5mbyU0MGJpdGdsYWRpYXRvci5kZQ==")}>{deobfuscate("aW5mbyU0MGJpdGdsYWRpYXRvci5kZQ==")}</a>
                  </div>
                ):""}
              </p>
            </div>
          </div>
        </div>
      </div>
     );
  }
}
 
export default Contact;