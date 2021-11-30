import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import AboutMe from '../AboutMe/AboutMe';
import Contact from '../Contact/Contact';
import ShowProjects from '../Projects/ShowProjects/ShowProjects';


const Home = () => {
    const handleResumeView = () => {
        window.open('https://drive.google.com/file/d/1Uanh-4Z6TQ51vNTxNFImk4-Y6zVmiWmG/view?usp=sharing', "_blank")
    }
    return (
        <Container>
            <Row className="align-items-center">
                <Col>
                    <h1 className="text-primary">Hi, I am Md. Ruhul Amin Khan</h1>
                    <h3 className="text-secondary">A Junior Software Engineer</h3>
                    <article>
                        An enthusiastic and hardworking web developer seeking a challenging position to learn, contribute and grow with the organization. I am a MERN Stack Web developer. I have skills on JavaScript, React, HTML, CSS, Node js, Express js, MongoDB, Firebase, Heroku etc. You can see my recent projects on project section.
                    </article>

                    <hr />
                    <Button onClick={handleResumeView}>See My Resume</Button>
                </Col>
                <Col className="text-center">
                    <img src="https://i.ibb.co/7XG8mPT/Ruhul-PP.jpg" alt="md ruhul amin khan" />
                </Col>
            </Row>
            <Row>
                <AboutMe></AboutMe>
            </Row>

            <Row className="bg-light my-5 rounded">
                <h1>Projects</h1>
                <hr />
                <ShowProjects></ShowProjects>
            </Row>
            <Row className="bg-light my-5 rounded">
                <h1>Contact Me</h1>
                <hr />
                <Contact></Contact>
            </Row>
        </Container>
    );
};

export default Home;