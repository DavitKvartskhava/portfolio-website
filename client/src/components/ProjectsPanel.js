import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import axios from "axios";
import ProjectBox from "./ProjectBox.js";

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

  populateBoxes() {
    console.log(this.state.projectsData);
    return this.state.projectsData.map(({ name, description, image }) => (
      <ProjectBox
        name={name}
        description={description}
        image={image}
      ></ProjectBox>
    ));
  }

  render() {
    return (
      <div id="projects">
        <h1 style={{ clear: "left", marginBottom: "30px" }}>Projects</h1>
        <Container>
          <Row>
            {this.state.loading ? (
              <div text-align="center">
                loading...are you sure backend is working?
              </div>
            ) : (
              this.populateBoxes()
            )}
          </Row>
        </Container>
      </div>
    );
  }
}

export default ProjectsPanel;
