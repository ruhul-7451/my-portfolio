import React, { useEffect, useState } from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router';
import { BsGithub, BsArrowReturnLeft } from "react-icons/bs";

const ShowDetails = () => {
    const navigate = useNavigate()
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        fetch("/database.json")
            .then(res => res.json())
            .then(data => setProjects(data))
    }, [])

    const id = useParams()
    const filterProjects = projects.find(project => project.id === parseInt(id.id))
    console.log(filterProjects);

    const handleLiveSite = () => {
        window.open(filterProjects.liveSite)
    }
    const handleGitClientSite = () => {
        window.open(filterProjects.GitClient)
    }
    const handleGitServerSite = () => {
        window.open(filterProjects.GitServer)
    }
    const handleReturn = () => {
        navigate('/projects')
    }
    return (
        <div>
            <Col xs={12} md={6} className="mx-auto p-5">
                <Card>
                    <Card.Img variant="top" src={filterProjects?.cardImg} />
                    <Card.Body>
                        <Card.Title>{filterProjects?.title}</Card.Title>
                        <Card.Text>{filterProjects?.descriptionFull}</Card.Text>
                    </Card.Body>

                    <Card.Body>
                        <Button className="m-2" variant="outline-primary" onClick={handleLiveSite}>Live Demo</Button>
                        <Button className="m-2" variant="outline-dark" onClick={handleGitClientSite}><BsGithub /> Client</Button>
                        <Button className="m-2" variant="outline-dark" onClick={handleGitServerSite}><BsGithub /> Server</Button>
                        <Button className="m-2" variant="outline-danger" onClick={handleReturn}><BsArrowReturnLeft /> Back</Button>
                    </Card.Body>

                </Card>
            </Col>
        </div >
    );
};

export default ShowDetails;