import React from 'react';
import { useMatomo } from '@datapunt/matomo-tracker-react';
import './Contact.scss';
import axios from 'axios';
import { deobfuscate } from '../../tools/obfuscate';

export default function Contact(props) {
  const { trackEvent } = useMatomo();

  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [msg, setMsg] = React.useState('');
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const [isError, setIsError] = React.useState(false);

  const handleSubmit = function(event) {
    event.preventDefault();
    trackEvent({ category: 'Landing', action: 'submit', name: 'form-contact' });

    const payload = {
      name: name,
      email: email,
      msg: msg
    };

    var promise = axios.post("https://api.bestello.at/relay/customer", payload);
    promise.catch(function (error) {
      console.log(error);
      setIsError(true);
    });

    setIsSubmitted(true);
  };

  return ( 
    <div className="container mt-5 mb-5">
      <div className="d-none d-md-block p-3"></div>
      <div className="row justify-content-center">
        <div className="col mb-5 text-center contact-wrapper">
          <h2 id="contact">Kontakt</h2>
          <p>Wir organisieren Ihnen gerne eine unverbindlich Testversion. Melden Sie sich noch heute bei uns! Wir freuen uns auf Ihre Nachricht.</p>

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
                <textarea className="form-control mb-2" placeholder="Ihre Nachricht" id="floatingText" name="text" value={msg} onChange={e => setMsg(e.target.value)} disabled={isSubmitted} style={{height: "100px"}} required/>
                <label htmlFor="floatingText">Ihre Nachricht</label>
              </div>
              <button className="btn btn-dark form-control" type="submit" disabled={isSubmitted}>Absenden</button>
            </form>
            
            
            <p className={(!isSubmitted?"d-hidden ease":"") + " h6"}>
              <i className="bi bi-check-circle text-success"></i> Danke für Ihre Nachricht! Wir werden uns in kürze bei Ihnen melden.
              <br/><br/>
              { (isError)?(
                <div class="alert alert-danger" role="alert">
                  Oops! Es gab einen Fehler beim Senden Ihrer Nachricht. Bitte versuchen Sie später noch einmal, oder schicken Sie uns eine Email an <a href={"mailto:" + deobfuscate("aW5mbyU0MGJpdGdsYWRpYXRvci5kZQ==")}>{deobfuscate("aW5mbyU0MGJpdGdsYWRpYXRvci5kZQ==")}</a>
                </div>
              ):""}
            </p>
          </div>
        </div>
      </div>
    </div>
    );
}
 