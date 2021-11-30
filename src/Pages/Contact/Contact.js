import React from 'react';
import { Button, Col, Container, Form } from 'react-bootstrap';
import { FaTelegramPlane, FaGithub, FaLinkedin } from 'react-icons/fa';
const Contact = () => {
    const handleGitHub = () => {
        window.open("https://github.com/ruhul-7451", "_blank")
    }
    const handleLinkedIN = () => {
        window.open("https://www.linkedin.com/in/ruhul7451/", "_blank")
    }

    return (
        <Container style={{
            height: '583px'
        }}>
            <Col className="text-center mt-3">
                <h4>Follow me</h4>
                <FaGithub className="fs-1 me-3" onClick={handleGitHub} />
                <FaLinkedin className="fs-1 text-primary" onClick={handleLinkedIN} />
            </Col>
            <h3 className="text-center text-secondary mt-3">Send me Message</h3>
            <Col xs={12} md={5} className="p-3 mx-auto">
                <Form action="https://formsubmit.co/officialruhulaminshuvo@gmail.com" method="POST" >
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="text" placeholder="Your Name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="email" placeholder="Your email" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Control as="textarea" rows={3} placeholder="Your Message" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Send Message <FaTelegramPlane />
                    </Button>
                </Form>
            </Col >

        </Container >
    );
};

export default Contact;