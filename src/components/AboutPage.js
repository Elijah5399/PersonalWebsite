import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
const faceImage = require("../images/myface.jpg");

export default function AboutPage() {
  return (
    <div id="about-section" className=" m-0 aboutWrapper">
      <Container>
        <h2 className="aboutMe">About Me</h2>
        <Row>
          <div className="aboutContentWrapper">
            <img className="myFace" src={faceImage} alt="My face" />
            <div className="aboutTextWrapper">
              <h4 className="aboutHeading">
                <b>
                  I'm Elijah, a Software Developer with many projects across
                  different programming languages and tech stacks.
                </b>
              </h4>
              <br />
              <p className="aboutText">
                I'm currently a Year 2 student studying Computer Science at the
                National University of Singapore. I've spent the past few years
                learning front-end and back-end web development, and found an
                interest in creating robust, beautiful web pages using different
                technologies.
              </p>
              <p className="aboutText">
                Having participated in multiple hackathons, I've also developed
                non-web applications and software, such as telegram bots and
                executable Java applications. In the process, I've learnt the
                importance of developing understandable, reusable code with good
                documentation, and I've developed a passion for making software
                which can impact lives.
              </p>
              <p className="aboutText">
                In my free time, I learn to use new technologies, watch anime,
                and play sports.
              </p>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
}
