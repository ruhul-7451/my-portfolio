import React from 'react';
import { Col, Row } from 'react-bootstrap';

const AboutMe = () => {
    return (
        <div className="bg-light my-3 p-3">
            <Row className="justify-content-center align-items-center">
                <Col xs={4}><img src="https://i.ibb.co/7XG8mPT/Ruhul-PP.jpg" className="img-fluid" alt="" /></Col>
                <Col className="fs-5">
                    <p>Hello, buddy...</p>
                    <p>This is <span className="fs-3">Ruhul</span> I build things for the web. Currently, I am a React Developer apprentice. I am developing various projects and learning lots of new skills which you can see on my Projects section. I am building robust and flexible React projects those are performant and smooth</p>
                </Col>
            </Row>
        </div >
    );
};

export default AboutMe;