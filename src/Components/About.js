import React, { Component } from "react";
import Fade from "react-reveal";

class About extends Component {
  render() {
    if (!this.props.data) return null;

    const name = this.props.data.name;
    const profilepic = "images/" + this.props.data.image;
    const bio = this.props.data.bio;
    const resumeDownloadEN = "inc/" + this.props.data.resumedownloadEN;
    const resumeDownloadES = "inc/" + this.props.data.resumedownloadES;

    return (
      <section id="about">
        <Fade duration={1000}>
          <div className="emf-container">
            <div className="profile-wrap">
              <img
                className="profile-pic"
                src={profilepic}
                alt="Nordic Giant Profile Pic"
              />
            </div>
            <div className="main-col">
              <h2>About Me</h2>
              <p>{bio}</p>
                <div className="download">
                  <p>
                    <a href="inc/" download={resumeDownloadEN} className="button">
                      <i className="fa fa-download"></i>Download Resume
                    </a>
                    <a href="inc/" download={resumeDownloadES} className="button">
                      <i className="fa fa-download"></i>Descargar CV
                    </a>
                  </p>
                </div>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default About;
