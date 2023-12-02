import React, { useState} from 'react';
import '../assets/styles/projectsPage.css';
import thumbnail1 from '../assets/images/avenidaSS.png';
import thumbnail2 from '../assets/images/portfoliopc.png';
import thumbnail8 from '../assets/images/fralarmss.png';

/**
 * ProjectsPage component displays a list of projects with dynamic backgrounds
 * and detailed project information, including links to external sites.
 */
function ProjectsPage() {
    const [projects] = useState([
        {
            id: 1,
            title: "My Web Portfolio",
            description: "Portfolio website showcasing my work.",
            technologies: ["React", "Java", "Spring Boot", "Heroku"],
            githubURL: "https://github.com/Sequela02/portfolio-website",
            thumbnail: thumbnail2,



        },
        {
            id: 2,
            title: "Enterprise Management System",
            description: "Management system for a security company.",
            technologies: ["JavaFX", "MySQL", "Java"],
            githubURL: "https://github.com/Sequela02/FralarmInventory",
            thumbnail: thumbnail8,


        },
        {
            id: 3,
            title: "Avenida Azul Website",
            description: "Website for an art workshop.",
            technologies: ["Spring Boot", "React", "TailwindCSS", "Netlify"],
            githubURL: "https://github.com/Sequela02/avenida-azul-website",
            link: "https://avenidaazul.com.mx",
            thumbnail: thumbnail1,


        }
        // ... add more projects as needed
    ]);

    // ...

    /**
     * Creates a link button if a URL is provided.
     * @param {string} url - The URL to be opened.
     * @param {string} text - The text to display on the button.
     * @returns A button element or null if no URL is provided.
     */
    const renderLinkButton = (url, text) => {
        if (!url) return null;
        return (
            <button
                className="px-4 py-2 bg-purple-500 text-green-300 rounded hover:bg-purple-600 hover:text-green-400 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
                onClick={() => window.open(url, "_blank")}
                aria-label={`Open ${text}`}
                rel="noopener noreferrer"
            >
                {text}
            </button>
        );
    };



    return (
        <main className="min-h-screen bg-dark flex flex-col justify-between">
            <section className="text-center py-20 px-4 lg:px-8 xl:px-16 bg-gray-900">
                <h1 className="text-4xl md:text-5xl lg:text-6xl mb-4 font-bold text-neon-pink">Welcome to My World</h1>
                <p className="text-xl lg:text-2xl mb-8 text-neon-green">Dive into the portfolio that's been crafted with the spirit of adventure and innovation.</p>
                {/* Additional content can be placed here if needed */}
            </section>

            <div className="container mx-auto px-4 md:px-8 lg:px-12">
                {projects.map((project, index) => (
                    <div key={project.id} className="project-container flex flex-col lg:flex-row lg:items-center mb-6 lg:mb-12 xl:mb-16">
                        <div className="w-full lg:w-1/2 mb-4 lg:mb-0 lg:mr-8">
                            <img
                                src={project.thumbnail}
                                alt={`${project.title} Thumbnail`}
                                className="w-full h-auto object-cover object-center glitch-img"
                                loading="lazy"
                            />
                        </div>
                        <div className="w-full lg:w-1/2">
                            <h2 className="text-2xl lg:text-3xl xl:text-4xl mb-3 font-bold text-neon-pink">{project.title}</h2>
                            <p className="text-base lg:text-lg xl:text-xl text-neon-green">{project.description}</p>
                            <div className="tech-tags mb-6 flex flex-wrap">
                                {project.technologies.map(tech => (
                                    <span key={tech} className="tech-tag mr-2 mb-2 px-2 py-1">{tech}</span>
                                ))}
                            </div>
                            <div className="flex flex-col lg:flex-row lg:space-x-4 space-y-4 lg:space-y-0">
                                {renderLinkButton(project.githubURL, 'GitHub')}
                                {project.link ? renderLinkButton(project.link, 'Website') : null}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </main>


    );
}

    export default ProjectsPage;



