// Imports
import React, { useState } from 'react';
import Header from '../components/Header';
import Sidebar from "../components/Sidebar";
import '../assets/styles/styles.css';

/**
 * ProjectsPage Component
 * Displays a list of user projects with relevant details.
 *
 * Components Structure:
 * - Background Container
 *   - Main Container
 *     - Header (Navigation Bar)
 *     - Main Content (List of Projects)
 *     - Sidebar (Additional Details)
 */
function ProjectsPage() {
    // Manage the list of projects using state
    const [projects] = useState([
        {
            id: 1,
            title: "Web Portfolio",
            description: "Portfolio web.",
            technologies: ["react", "java", "spring boot"],
            githubURL: "https://github.com/Sequela02/portfolio-website"
        },
        {
            id: 2,
            title: "Enterprise Management System",
            description: "sample.",
            technologies: ["javafx", "mysql", "java"],
            githubURL: "https://github.com/Sequela02/FralarmInventory"
        }
    ]);

    return (
        <div className="background-gif">
            <div className="container mx-auto px-4">

                {/* Header */}
                <Header className="header" />

                {/* Main Content */}
                <main className="flex flex-col md:flex-row justify-center items-start md:items-center h-auto md:h-screen">

                    <div className="main-content p-4 my-2 md:my-0 md:w-3/5 w-full rounded-xl text-gray-100 md:mr-4">

                        {/* Projects Listing */}
                        <div className="project-list flex flex-wrap">
                            {projects.map(project => (
                                <div
                                    key={project.id}
                                    className="max-w-sm rounded overflow-hidden shadow-lg p-4 m-4 transform transition-transform duration-200 hover:scale-105 bg-purple-800"
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

                    {/* Sidebar */}
                    <Sidebar />
                </main>
            </div>
        </div>
    );
}

export default ProjectsPage;
