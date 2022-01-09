import React, { Component } from "react";
import Slide from "react-reveal";

class Resume extends Component {
  getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      if (i === 0) {}
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  render() {
    if (!this.props.data) return null;

    const education = this.props.data.education.map(function (education) {
      return (
        <div className="item" key={education.school}>
          <h3>{education.school}</h3>
          <p className="info">
            {education.degree} <span>&bull;</span>
            <span className="date">{education.graduated}</span>
          </p>
          <p>{education.description}</p>
        </div>
      );
    });

    const work = this.props.data.work.map(function (work) {
      return (
        <div className="item" key={work.company}>
          <h3>{work.company}</h3>
          <p className="info">
            {work.title}
            <span>&bull;</span> <em className="date">{work.years}</em>
          </p>
          <p>{work.tech}</p>
        </div>
      );
    });

    const skills = this.props.data.skills.map((skills) => {
      const backgroundColor = this.getRandomColor();
      const className = "bar-expand " + skills.name.toLowerCase();
      const width = skills.level;

      return (
        <li key={skills.name}>
          <span style={{ width, backgroundColor }} className={className}></span>
          <em>{skills.name}</em>
        </li>
      );
    });

    return (
      <section id="resume">
        <Slide left duration={1100}>
          <div className="emf-container">
            <div className="education">
              <div className="header-col">
                <h2>
                  <span>Education</span>
                </h2>
              </div>
              <div className="main-col">{education}</div>
            </div>
          </div>
        </Slide>

        <Slide left duration={1100}>
          <div className="emf-container">
            <div className="work">
              <div className="header-col">
                <h2>
                  <span>Work</span>
                </h2>
              </div>
              <div className="main-col">{work}</div>
            </div>
          </div> 
        </Slide>

        <Slide left duration={1100}>
          <div className="emf-container">
            <div className="skills">
              <div className="header-col">
                <h2>
                  <span>Skills</span>
                </h2>
              </div>
              <div className="main-col">
                <div className="bars">
                  <ul className="skills--list">{skills}</ul>
                </div>
              </div>
            </div>
          </div>
        </Slide>
      </section>
    );
  }
}

export default Resume;
