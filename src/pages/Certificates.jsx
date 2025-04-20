import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./Certificates.css";

const certificates = [
  {
    title: "Programming in Modern C++",
    image: "/certificates/cpp.png",
  },
  {
    title: "Cloud Computing - NPTEL",
    image: "/certificates/cloud.jpg",
  },
  {
    title: "Web Dev - Coursera",
    image: "/certificates/web.jpg",
  },
  {
    title: "DSA - CipherSchools",
    image: "/certificates/dsa.jpg",
  },
];

function Certificates() {
  return (
    <div id="certificates" className="certificates-section">
      <Container>
        <h2 className="section-title text-center mb-5 text-light">
          Certificates
        </h2>
        <Row>
          {certificates.map((cert, index) => (
            <Col key={index} md={6} lg={4} className="mb-4">
              <Card className="cert-card">
                <Card.Img variant="top" src={cert.image} alt={cert.title} />
                <Card.Body>
                  <Card.Title>{cert.title}</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Certificates;
