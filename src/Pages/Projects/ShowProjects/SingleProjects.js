import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router';

const SingleProjects = ({ project }) => {
    const { id, title, cardImg, description, liveSite } = project;
    const navigate = useNavigate()
    const handleLiveDemo = () => {
        window.open(liveSite, "_blank")
    }


    const handleDetails = (Id) => {
        navigate(`/projects/${Id}`)
    }
    return (
        <div>
            <Col>
                <Card>
                    <Card.Img variant="top" src={cardImg} />
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>{description}</Card.Text>
                    </Card.Body>
                    <Card.Body className="d-flex justify-content-between align-items-center">
                        <Button variant="outline-primary" onClick={() => handleDetails(id)}>See Details</Button>
                        <Button variant="outline-dark" onClick={handleLiveDemo}>Live Demo</Button>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default SingleProjects;