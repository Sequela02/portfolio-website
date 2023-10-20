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
        ,
        {
            id: 3,
            title: "Web Avenida Azul",
            description: "sample.",
            technologies: ["react", "mysql", "java","springboot"],
            githubURL: "https://github.com/Sequela02/FralarmInventory"
        },

        {
            id: 4,
            title: "Minecraft mod",
            description: "sample.",
            technologies: ["java"],
            githubURL: "https://github.com/Sequela02/FralarmInventory"
        },{
            id: 4,
            title: "Minecraft mod",
            description: "sample.",
            technologies: ["java"],
            githubURL: "https://github.com/Sequela02/FralarmInventory"
        },{
            id: 4,
            title: "Minecraft mod",
            description: "sample.",
            technologies: ["java"],
            githubURL: "https://github.com/Sequela02/FralarmInventory"
        }










    ]);

    return (
        <div className="background-gif">
            <div className="container mx-auto px-4">

                {/* Header */}
                <Header className="header" />

                {/* Main Content */}
                <main className="flex flex-col md:flex-row justify-start items-start h-auto pt-10 md:pt-24">

                    <div className="project-main-content mb-6 pt-10  w-full md:max-w-11/20 flex-grow md:mr-8 max-h-[1000px] overflow-y-auto p-4 rounded-xl text-gray-100 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                        {/* Projects Listing */}

                        {/* Search bar and filters */}
                        <div className="top-section  gap-4 mb-4">
                            <input type="text" placeholder="Search" className="search-input flex-grow rounded px-3 py-2 border border-gray-300"/>
                            <button className="filter-button px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-200">Filters</button>
                        </div>

                        {/* Projects Listing */}
                        <div className="project-list grid gap-4 grid-cols-1 md:grid-cols-2">
                            {projects.map(project => (
                                <div
                                    key={project.id}
                                    className="project-item bg-gray-800 p-4 rounded-lg hover:shadow-lg transition-shadow duration-200 cursor-pointer"
                                    onClick={() => window.open(project.githubURL, "_blank")}
                                >
                                    <h2 className="font-bold text-xl mb-2 text-white">{project.title}</h2>
                                    <p className="text-gray-300 text-base">{project.description}</p>
                                    <div className="px-6 py-4 mt-2">
                                        {project.technologies.map(tech => (
                                            <span key={tech} className="inline-block bg-pink-500 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">{tech}</span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>




                    {/* Sidebar */}
                    <Sidebar className="sidebar" /> {/* Made sure it takes the full height */}
                </main>
            </div>
        </div>
    );
}

export default ProjectsPage;
