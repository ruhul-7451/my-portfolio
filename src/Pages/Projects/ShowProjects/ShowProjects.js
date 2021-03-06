import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import SingleProjects from './SingleProjects';

const ShowProjects = () => {
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        fetch("/database.json")
            .then(res => res.json())
            .then(data => setProjects(data))
    }, [])
    console.log(projects);
    return (
        <Container className="py-5">
            <Row xs={1} md={2} lg={3} className="g-4">
                {
                    projects.map(project => <SingleProjects
                        key={project.id}
                        project={project} />)
                }
            </Row>
        </Container>
    );
};

export default ShowProjects;