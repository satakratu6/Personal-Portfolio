import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import "./Contact.css";

function Contact() {
  return (
    <div id="contact" className="contact-section">
      <Container>
        <h2 className="text-center text-light mb-5">Get in Touch</h2>
        <Row>
          <Col md={6} className="contact-info text-light">
            <div className="info-box">
              <FaPhoneAlt className="icon" />
              <span>+91 7973263806</span>
            </div>
            <div className="info-box">
              <FaEnvelope className="icon" />
              <span>satakratu.madhu@gmail.com</span>
            </div>
            <div className="info-box">
              <FaMapMarkerAlt className="icon" />
              <span>28, H C Dutta Road, Kolkata, West Bengal</span>
            </div>
          </Col>

          <Col md={6}>
            <Form className="contact-form">
              <Form.Group controlId="formName" className="mb-3">
                <Form.Control type="text" placeholder="Your Name" required />
              </Form.Group>

              <Form.Group controlId="formEmail" className="mb-3">
                <Form.Control type="email" placeholder="Your Email" required />
              </Form.Group>

              <Form.Group controlId="formMessage" className="mb-3">
                <Form.Control
                  as="textarea"
                  rows={5}
                  placeholder="Your Message"
                  required
                />
              </Form.Group>

              <Button variant="outline-light" type="submit">
                Send Message
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Contact;
