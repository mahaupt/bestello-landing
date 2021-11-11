import React, { Component } from 'react';
import { deobfuscate, obfuscate } from '../../tools/obfuscate';


class Imprint extends Component {
  state = {  }



  render() { 
    return ( 
      <div className="container mt-120" id="imprint">
        <div className="row">
          <div className="col-12">
            <h1>Angaben gemäß § 5 TMG:</h1>
            <h2>Inhaber: </h2>
            <p>
              {deobfuscate("TWFyY2VsJTIwSGF1cHQ=")}<br/>
              {deobfuscate("TmV1Z2Fzc2UlMjAyOCUyRjY=")}<br/>
              {deobfuscate("QVQtNzExMSUyMFBhcm5kb3Jm")}
            </p>

            <h2>Kontakt:</h2>
            <a href={"mailto:" + deobfuscate("bWFyY2VsJTQwYml0Z2xhZGlhdG9yLmRl")}>{deobfuscate("bWFyY2VsJTQwYml0Z2xhZGlhdG9yLmRl")}</a>
          </div>
        </div>
      </div>
     );
  }
}
 
export default Imprint;