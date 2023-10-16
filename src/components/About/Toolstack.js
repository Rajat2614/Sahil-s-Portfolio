import React from "react";
import { Col, Row } from "react-bootstrap";
import {
	SiLinux,
	SiPowerbi,
	SiVisualstudiocode,
	SiPostman,
	SiHeroku,
	SiMicrosoftoffice,
	SiMysql,
	SiMicrosoftexcel,
	SiPostgresql,
	SiMicrosoftsqlserver,
	SiTableau,
	SiLooker,
	SiJupyter,
	SiSass,
	SiAmazonaws,
	SiMicrosoftazure,
	SiGooglecloud
} from "react-icons/si";

function Toolstack() {
	return (
		<Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
			<Col xs={4} md={2} className="tech-icons">
				<SiPowerbi />
				<p style={{fontSize: "20px",color: "#000"}}> Power BI </p>
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiTableau />
				<p style={{fontSize: "20px",color: "#000"}}> Tableau </p>
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiMicrosoftexcel />
				<p style={{fontSize: "20px",color: "#000"}}> MS Excel </p>
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiMysql />
				<p style={{fontSize: "20px",color: "#000"}}> My SQL</p>
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiPostgresql />
				<p style={{fontSize: "20px",color: "#000"}}> PostgreSQL </p>
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiMicrosoftsqlserver />
				<p style={{fontSize: "20px",color: "#000"}}> MS SQL server </p>
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiLooker />
				<p style={{fontSize: "20px",color: "#000"}}> Looker </p>
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiJupyter />
				<p style={{fontSize: "20px",color: "#000"}}> Jupyter Notebook </p>
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiVisualstudiocode />
				<p style={{fontSize: "20px",color: "#000"}}> VS Code </p>
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiAmazonaws />
				<p style={{fontSize: "20px",color: "#000"}}> AWS </p>
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiMicrosoftazure />
				<p style={{fontSize: "20px",color: "#000"}}> MS Azure </p>
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiGooglecloud />
				<p style={{fontSize: "20px",color: "#000"}}> Google Cloud </p>
			</Col>
		</Row>
	);
}

export default Toolstack;
