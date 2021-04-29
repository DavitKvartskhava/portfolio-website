import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import ProfilePic from "../images/davit.jpg";
import SocialPlatforms from "./SocialPlatforms.js";

const PersonalWindow = () => {
  return (
    <>
      <Container>
        <Row id="welcome">
          <Col xs={{ span: 8, offset: 2 }} md={{ span: 4, offset: 0 }}>
            <img id="face" src={ProfilePic} alt="profile"></img>
            <h2>Davit K.</h2>
            <h3>Software Engineer</h3>
          </Col>

          <Col xs="12" md={{ span: 5, offset: 2 }}>
            <Row>
              <Col xs="12">
                <p>
                  I am graduating this year with a Computer Science degree. I am
                  currently studying at Earlham College. Recently, I started
                  delving into web development with React. This website was
                  built with MERN stack. Besides, I'm interested in machine
                  learning and have worked on some cool projects. I have been a
                  sys admin at my school for 3 years. BLa bla bla.
                  blaajbdfjajsdf.
                </p>
              </Col>
            </Row>

            <Row style={{ marginTop: "50px" }}>
              <SocialPlatforms />
            </Row>
          </Col>
        </Row>
      </Container>
      <hr
        className="line"
        style={{ float: "left", marginTop: "30px", clear: "right" }}
      />
    </>
  );
};

export default PersonalWindow;
