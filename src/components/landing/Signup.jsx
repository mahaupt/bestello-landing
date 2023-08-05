import React from 'react';
import { useMatomo } from '@datapunt/matomo-tracker-react';
import './Contact.scss';
import axios from 'axios';
import { deobfuscate } from '../../tools/obfuscate';

export default function Signup(props) {
  const { trackEvent } = useMatomo();

  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [msg, setMsg] = React.useState('');
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const [isError, setIsError] = React.useState(false);


  const handleSubmit = function(event) {
    event.preventDefault();
    trackEvent({ category: 'Landing', action: 'submit', name: 'form-signup' });

    const payload = {
      name: name,
      email: email,
      msg: "Beta Signup:\n" + msg
    };

    var promise = axios.post("https://api.bestello.at/relay/customer", payload);
    promise.catch(function (error) {
      console.log(error);
      setIsError(true);
    });

    setIsSubmitted(true);
  }

  return ( 
    <div className="container mt-5 mb-5" style={{flexGrow: 1}}>
      <div className="p-5"></div>
      <div className="row justify-content-center">
        <div className="col mb-5 text-center contact-wrapper">
          <h3 id="contact">Jetzt kostenlos Betatester werden</h3>
          <p>Sie können sich ab sofort für unser Betaprogramm anmelden. Wenn Ihr Lokal / Hotel unsere Anforderungen erfüllt, laden wir Sie als Betatester ein. So können Sie Bestello kostenlos nutzen und mittels Feedback aktiv an der Entwicklung von Bestello mitwirken.</p>

          <div className="d-block contact-container mt-4">
            <form className={isSubmitted?"d-hidden ease":""} method="get" action="#" onSubmit={handleSubmit}>
              <div className="form-floating mb-2">
                <input className="form-control" placeholder="Name" id="floatingName" type="text" name="name" value={name} onChange={e => setName(e.target.value)} disabled={isSubmitted} required/>
                <label htmlFor="floatingName">Name</label>
              </div>
              <div className="form-floating mb-2">
                <input className="form-control mb-2" placeholder="Email" id="floatingEmail" type="email" name="email" value={email} onChange={e => setEmail(e.target.value)} disabled={isSubmitted} required/>
                <label htmlFor="floatingEmail">Email</label>
              </div>
              <div className="form-floating mb-2">
                <textarea className="form-control mb-2" placeholder="Kurze Beschreibung Ihres Restaurants / Hotels" id="floatingText" name="text" value={msg} onChange={e => setMsg(e.target.value)} disabled={isSubmitted} style={{height: "100px"}} required/>
                <label htmlFor="floatingText">Kurze Beschreibung Ihres Restaurants / Hotels</label>
              </div>
              <button className="btn btn-dark form-control" type="submit" disabled={isSubmitted}>Eintragen</button>
            </form>
            
            
            <p className={(!isSubmitted?"d-hidden ease":"") + " h6"}>
              <i className="bi bi-check-circle text-success"></i> Danke fürs Eintragen! Wir melden uns, wenn es etwas neues gibt.
              <br/><br/>
              { (isError)?(
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
 