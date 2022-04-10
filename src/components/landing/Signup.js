
   
import React, { Component } from 'react';
import './Contact.scss';
import axios from 'axios';
import { deobfuscate } from '../../tools/obfuscate';

class Contact extends Component {
  

  constructor(props) {
    super(props);
    this.state = { email: "", submit: false, error: false }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();

    const payload = {
      name: "Visitor",
      email: this.state.email,
      msg: "Add To Notification List"
    };


    var promise = axios.post("https://api.bestello.at/relay/customer", payload);
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
      <div className="container mt-5 mb-5" style={{flexGrow: 1}}>
        <div className="p-5"></div>
        <div className="row justify-content-center">
          <div className="col mb-5 text-center contact-wrapper">
            <h3 id="contact">Sorry, leider ist dieser Bereich noch nicht verfügbar.</h3>
            <p>Keine Sorge. Wir informieren Sie, wenn wir fertig sind.</p>

            <div className="d-block contact-container mt-4">
              <form className={this.state.submit?"d-hidden ease":""} method="get" action="#" onSubmit={this.handleSubmit}>
                <div className="form-floating mb-2">
                  <input className="form-control mb-2" placeholder="Email" id="floatingEmail" type="email" name="email" value={this.state.email} onChange={this.handleChange} disabled={this.state.submit} required/>
                  <label htmlFor="floatingEmail">Email</label>
                </div>
                <button className="btn btn-dark form-control" type="submit" disabled={this.state.submit}>Eintragen</button>
              </form>
              
              
              <p className={(!this.state.submit?"d-hidden ease":"") + " h6"}>
                <i className="bi bi-check-circle text-success"></i> Danke fürs Eintragen! Wir melden uns, wenn es etwas neues gibt.
                <br/><br/>
                { (this.state.error)?(
                  <div class="alert alert-danger" role="alert">
                    Oops! Es gab einen Fehler beim Senden. Bitte versuchen Sie später noch einmal, oder schicken Sie uns eine Email an <a href={"mailto:" + deobfuscate("aW5mbyU0MGJlc3RlbGxvLmF0")}>{deobfuscate("aW5mbyU0MGJlc3RlbGxvLmF0")}</a>
                  </div>
                ):""}
              </p>
            </div>
          </div>
        </div>
        <div className="p-5"></div>
      </div>
     );
  }
}
 
export default Contact;