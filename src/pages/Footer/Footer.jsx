import React, { Component } from "react";
import './footer.css';

class Footer extends Component{
  render() {
    return(
      <footer className="footer-div">
        <h1>&copy; {new Date().getFullYear()} Copyright: <a className="link" href="https://github.com/CandidoVinii"> Vinicius Aquino </a></h1>
      </footer>
    );
  }
}

export default Footer;