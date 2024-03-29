import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/sahil_Img.png";
// import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiTwotoneMail,
  AiFillPhone
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I fell in love with programming and I have at least learnt
              something, I think… 🤷‍♂️
              <br />
              <br />I am fluent in classics like
              <i>
                <b className="purple"> C, Javascript and Python. </b>
              </i>
              <br />
              <br />
              My field of Interest's are building new &nbsp;
              <i>
                <b className="purple">
                  BlockChain, Web Technologies and Products{" "}
                </b>{" "}
                and also in areas related to{" "}
                <b className="purple">Mobile Application Development.</b>
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with <b className="purple">Node.js</b> and
              <i>
                <b className="purple">
                  {" "}
                  Modern Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> React.js and Next.js</b>
              </i>
            </p>
          </Col>
          <Col md={4} style={{ margin: "0px" }} className="myAvtar">
            <div>
              <img
                src={myImg}
                style={{ height: "55vh", width: "50vh",}}
                className="img-fluid"
                alt="avatar"
              />
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h3>
              Feel free to <span className="purple">connect </span>with me
            </h3>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/sahilmeena"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:sahilmeena2906@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiTwotoneMail/>
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/sahilmeena29/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="tel:+91 8130919761"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillPhone />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
