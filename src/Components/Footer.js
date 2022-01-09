import React, { Component } from "react";
import Fade from "react-reveal";

class Footer extends Component {

  render() {
    if (!this.props.data) return null;

    const networks = this.props.data.social.map(function (network) {
      return (
        <li key={network.name}>
          <a href={network.url}>
            <i className={network.className}></i>
          </a>
        </li>
      );
    });

    return (
      <footer>
        <div className="emf-container">
          <Fade bottom>
            <div className="">
              <ul className="social-links">{networks}</ul>

              <ul className="copyright">
                <li>
                &copy;
                <span id="copyright">{(new Date().getFullYear()) + " "}</span>
                  <span>Design and developed by{" "}
                  <a title="Evelia Molina website" href="http://www.eveliamolina.com/">
                    Evelia Molina
                  </a>
                </span>
                </li>
              </ul>
            </div>
          </Fade>

          <div id="go-top">
            <a className="smoothscroll" title="Back to Top" href="#home">
              <i className="icon-up-open"></i>
            </a>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
