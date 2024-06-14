import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SingleProject from "../components/Single-Project/SingleProject";

function Projects() {
  const test = [
    {
      title: "Project",
      picture: "../lib/images/github-mark.png",
      github: "https://github.com/emmatar",
      deploy: "https://emmatar.github.io/Sweater-Weather/",
    },
  ];

  return (
    <Container lg={12} className="p-2">
      <Row className="page-title-style">
        <h1>Projects</h1>
      </Row>
      <Col className="page-section-styles">
        <Row className="mx-4">
          <SingleProject
            title={test.title}
            picture={test.picture}
            github={test.github}
            deploy={test.deploy}
          />
        </Row>
      </Col>
    </Container>
  );
}

export default Projects;