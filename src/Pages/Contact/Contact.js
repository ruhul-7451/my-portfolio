import React from 'react';
import { Button, Col, Form } from 'react-bootstrap';
import { FaTelegramPlane, FaGithub, FaLinkedin } from 'react-icons/fa';
const Contact = () => {
    const handleGitHub = () => {
        window.open("https://github.com/ruhul-7451", "_blank")
    }
    const handleLinkedIN = () => {
        window.open("https://www.linkedin.com/in/ruhul7451/", "_blank")
    }

    return (
        <div >
            <div className="p-3 text-center">
                <h4>
                    Follow me on
                </h4>
                <FaGithub className="fs-1 me-3" onClick={handleGitHub} />
                <FaLinkedin className="fs-1 text-primary" onClick={handleLinkedIN} />
            </div>

            <Col xs={5} className="p-3 mx-auto">
                <Form action="https://formsubmit.co/officialruhulaminshuvo@gmail.com" method="POST" >
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="text" placeholder="Your Name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="email" placeholder="Your email" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Your Message</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Send Message <FaTelegramPlane />
                    </Button>
                </Form>
            </Col >
        </div >
    );
};

export default Contact;