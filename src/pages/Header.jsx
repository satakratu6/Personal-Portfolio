import React from "react";
import Typewriter from "typewriter-effect";
import { Button, Container, Row, Col } from "react-bootstrap";
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";
import "./Header.css";

function Header() {
  return (
    <div className="header-section d-flex align-items-center">
      <Container>
        <Row className="align-items-center">
          <Col md={6} className="text-light text-section">
            <h4>Hi, I am</h4>
            <h1>Satakratu Chakraborty</h1>
            <h5>
              <Typewriter
                options={{
                  strings: ["Aspiring Full Stack Developer"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h5>

            <Button
              variant="outline-light"
              href="/satakratu_Resume.pdf"
              download
              className="mt-3"
            >
              Download CV
            </Button>

            <div className="social-icons mt-4">
              <a
                href="https://github.com/satakratu6"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/satakratuc/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://www.instagram.com/satakratuc/"
                target="_blank"
                rel="noreferrer"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.facebook.com/satakratu.chakraborty.71"
                target="_blank"
                rel="noreferrer"
              >
                <FaFacebook />
              </a>
            </div>
          </Col>

          <Col md={6} className="image-section text-center">
            <img
              src="/myphoto.jpg"
              alt="Satakratu Chakraborty"
              className="header-img"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Header;
