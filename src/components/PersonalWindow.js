import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import ProfilePic from "../images/davit.jpg";

const PersonalWindow = () => {
  return (
    <>
      <Container>
        <Row>
          <Col md={{ span: 4 }} sm={{ span: 10 }}>
            <img id="face" src={ProfilePic}></img>
            <h2>Davit K.</h2>
            <h3>Software Engineer</h3>
          </Col>
        </Row>
        <Row>
          <p>
            I am graduating this year with a Computer Science degree. I am
            currently studying at Earlham College.
          </p>
        </Row>
      </Container>
      <hr className="line" style={{ float: "left", width: "40%" }} />
      <br />
    </>
  );
};

export default PersonalWindow;
