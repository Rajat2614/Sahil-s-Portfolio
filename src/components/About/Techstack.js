import React from "react";
import { Col, Row } from "react-bootstrap";
import {
	DiJavascript1,
	DiReact,
	DiNodejs,
	DiMongodb,
	DiPython,
	DiGit,
	DiDatabase,
	DiCloud9,
	
} from "react-icons/di";
import {
	SiR,
	SiPandas,
	SiNumpy,
	SiMicrosoftoffice,
	SiCloudways
} from "react-icons/si";

import { SiFirebase, SiNextdotjs } from "react-icons/si";

function Techstack() {
	return (
		<Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
			<Col xs={4} md={2} className="tech-icons">
				<DiPython />
				<p style={{fontSize: "20px",color: "#000"}}> Python </p>
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiPandas />
				<p style={{fontSize: "20px",color: "#000"}}> Pandas </p>
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiNumpy />
				<p style={{fontSize: "20px",color: "#000"}}> Numpy </p>
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<DiDatabase />
				<p style={{fontSize: "20px",color: "#000"}}> DBMS </p>
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiMicrosoftoffice />
				<p style={{fontSize: "20px",color: "#000"}}> MS Office </p>
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<DiGit />
				<p style={{fontSize: "20px",color: "#000"}}> Git </p>
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiCloudways />
				<p style={{fontSize: "20px",color: "#000"}}> Cloud Database </p>
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiR />
				<p style={{fontSize: "20px",color: "#000"}}> R Programming </p>
			</Col>
			
		</Row>
	);
}

export default Techstack;
