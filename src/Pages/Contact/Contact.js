import React from 'react';
import { Button, Col, Form } from 'react-bootstrap';

const Contact = () => {
    return (
        <Col className="mx-auto p-5" xs={5}>
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
                <Button variant="success" type="submit">
                    Send Message
                </Button>
            </Form>
        </Col>
    );
};

export default Contact;