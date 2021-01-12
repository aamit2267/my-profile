// import libraries
import React, { Component } from "react";

// import stylesheets
import "../stylesheets/popup.css";

class Popup extends Component {
  render() {
    return (
      <div className="popup" id="popupBackground">
        <div className="popup__inner">
          <p className="popup__close" id="popupCloseBtn">
            X
          </p>
          <div className="popup__content">
            <h3 className="popup__header">{this.props.popup}</h3>
            <div className="header__underline" />
            {/* Instagram popup content */}
            {this.props.popup === "Instagram" && (
              <div>
                <h5 className="popup__subheader">
                  Message me on Instagram.
                </h5>
                <a href="https://instagram.com/amitagarwal2312"><h1 className="popup__main">@amitagarwal2312</h1></a>
              </div>
            )}
            {/* Email popup content */}
            {this.props.popup === "Email" && (
              <div>
                <h5 className="popup__subheader">
                  Email me anytime, I will get back to you as soon as possible.
                </h5>
                <h1 className="popup__main__email">aamit2267@gmail.com</h1>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Popup;
