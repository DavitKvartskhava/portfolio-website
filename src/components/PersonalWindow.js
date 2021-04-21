import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ProfilePic from '../images/davit.jpg';

const PersonalWindow = () => {
    return (
        <Container>
            <Row>
                <Col md={{span: 4, offset:2}} sm={{span:10, offset:1}}>
                    <img id="face" src={ProfilePic}></img>
                    <h1>Davit Kvartskhava</h1>
                    <h2>Software Engineer</h2>
                </Col>
                <Col md={{span:4}}>
                    Here I have to say who tf I am.
                </Col>
            </Row>
        </Container>
    )
}

export default PersonalWindow;
