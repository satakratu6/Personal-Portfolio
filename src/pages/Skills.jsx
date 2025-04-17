import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./Skills.css";

const skills = [
  { name: "HTML", image: "/skills/html.png" },
  { name: "CSS", image: "/skills/css.png" },
  { name: "JavaScript", image: "/skills/javascript.png" },
  { name: "React", image: "/skills/react.png" },
  { name: "Node.js", image: "/skills/node.png" },
  { name: "MongoDB", image: "/skills/mongodb.png" },
  { name: "PHP", image: "/skills/php.png" },
  { name: "MySQL", image: "/skills/mysql.png" },
];

function Skills() {
  return (
    <div id="skills" className="skills-section">
      <Container>
        <h2 className="text-center text-light mb-5">My Skills</h2>
        <Row>
          {skills.map((skill, idx) => (
            <Col key={idx} md={3} sm={6} xs={12} className="mb-4">
              <Card className="skill-card text-center">
                <Card.Img
                  variant="top"
                  src={skill.image}
                  className="skill-logo"
                />
                <Card.Body>
                  <Card.Title>{skill.name}</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Skills;
