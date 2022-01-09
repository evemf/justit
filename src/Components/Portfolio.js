import React, { Component } from "react";
import Zmage from "react-zmage";
import Fade from "react-reveal";

let id = 0;
class Portfolio extends Component {
  render() {
    if (!this.props.data) return null;

    const projects = this.props.data.projects.map(function (projects) {
      let projectImage = "images/portfolio/" + projects.image;

      return (
        <div key={id++} className="portfolio-item">
          <div className="item-wrap">
            <Zmage alt={projects.title} src={projectImage} />
            <div style={{ textAlign: "center" }}>{projects.title}</div>
          </div>
        </div>
      );
    });

    return (
      <section id="portfolio">
          <div className="emf-container">
            <div>
              <Fade left duration={600} distance="40px">
                <h1>Check some of the projects I worked on.</h1>
              </Fade>
              <div
                id="portfolio-wrapper"
                className=""
              >
                {projects}
              </div>
            </div>
          </div>
      </section>
    );
  }
}

export default Portfolio;
