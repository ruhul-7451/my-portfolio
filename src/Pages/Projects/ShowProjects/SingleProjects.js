import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';

const SingleProjects = ({ project }) => {
    const { title, cardImg, description } = project;
    return (
        <div>
            <Col>
                <Card>
                    <Card.Img variant="top" src={cardImg} />
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>{description}</Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Button variant="warning">See Details</Button>
                    </Card.Footer>
                </Card>
            </Col>
        </div>
    );
};

export default SingleProjects;