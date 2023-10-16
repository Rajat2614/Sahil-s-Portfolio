import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Sahil Meena </span>
            from <span className="purple"> New Delhi, India.</span>
            <br />I have completed Bachelor's in Computer Science Engineering from Delhi Technological University in 2022.
            <br />
            <br />
            Apart from Analyzing Data, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Movies
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p className="purple">"Without data you’re just another person with an opinion." </p>
          <footer className="blockquote-footer">Edwards Deming</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
