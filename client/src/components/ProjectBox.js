import React from "react";
import { Col } from "react-bootstrap";

class ProjectBox extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <Col md={{span:3}} sm="12" className="projectBox">
          <h4>{this.props.name}</h4>
          {/* {this.props.description} */}
          <img src={'/images/'+this.props.image} alt={this.props.description} height="auto" width="auto"/>
        </Col>
      </>
    );
  }
}

export default ProjectBox;
