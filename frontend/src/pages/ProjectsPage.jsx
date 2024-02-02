/**
 * ProjectsPage.jsx
 *
 * This is the main entry point of the Projects page. It displays a list of projects with dynamic backgrounds
 * and detailed project information, including links to external sites. It also includes a search bar and a filter dropdown
 * for users to search and filter projects based on their needs.
 *
 * @module ProjectsPage
 */

import React, {useEffect, useMemo, useState} from 'react';
import '../assets/styles/projectsPage.css';
import thumbnail1 from '../assets/images/avenidaSS.png';
import thumbnail2 from '../assets/images/portfoliopc.png';
import thumbnail8 from '../assets/images/fralarmss.png';


/**
 * FilterDropdown component is used to filter projects based on the selected technology.
 *
 * @param {Object} props - The properties passed to the component.
 * @param {Array} props.technologies - The list of all unique technologies used across all projects.
 * @param {string} props.selectedTech - The currently selected technology filter.
 * @param {Function} props.onSelect - The function to call when a technology is selected.
 * @returns {ReactElement} The rendered FilterDropdown component.
 */
const FilterDropdown = ({ technologies, selectedTech, onSelect }) => {
    return (
        <select
            className="w-full p-4 rounded-md"
            value={selectedTech}
            onChange={(e) => onSelect(e.target.value)}
        >
            <option value="All">All Technologies</option>
            {technologies.map((tech, index) => (
                <option key={index} value={tech}>{tech}</option>
            ))}
        </select>
    );
};

/**
 * ProjectsPage component displays a list of projects with dynamic backgrounds
 * and detailed project information, including links to external sites. It also includes a search bar and a filter dropdown
 * for users to search and filter projects based on their needs.
 *
 * @returns {ReactElement} The rendered ProjectsPage component.
 */
function ProjectsPage() {
    const [projects] = useState([
        {
            id: 1,
            title: "My Web Portfolio",
            description: "Portfolio website showcasing my work.",
            technologies: ["React", "Java", "Spring Boot", "Netlify"],
            githubURL: "https://github.com/Sequela02/portfolio-website",
            thumbnail: thumbnail2,



        },
        {
            id: 2,
            title: "Enterprise Management System",
            description: "Management system for a security company.",
            technologies: ["React", "MySQL", "Java"],
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

    ]);

    // State to hold the current search term
    const [searchTerm, setSearchTerm] = useState('');

    // State to store the filtered list of projects
    const [filteredProjects, setFilteredProjects] = useState(projects);

    // Compute footer.css list of all unique technologies used across all projects
    const allTechnologies = useMemo(() =>
        [...new Set(projects.flatMap(project => project.technologies))], [projects]);

    // State for the currently selected technology filter
    const [selectedTech, setSelectedTech] = useState('All');

    // Compute footer.css list of all project titles for the autocomplete feature
    const projectNames = useMemo(() => projects.map(project => project.title), [projects]);

    // useEffect to filter projects based on the selected technology and search term
    useEffect(() => {
        const filtered = projects.filter(project =>
            (selectedTech === 'All' || project.technologies.includes(selectedTech)) &&
            (project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                project.description.toLowerCase().includes(searchTerm.toLowerCase()))
        );
        setFilteredProjects(filtered);
    }, [searchTerm, projects, selectedTech]);

    // State for the autocomplete suggestions
    const [autocompleteOptions, setAutocompleteOptions] = useState([]);
    const handleAutocompleteSelect = (name) => {
        setAutocompleteOptions([]); // Clear autocomplete options
        setSearchTerm(name); // Update search term with selected name

    };
    // useEffect to update autocomplete suggestions based on the search term
    useEffect(() => {
        // Check if the search term exactly matches any project name
        const isExactMatch = projectNames.some(name => name.toLowerCase() === searchTerm.toLowerCase());

        // Only set autocomplete options if there is no exact match
        if (searchTerm && !isExactMatch) {
            const filteredOptions = projectNames.filter(name =>
                name.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setAutocompleteOptions(filteredOptions);
        } else {
            setAutocompleteOptions([]);
        }
    }, [searchTerm, projectNames]);

    /**
     * Creates footer.css link button if footer.css URL is provided.
     * @param {string} url - The URL to be opened.
     * @param {string} text - The text to display on the button.
     * @returns A button element or null if no URL is provided.
     */
    const renderLinkButton = (url, text) => {
        if (!url) return null;
        return (
            <button
                className="px-4 py-2 cyber-button"
                onClick={() => window.open(url, "_blank")}
                aria-label={`Open ${text}`}
                rel="noopener noreferrer"
            >
                {text}
            </button>
        );
    };



    return (
        <main className="min-h-screen  flex flex-col justify-between">


            <section className="text-center py-10 md:py-20 lg:py-32 relative">
                <div className="hero-content max-w-2xl mx-auto">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 neon-green-text">
                        Project Showcase
                    </h1>
                    <p className="text-lg sm:text-xl neon-blue-text">
                        Explore a curated collection of my professional work, highlighting my expertise and dedication to innovation.
                    </p>
                </div>
            </section>


            <div className="search-bar relative px-4 md:px-8 lg:px-14 my-10 flex flex-col md:flex-row items-center">
                {/* Search Input */}
                <div className="flex-grow mr-2 mb-4 md:mb-0">
                    <input
                        type="text"
                        placeholder="Search projects..."
                        className="search-input w-full p-4 rounded-md"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />

                    {/* Autocomplete Dropdown */}
                    {autocompleteOptions.length > 0 && (
                        <div className="autocomplete-dropdown">
                            {autocompleteOptions.map((name, index) => (
                                <div
                                    key={index}
                                    className="autocomplete-option"
                                    onClick={() => handleAutocompleteSelect(name)}>
                                    {name}
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Technology Filter Dropdown */}
                <div className="flex-grow">
                    <FilterDropdown
                        technologies={allTechnologies}
                        selectedTech={selectedTech}
                        onSelect={(tech) => setSelectedTech(tech)}
                    />
                </div>
            </div>
            <div className="flex flex-wrap mx-auto px-4 md:px-8 lg:px-14 my-10">
                {filteredProjects.length === 0 ? (
                        <div className="cyberpunk-neon-text text-center my-10">
                            No projects found. Try different search terms or filters.
                        </div>
                    ) :
                    filteredProjects.map((project, index) => (
                        <div className="project-container flex flex-col lg:flex-row lg:items-center mb-6 lg:mb-12 xl:mb-16 overflow-hidden">
                            <div className="w-full lg:w-1/2 mb-4 lg:mb-0 lg:mr-8">
                                <img
                                    src={project.thumbnail}
                                    alt={`${project.title} Thumbnail`}
                                    className="w-full h-auto object-cover object-center glitch-img"

                                />
                            </div>
                            <div className="w-full lg:w-1/2">
                                <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl mb-3 font-bold neon-green-text">{project.title}</h2>
                                <p className="text-sm md:text-base lg:text-lg xl:text-xl cyberpunk-neon-text">{project.description}</p>
                                <div className="tech-tags mb-6 flex flex-wrap">
                                    {project.technologies.map(tech => (
                                        <span key={tech} className="tech-tag text-sm md:text-base mr-2 mb-2 px-2 py-1">{tech}</span>
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



