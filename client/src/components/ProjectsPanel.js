import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import axios from "axios";

const fetchData = () => {
  return axios
    .get("http://localhost:3001/api/projects")
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return -1;
    });
};

class ProjectsPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loading: true, projectsData: null };
  }

  async componentDidMount() {
    const data = await fetchData();
    if (data !== -1) {
      this.setState({ loading: false, projectsData: data });
    }
  }

  render() {
    return (
      <div id="projects">
        <h2 style={{ clear: "left", marginBottom: "30px" }}>Projects</h2>
        <Container bg="dark">
          <Row style={{ marginBottom: "50px" }}>
            <Col md={{ span: 8, offset: 2 }}>
              <Carousel>
                {this.state.loading ? (
                  <div text-align="center">
                    loading...are you sure backend is working?
                  </div>
                ) : (
                  this.state.projectsData.map(
                    ({ name, image, description }) => (
                      <Carousel.Item key={name}>
                        <img
                          className="d-block w-100"
                          src={"/images/" + image}
                          alt={name}
                          style={{ border: "1px solid", borderRadius: "8%" }}
                        />
                        <Carousel.Caption>
                          <h3>{name}</h3>
                          <p>{description}</p>
                        </Carousel.Caption>
                      </Carousel.Item>
                    )
                  )
                )}
              </Carousel>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default ProjectsPanel;
