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
            title: "My Web Portfolio",
            description: "Portfolio web.",
            technologies: ["react", "java", "spring boot","heroku"],
            githubURL: "https://github.com/Sequela02/portfolio-website"
        },
        {
            id: 2,
            title: "Enterprise Management System",
            description: "Management System for a security company to manage customers, inventory and other things.",
            technologies: ["javafx", "mysql", "java"],
            githubURL: "https://github.com/Sequela02/FralarmInventory"
        }
        ,
        {
            id: 3,
            title: "Avenida Azul Website",
            description: "Website for an art workshop.",
            technologies: ["springboot", "react", "java","tailwindcss","netlify"],
            githubURL: "https://github.com/Sequela02/avenida-azul-website",
            link:"https://avenidaazul.com.mx"
        }









    ]);
    // Function to render a button only if a link is provided
    const renderLinkButton = (url, text) => {
        if (!url) return null;
        return (
            <button
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-200"
                onClick={() => window.open(url, "_blank")}
            >
                {text}
            </button>
        );
    };


    return (
        <div className="background-gif">
            <div className="container mx-auto px-4">

                {/* Header */}
                <Header className="header" />

                {/* Main Content */}
                <main className="flex flex-col md:flex-row justify-start items-start h-auto pt-10 md:pt-24">

                    <div className="project-main-content mb-6 pt-10 w-full md:max-w-11/20 flex-grow md:mr-8 max-h-[1000px] overflow-y-auto p-4 rounded-xl text-gray-100 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                        {/* Search bar and filters */}
                        <div className="top-section gap-4 mb-4">
                            <input type="text" placeholder="Search" className="search-input flex-grow rounded px-3 py-2 border border-gray-300" />
                            <button className="filter-button px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-200">Filters</button>
                        </div>

                        {/* Projects Listing */}
                        <div className="project-list grid gap-6 grid-cols-1 md:grid-cols-2">
                            {projects.map(project => (
                                <div
                                    key={project.id}
                                    className="project-item bg-gray-800 p-6 rounded-lg hover:shadow-lg transition-shadow duration-200"
                                >
                                    <h2 className="font-bold text-2xl mb-4 text-white">{project.title}</h2>
                                    <p className="text-gray-300 text-base mb-4">{project.description}</p>
                                    <div className="px-6 py-4 mb-4">
                                        {project.technologies.map(tech => (
                                            <span key={tech} className="inline-block bg-pink-500 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">{tech}</span>
                                        ))}
                                    </div>
                                    {/* Buttons */}
                                    <div className="flex justify-start space-x-4">
                                        {renderLinkButton(project.githubURL, 'GitHub', 'flex-grow-0')}
                                        {renderLinkButton(project.link, 'Website', 'flex-grow-0')}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Sidebar */}
                    <Sidebar className="sidebar" />
                </main>
            </div>
        </div>
    );
}

export default ProjectsPage;
