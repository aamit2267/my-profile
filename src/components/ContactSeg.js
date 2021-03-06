// IMPORT LIBRARIES
import React, { Component } from "react";

// IMPORT STYLESHEETS

// IMPORT IMAGES
import InstagramSVG from "../images/instagram.svg";
import EmailSVG from "../images/gmail.svg";

class ContactSeg extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="container__outer contactSeg__outer">
        <div className="contactSeg container">
          {/* Header and paragraph */}
          {/* Visible on home page, not on contact page */}
          <div
            className={this.props.header ? "contactSegShow" : "contactSegHide"}
          >
            <h1 className="header contactSeg__header">GET IN TOUCH</h1>
            <p className="contactSeg__para">
              I love getting messages and emails regarding web development so
              please get in touch, and I will respond super quick.
            </p>
          </div>
          {/* Phone and Email buttons */}
          <div className="contactSeg__iconContainer">
            <div
              className="contactSeg__iconBox"
              onClick={() => this.props.showPopup("Instagram")}
            >
              <img
                src={InstagramSVG}
                alt="phone icon"
                className="contactSeg__icon"
              />
              <p className="contactSeg__iconLabel">Instagram</p>
            </div>
            <div
              className="contactSeg__iconBox"
              onClick={() => this.props.showPopup("Email")}
            >
              <img
                src={EmailSVG}
                alt="email icon"
                className="contactSeg__icon"
              />
              <p className="contactSeg__iconLabel">Email</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactSeg;
