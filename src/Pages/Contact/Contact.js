import React from 'react';
import { Button, Col, Container } from 'react-bootstrap';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { useForm, ValidationError } from '@formspree/react';
import { Navigate, useNavigate } from 'react-router';
const Contact = () => {
    let navigate = useNavigate()
    const handleGitHub = () => {
        window.open("https://github.com/ruhul-7451", "_blank")
    }
    const handleLinkedIN = () => {
        window.open("https://www.linkedin.com/in/ruhul7451/", "_blank")
    }
    const [state, handleSubmit] = useForm("xeqnjrdb");
    if (state.succeeded) {
        window.confirm('Message Send Successfully');
        return navigate("/")

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
                <form onSubmit={handleSubmit}>
                    {/* <label htmlFor="name">
                        Your Name
                    </label> */}
                    <input
                        id="name"
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        className="form-control my-3"
                    />
                    <ValidationError
                        prefix="Email"
                        field="email"
                        errors={state.errors}
                    />
                    {/* <label htmlFor="email">
                        Email Address
                    </label> */}
                    <input
                        id="email"
                        type="email"
                        name="email"
                        placeholder="Email"
                        className="form-control my-3"
                    />
                    <ValidationError
                        prefix="Email"
                        field="email"
                        errors={state.errors}
                    />
                    <textarea
                        id="message"
                        name="message"
                        placeholder="Your Message"
                        className="form-control my-3"
                    />
                    <ValidationError
                        prefix="Message"
                        field="message"
                        errors={state.errors}
                    />
                    <Button type="submit" disabled={state.submitting}>
                        Submit
                    </Button>
                </form>
            </Col >
        </Container >
    );
};

export default Contact;