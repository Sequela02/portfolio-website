import React, { useState } from 'react';
import Header from '../components/Header';
import '../assets/styles/styles.css';
import Sidebar from "../components/Sidebar";

function ProjectsPage() {
    // Sample state to manage the list of projects. Replace this with actual data.
    const [projects, setProjects] = useState([
        // Sample structure for projects
        { id: 1, title: "Web Portfolio", description: "Portfolio web.", technologies: ["react", "java","spring boot",],githubURL: "https://github.com/Sequela02/portfolio-website" },
        { id: 2, title: "Enterprise Management System", description: "sample.", technologies: ["javafx","mysql", "java"],githubURL: "https://github.com/Sequela02/FralarmInventory"}
        // ... Add other projects
    ]);

    return (
        <div className="background-gif">
            <div className="container mx-auto px-4">
                <Header className="header" />

                <main className="flex flex-col md:flex-row justify-center items-start md:items-center h-auto md:h-screen">

                    <div className="main-content p-4 my-2 md:my-0 md:w-3/5 w-full rounded-xl text-gray-100 md:mr-4">
                        {/* Filters, Search, etc. can go here */}
                        <div className="project-filters">
                            {/* Example filters: */}
                            {/* <button onClick={() => setFilter('Java')}>Java</button> */}
                        </div>

                        {/* Project Details Directly Here */}
                        <div className="project-list flex flex-wrap">
                            {projects.map(project => (
                                <div
                                    key={project.id}
                                    className="max-w-sm rounded overflow-hidden shadow-lg p-4 m-4 transform transition-transform duration-200 hover:scale-105 bg-purple-800" // Changes here
                                    onClick={() => window.open(project.githubURL, "_blank")}
                                >
                                    <h2 className="font-bold text-xl mb-2 text-white">{project.title}</h2>
                                    <p className="text-gray-300 text-base">{project.description}</p>
                                    <div className="px-6 py-4">
                                        {project.technologies.map(tech => (
                                            <span key={tech} className="inline-block bg-pink-500 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">{tech}</span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <Sidebar />



                </main>
            </div>
        </div>
    );
}

export default ProjectsPage;
