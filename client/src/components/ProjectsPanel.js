import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import axios from "axios";
import ProjectBox from "./ProjectBox.js";

const fetchData = () => {
  return axios
    .get("http://localhost:3000/api/projects")
    .then((res) => {
      return res.data;
    })
    .catch((err) => console.log("ARAAAA"));
};

class ProjectsPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loading: true, projectsData: null };
  }

  async componentDidMount() {
    const data = await fetchData();
    this.setState({ loading: false, projectsData: data });
  }

  populateBoxes() {
    console.log(this.state.projectsData);
    return this.state.projectsData.map(({ name, description, image }) => (
      <ProjectBox name={name} description={description} image={image}></ProjectBox>
    ));
  }

  render() {
    return (
      <Container>
        <h1>Projects</h1>
        <Row>
          {this.state.loading ? <h1>loading</h1> : this.populateBoxes()}
        </Row>
      </Container>
    );
  }
}

export default ProjectsPanel;
