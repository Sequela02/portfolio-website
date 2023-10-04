// src/pages/ProjectsPage.jsx
import React, { useEffect, useState } from 'react';

function ProjectsPage() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/api/projects/example')
            .then(response => response.json())
            .then(data => {
                console.log(data);  // Agrega esta línea para imprimir los datos en la consola
                setProjects(data);
            })
            .catch(error => console.error('Error fetching projects:', error));
    }, []);

    return (
        <div>
            <h1>Proyectos</h1>
            <ul>
                {projects.map(project => (
                    <li key={project.id}>{project.title}</li>
                ))}
            </ul>
        </div>
    );
}

export default ProjectsPage;
