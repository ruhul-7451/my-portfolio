import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { SiFirebase, SiTailwindcss, SiBootstrap, SiBloglovin } from "react-icons/si";
import { DiReact, DiNodejs, DiMongodb, DiJsBadge, DiHtml5, DiCss3, DiHeroku, DiCode } from "react-icons/di";
import { FiGithub } from "react-icons/fi";

const AboutMe = () => {
    const handleReact = () => {
        window.open('https://reactjs.org/docs/create-a-new-react-app.html', '_blank')
    }
    const handleBootStrap = () => {
        window.open('https://getbootstrap.com/', '_blank')
    }
    const handleNode = () => {
        window.open('https://nodejs.org/en/', '_blank')
    }
    const handleMongodb = () => {
        window.open('https://www.mongodb.com/', '_blank')
    }
    const handleJs = () => {
        window.open('https://www.javascript.com/', '_blank')
    }
    const handleHtml = () => {
        window.open('https://www.w3schools.com/html/default.asp', '_blank')
    }
    const handleCss = () => {
        window.open('https://www.w3schools.com/css/default.asp', '_blank')
    }
    const handleHeroku = () => {
        window.open('https://dashboard.heroku.com/', '_blank')
    }
    const handleFirebase = () => {
        window.open('https://firebase.google.com/', '_blank')
    }
    const handleTailwind = () => {
        window.open('https://tailwindcss.com/', '_blank')
    }
    return (
        <div className="bg-light my-3 p-3">
            <Row className="justify-content-center align-items-center">
                <Col xs={4}><img src="https://i.ibb.co/7XG8mPT/Ruhul-PP.jpg" className="img-fluid" alt="" /></Col>
                <Col className="fs-5">
                    <p className="fw-bold">Hello, buddy...</p>
                    <p>This is <span className="fs-3">Ruhul</span>, I build things for the web. Currently, I am a React Developer apprentice. I am developing various projects and learning lots of new skills which you can see on my Projects section. I am building robust and flexible React projects those are performant and smooth</p>
                </Col>
            </Row>
            <Row className="mt-5"> <h3>I'm skilled at</h3></Row>
            <Row>
                <Row xs={1} md={2} lg={5} className="g-4 m-0">
                    <Col>
                        <Card className="border-0 shadow btn p-0" onClick={handleReact}>
                            <Card.Body className="d-flex align-items-center justify-content-center">
                                <Card.Title className="fs-1 fw-bold me-2"><DiReact /> </Card.Title>
                                <Card.Title className="fs-3 fw-bold" >React Js</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="border-0 shadow btn p-0" onClick={handleBootStrap}>
                            <Card.Body className="d-flex align-items-center justify-content-center">
                                <Card.Title className="fs-1 fw-bold me-2"><SiBootstrap /></Card.Title>
                                <Card.Title className="fs-3 fw-bold">Bootstrap</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="border-0 shadow btn p-0" onClick={handleNode}>
                            <Card.Body className="d-flex align-items-center justify-content-center">
                                <Card.Title className="fs-1 fw-bold me-2"><DiNodejs /></Card.Title>
                                <Card.Title className="fs-3 fw-bold">Node Js</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="border-0 shadow btn p-0" onClick={handleMongodb}>
                            <Card.Body className="d-flex align-items-center justify-content-center">
                                <Card.Title className="fs-1 fw-bold"><DiMongodb /></Card.Title>
                                <Card.Title className="fs-3 fw-bold">MongoDB</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="border-0 shadow btn p-0" onClick={handleJs}>
                            <Card.Body className="d-flex align-items-center justify-content-center">
                                <Card.Title className="fs-1 fw-bold me-2"><DiJsBadge /></Card.Title>
                                <Card.Title className="fs-3 fw-bold">JavaScript</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row xs={1} md={2} lg={5} className="g-4 m-0">
                    <Col>
                        <Card className="border-0 shadow btn p-0" onClick={handleHtml}>
                            <Card.Body className="d-flex align-items-center justify-content-center">
                                <Card.Title className="fs-1 fw-bold"><DiHtml5 /></Card.Title>
                                <Card.Title className="fs-3 fw-bold">HTML5</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="border-0 shadow btn p-0" onClick={handleCss}>
                            <Card.Body className="d-flex align-items-center justify-content-center">
                                <Card.Title className="fs-1 fw-bold"><DiCss3 /></Card.Title>
                                <Card.Title className="fs-3 fw-bold">CSS3</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="border-0 shadow btn p-0" onClick={handleHeroku}>
                            <Card.Body className="d-flex align-items-center justify-content-center">
                                <Card.Title className="fs-1 fw-bold"><DiHeroku /></Card.Title>
                                <Card.Title className="fs-3 fw-bold">Heroku</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="border-0 shadow btn p-0" onClick={handleFirebase}>
                            <Card.Body className="d-flex align-items-center justify-content-center">
                                <Card.Title className="fs-1 fw-bold"><SiFirebase /></Card.Title>
                                <Card.Title className="fs-3 fw-bold">Firebase</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="border-0 shadow btn p-0" onClick={handleTailwind}>
                            <Card.Body className="d-flex align-items-center justify-content-center">
                                <Card.Title className="fs-1 fw-bold me-2"><SiTailwindcss /></Card.Title>
                                <Card.Title className="fs-3 fw-bold">Tailwind</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

                <Row className="mt-5">
                    <h3>Some of my Dev Stats</h3>
                </Row>
                <Card className="border-0 shadow text-center p-0 my-3" onClick={handleTailwind}>
                    <Card.Body className="align-items-center justify-content-between">
                        <Row xs={1} md={2} lg={4}>
                            <Col>
                                <DiCode className="fs-1" />
                                <h1>11</h1>
                                <h5>Projects</h5>
                            </Col>
                            <Col>
                                <FiGithub className="fs-1" />
                                <h1>230</h1>
                                <h5>Commits</h5>
                            </Col>
                            <Col>
                                <SiBloglovin className="fs-1" />
                                <h1>0</h1>
                                <h5>Blogs Reach</h5>
                            </Col>
                            <Col>
                                <DiCode className="fs-1" />
                                <h1>0</h1>
                                <h5>SO Reputations</h5>
                            </Col>

                        </Row>
                    </Card.Body>
                </Card>
            </Row>
        </div >
    );
};

export default AboutMe;