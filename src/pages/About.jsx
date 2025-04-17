import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./About.css";

function About() {
  return (
    <div id="about" className="about-section">
      <Container>
        <Row className="justify-content-center">
          <Col md={8} className="text-center text-light">
            <h2 className="about-title">About Me</h2>
            <p className="about-text mt-4">
              I'm <strong>Satakratu Chakraborty</strong>, currently pursuing a
              degree in Computer Science Engineering. Passionate about full
              stack development, I enjoy building responsive, user-friendly
              websites and applications. I love solving real-world problems
              through code and continuously learning new technologies.
              <br />
              <br />
              When I'm not coding, I enjoy reading stories, exploring new
              places, and collaborating with like-minded people.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
