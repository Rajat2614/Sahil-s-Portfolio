import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Certicards from "./Certicards";
import Particle from "../Particle";


import pandasImg from "../../Assets/Certificates/pandas.png";
import pandasPdf from "../../Assets/Certificates/pandas.pdf";
import excelImg from "../../Assets/Certificates/excel.jpeg";
import excelPdf from "../../Assets/Certificates/excel.pdf";
import googleImg from "../../Assets/Certificates/google.jpeg";
// import googlePdf from "../../Assets/Certificates/google.pdf";



function Certificates() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Achievements </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few Certificates I've achieved recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <Certicards
              imgPath={pandasImg}
              isBlog={false}
              title="Data Analysis with Python"
              description="Successfully completed 6 weeks coursework with Jovian on 22nd August, 2023."
              link={pandasPdf}
            />
          </Col>
          <Col md={4} className="project-card">
            <Certicards
              imgPath={excelImg}
              isBlog={false}
              title="Excel Skills for Business"
              description="Successfully completed 4 Courses for Excel (Essentials to Advanced) from Macquarie University, Coursera on Jan 11, 2023."
              link={excelPdf}
            />
          </Col>
          <Col md={4} className="project-card">
            <Certicards
              imgPath={googleImg}
              isBlog={false}
              title="Google Data Analytics"
              description="Successfully completed 8 Courses for Data Analytics from Google, Coursera on Apr 7, 2023."
              // link={googlePdf}
            />
          </Col>
          
        </Row>
      </Container>
    </Container>
  );
}

export default Certificates;
