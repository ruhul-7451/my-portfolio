import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import AboutMe from '../AboutMe/AboutMe';
import Contact from '../Contact/Contact';
import ShowProjects from '../Projects/ShowProjects/ShowProjects';


const Home = () => {
    const handleResumeView = () => {
        window.open('https://drive.google.com/file/d/1Uanh-4Z6TQ51vNTxNFImk4-Y6zVmiWmG/view?usp=sharing', "_blank")
    }
    return (
        <div style={{
            backgroundColor: '#EDF6FF'
        }}>
            <Row className="align-items-center m-0 mx-auto">
                <Col className="p-5" xs={12} md={6}>
                    <h1>Hi, I am Md. Ruhul Amin Khan</h1>
                    <h4 className="text-secondary">Junior Software Engineer</h4>
                    <article>
                        An enthusiastic and hardworking web developer seeking a challenging position to learn, contribute and grow with the organization. I am a MERN Stack Web developer. I have skills on JavaScript, React, HTML, CSS, Node js, Express js, MongoDB, Firebase, Heroku etc. You can see my recent projects on project section.
                    </article>
                    <hr />
                    <Button onClick={handleResumeView}>See My Resume</Button>
                </Col>
                <Col className="text-center">
                    <img className="img-fluid" src="https://i.ibb.co/KhtdyKg/bgImage.png" alt="md ruhul amin khan" />
                </Col>
            </Row>

            <Row className="p-5 m-0">
                <h1>About Me</h1>
                <hr />
                <AboutMe></AboutMe>
            </Row>

            <Row className="p-5 m-0">
                <h1>Projects</h1>
                <hr />
                <ShowProjects></ShowProjects>
            </Row>

            <Row className="p-5 m-0">
                <h1>Contact with Me</h1>
                <hr />
                <Contact></Contact>
            </Row>
        </div>
    );
};

export default Home;