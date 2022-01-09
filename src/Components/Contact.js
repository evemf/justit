import React, { Component } from "react";
import { Fade, Slide } from "react-reveal";

class Contact extends Component {
  render() {
    if (!this.props.data) return null;

    const name = this.props.data.name;
    const city = this.props.data.address.city;
    const state = this.props.data.address.state;
    const zip = this.props.data.address.zip;
    const email = this.props.data.email;
    const phone = this.props.data.phone;
    const message = this.props.data.contactmessage;

    return (
      <section id="contact">
        <div className="emf-container">
          <div className="contact-wrap">
            <div className="contact-container">
              <Fade bottom duration={1000}>
                <div className="section-head">
                  <div className="header-col">
                    <h2><i className="fa fa-envelope"></i><span>Get In Touch.</span></h2>
                  </div>
                  <div className="">
                    <p className="lead">{message}</p>
                  </div>
                </div>
              </Fade>
            </div>
            <div className="contact-container">
              <Slide left duration={1000}>
                <form action="" method="post" id="contactForm" name="contactForm">
                  <fieldset>
                    <div>
                      <label htmlFor="contactName">
                        Name <span className="required">*</span>
                      </label>
                      <input
                        type="text"
                        defaultValue=""
                        size="35"
                        id="contactName"
                        name="contactName"
                        onChange={this.handleChange}
                      />
                    </div>

                    <div>
                      <label htmlFor="contactEmail">
                        Email <span className="required">*</span>
                      </label>
                      <input
                        type="text"
                        defaultValue=""
                        size="35"
                        id="contactEmail"
                        name="contactEmail"
                        onChange={this.handleChange}
                      />
                    </div>

                    <div>
                      <label htmlFor="contactSubject">Subject</label>
                      <input
                        type="text"
                        defaultValue=""
                        size="35"
                        id="contactSubject"
                        name="contactSubject"
                        onChange={this.handleChange}
                      />
                    </div>

                    <div>
                      <label htmlFor="contactMessage">
                        Message <span className="required">*</span>
                      </label>
                      <textarea
                        cols="50"
                        rows="15"
                        id="contactMessage"
                        name="contactMessage"
                      ></textarea>
                    </div>

                    <div>
                      <button className="submit">Submit</button>
                      <span id="image-loader">
                        <img alt="" src="images/loader.gif" />
                      </span>
                    </div>
                  </fieldset>
                </form>
                <div id="message-warning"> Error boy</div>
                <div id="message-success">
                  <i className="fa fa-check"></i>Your message was sent, thank you!
                  <br />
                </div>
              </Slide>
              <Slide right duration={1000}>
                <aside className="footer-widgets">
                  <div className="widget widget_contact">
                    <h4>Address and Phone</h4>
                    <p className="address">
                      {name}
                      <br />
                      {city}, {state} {zip}
                      <br />
                      <span>{email}</span>
                      <br />
                      <span>{phone}</span>
                    </p>
                  </div>
                </aside>
              </Slide>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Contact;
