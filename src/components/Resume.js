// IMPORT LIBRARIES
import React, { Component } from "react";
import { Link } from "react-router-dom";

// IMPORT COMPONENTS
import Footer from "./Footer";
import Heading from "./Heading";

// IMPORT IMAGES
import ResumePDF from "../images/resume/resume.pdf";
import ResumeOne from "../images/resume/resumeOne.png";
import Resume21 from "../images/resume/resume21.png";
import Resume22 from "../images/resume/resume22.png";
import Resume23 from "../images/resume/resume23.png";
import ResumeThree from "../images/resume/resumeThree.png";
import ResumeFour from "../images/resume/resumeFour.png";
import ResumeFive from "../images/resume/resumeFive.png";
import ResumeSix from "../images/resume/resumeSix.png";
import ResumeSeven from "../images/resume/resumeSeven.png";
import ResumeEight from "../images/resume/resumeEight.png";
import ResumeNine from "../images/resume/resumeNine.png";
import ResumeTen from "../images/resume/resumeTen.png";
import ResumeEleven from "../images/resume/resumeEleven.png";
import ResumeTwelve from "../images/resume/resumeTwelve.png";
import ResumeThirteen from "../images/resume/resumeThirteen.png";
import ResumeFourteen from "../images/resume/resumeFourteen.png";
import ResumeFifteen from "../images/resume/resumeFifteen.png";
import ResumeSixteen from "../images/resume/resumeSixteen.png";

// IMPORT STYLESHEETS

class Resume extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.scrollToPosition(0);
  }

  render() {
    return (
      <div className="">
        <div className="parallax__cover__portfolio">
          <Heading
            title="Resume"
            para="Below is a copy of my resume or you can download a PDF version. For further information about how I might suit working with
          you in some capacity don't hesitate to get in touch."
            button="PDF"
            link={ResumePDF}
          />

          <div className="container__outer lightBG">
            <div className="container resume__container">
              <img
                src={ResumeOne}
                alt="resume segment"
                className="Resume__one"
              />

              <img src={Resume21} alt="resume segment" className="Resume__21" />
              <img
                src={Resume22}
                alt="resume segment"
                className="Resume__22"
                onClick={() => this.props.showPopup("Phone")}
              />
              <img
                src={Resume23}
                alt="resume segment"
                className="Resume__23"
                onClick={() => this.props.showPopup("Email")}
              />
              <Link to="./portfolio" className="Resume__three__link">
                <img
                  src={ResumeThree}
                  alt="resume segment"
                  className="Resume__three"
                />
              </Link>
              <a
                href="https://github.com/devrod/"
                target="_blank"
                className="Resume__four__link"
              >
                <img
                  src={ResumeFour}
                  alt="resume segment"
                  className="Resume__four"
                />
              </a>
              <img
                src={ResumeFive}
                alt="resume segment"
                className="Resume__five"
              />
              <img
                src={ResumeSix}
                alt="resume segment"
                className="Resume__six"
              />
              <img
                src={ResumeSeven}
                alt="resume segment"
                className="Resume__seven"
              />
              <a
                href="http://www.roddo.xyz"
                target="_blank"
                className="Resume__eight__link"
              >
                <img
                  src={ResumeEight}
                  alt="resume segment"
                  className="Resume__eight"
                />
              </a>
              <a
                href="https://github.com/devrod/snippets"
                target="_blank"
                className="Resume__nine__link"
              >
                <img
                  src={ResumeNine}
                  alt="resume segment"
                  className="Resume__nine"
                />
              </a>
              <img
                src={ResumeTen}
                alt="resume segment"
                className="Resume__ten"
              />
              <img
                src={ResumeEleven}
                alt="resume segment"
                className="Resume__eleven"
              />
              <img
                src={ResumeTwelve}
                alt="resume segment"
                className="Resume__twelve"
              />
              <a
                href="https://devrod.github.io/react-pique/"
                target="_blank"
                className="Resume__thirteen__link"
              >
                <img
                  src={ResumeThirteen}
                  alt="resume segment"
                  className="Resume__thirteen"
                />
              </a>
              <a
                href="https://github.com/devrod/react-pique"
                target="_blank"
                className="Resume__fourteen__link"
              >
                <img
                  src={ResumeFourteen}
                  alt="resume segment"
                  className="Resume__fourteen"
                />
              </a>
              <img
                src={ResumeFifteen}
                alt="resume segment"
                className="Resume__fifteen"
              />
              <img
                src={ResumeSixteen}
                alt="resume segment"
                className="Resume__sixteen"
              />
            </div>
          </div>
          <Footer scrollToPosition={this.props.scrollToPosition} />
        </div>
      </div>
    );
  }
}

export default Resume;
