import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import ProfilePic from "../images/davit.jpg";

const PersonalWindow = () => {
  return (
    <>
      <Container>
        <Row id="welcome">
          <Col md={{ span: 3 }} sm={{ span: 10, offset: 1 }}>
            <img id="face" src={ProfilePic} alt="profile"></img>
            <h2>Davit K.</h2>
            <h3>Software Engineer</h3>
          </Col>
          <Col>
            <p>
              I am graduating this year with a Computer Science degree. I am
              currently studying at Earlham College.
            </p>
          </Col>
        </Row>
      </Container>
      <hr className="line" style={{ float: "left", width: "40%" }} />
      <br />
    </>
  );
};

export default PersonalWindow;
