import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "./Project.css";

const projects = [
  {
    title: "FashionClub Clothing Store",
    image: "/projects/fashion_club.png",
    description:
      "A full-stack fashion e-commerce app with modern UI and cart functionality.",
    github: "https://github.com/satakratu6/Fashion-Club",
    demo: "https://fashion-club-2tnk.vercel.app/",
  },
  {
    title: "Shajwal Real Estate",
    image: "/projects/php.png",
    description:
      "Real estate website using PHP to display listings and contact options.",
    github: "https://github.com/satakratu6/Real-Estate-Management-System",
    demo: "#",
  },
  {
    title: "Handyman Services Website",
    image: "/projects/handyman.png",
    description:
      "Responsive website for booking handyman services like plumbing and repairs with easy navigation.",
    github: "https://github.com/satakratu6/HandyMan_FrontEnd",
    demo: "https://handyman-cdyy.onrender.com/",
  },
  {
    title: "Sports Mania Website",
    image: "/projects/sports_mania.png",
    description:
      "A platform that connects local sports enthusiasts to find teammates, join games, and organize sports events nearby. Perfect for building an active sports community.",
    github: "https://github.com/satakratu6/Sports-Mania",
    demo: "https://nityam10000.github.io/Sports-Mania/",
  },
  {
    title: "Forest Resources Website",
    image: "/projects/forest.png",
    description:
      "A visually engaging website highlighting the types, importance, and conservation of forest resources. Designed to spread awareness and educate users about sustainable forestry.",
    github: "https://github.com/satakratu6/Forest-Resources",
    demo: "https://satakratu6.github.io/Forest-Resources/",
  },
  {
    title: "Library Management System",
    image: "/projects/library.png",
    description:
      "A console-based C++ application to manage library operations like adding, issuing, returning, and searching books. Built using object-oriented programming for efficient data handling.",
    github: "https://github.com/satakratu6/Library-Management-System",
    demo: "https://github.com/satakratu6/Library-Management-System",
  },
];

function Projects() {
  return (
    <div id="projects" className="projects-section">
      <Container>
        <h2 className="text-center text-light mb-5">My Projects</h2>
        <Row>
          {projects.map((project, idx) => (
            <Col md={4} sm={6} xs={12} className="mb-4" key={idx}>
              <Card className="project-card">
                <Card.Img
                  variant="top"
                  src={project.image}
                  className="project-image"
                />
                <Card.Body className="text-light">
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Text>{project.description}</Card.Text>
                  <div className="d-flex justify-content-between">
                    <Button
                      variant="outline-light"
                      href={project.demo}
                      target="_blank"
                    >
                      Live
                    </Button>
                    <Button
                      variant="outline-light"
                      href={project.github}
                      target="_blank"
                    >
                      GitHub
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Projects;
