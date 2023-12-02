import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
// Import all logos from the assets directory
import javaLogo from '../assets/icons/icons8-java.svg';
import reactLogo from '../assets/icons/icons8-react.svg';
import springLogo from '../assets/icons/icons8-spring-boot.svg';
import mysqlLogo from '../assets/icons/icons8-mysql.svg';
import nextLogo from '../assets/icons/icons8-nextjs.svg';
import htmlLogo from '../assets/icons/icons8-html-5.svg';
import nodeLogo from '../assets/icons/icons8-nodejs.svg';
import javascriptLogo from '../assets/icons/icons8-javascript.svg';
import cSharpLogo from '../assets/icons/icons8-c-sharp-logo.svg';
import profilePic from '../assets/icons/profilepic.jpg';
import { Helmet } from 'react-helmet';
import Typed from 'typed.js';
import '../assets/styles/CyberpunkTheme.css';
/**
 * HomePage component serves as the landing page of the application, showcasing a digital rain canvas effect,
 * dynamic typing text, and a grid of skill icons representing various technologies.
 */
function HomePage() {
    const canvasRef = useRef(null);

    // Effect hook for initializing animations and effects
    useEffect(() => {
        // Initialize animation on scroll library
        AOS.init({ duration: 1200, once: true });

        // Digital Rain canvas effect setup
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const fontSize = 16;
        const columns = canvas.width / fontSize;
        const drops = Array.from({ length: Math.round(columns) }, () => 0);
        const characters = Array.from({ length: 300 }, () => String.fromCharCode(Math.random() * 128));

        // Function to render digital rain effect
        const draw = () => {
            ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.font = `${fontSize}px monospace`;

            drops.forEach((y, i) => {
                const text = characters[Math.floor(Math.random() * characters.length)];
                ctx.fillStyle = (i % 3 === 0) ? '#0f0' : (i % 3 === 1) ? '#ec0000' : '#ffffff';
                ctx.fillText(text, i * fontSize, y * fontSize);
                drops[i] = (y * fontSize > canvas.height && Math.random() > 0.975) ? 0 : y + 1;
            });

            requestAnimationFrame(draw);
        };

        let animationFrameId = requestAnimationFrame(draw);

        // Typed.js for dynamic text effect setup
        const typed = new Typed('.typed-text', {
            strings: ['Navigating through the digital realm...', 'Creating worlds within worlds...', 'Engineering the future, byte by byte...'],
            typeSpeed: 50,
            backSpeed: 25,
            backDelay: 1500,
            startDelay: 500,
            loop: true,
            showCursor: true,
            cursorChar: '|',
        });

        // Cleanup function to clear the effects when the component unmounts
        return () => {
            cancelAnimationFrame(animationFrameId);
            typed.destroy();
        };
    }, []);

    return (
        <>
            <Helmet>
                <title>Canitas - Home</title>
                <meta name="description" content="Canitas - A passionate developer creating innovative tech solutions." />
            </Helmet>
            <main className="min-h-screen bg-black text-white">
                <HeroSection canvasRef={canvasRef} />

                <SkillsSection />
                <AboutMe />
                <ContactSection />

            </main>
        </>
    );
}


// Hero section with canvas and dynamic text
const HeroSection = ({ canvasRef }) => (
    <section className="hero-section text-center p-4 md:p-20 relative">
        <canvas
            ref={canvasRef}
            className="absolute top-0 left-0 w-full h-full z-0"
        ></canvas>
        <div className="relative z-10">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 cyberpunk-neon">Welcome to my Portfolio</h1>
            <p className="text-3xl md:text-4xl mb-6 cyberpunk-neon">
                Canitas
            </p>
            <div className="typed-text-container text-lg md:text-xl mb-6">
                <p className="typed-text"></p>
            </div>
            <Link to="/projects" className="cyber-button py-2 px-4 rounded">
                Discover My Projects
            </Link>
        </div>
    </section>
);

const AboutMe = () => (
    <section className="about-me-section bg-gradient-to-b from-black to-green-900 py-12 px-4">
        <div className="container mx-auto">
            <h2 className="text-4xl font-bold mb-8 cyberpunk-neon">About Me</h2>
            <div className="about-me-content flex flex-col md:flex-row items-center justify-between">
                <div className="about-me-text max-w-md mx-auto md:mx-0 md:max-w-lg">
                    <p>Hello! I'm Canitas, a 21-year-old avid gamer and cinephile with a zest for Chinese cuisine and a passion for boxing. I have a deep love for Java and backend development, and I'm currently immersed in my studies to further hone these skills.</p>
                    <p>In my leisure time, you'll often find me exploring the latest video games or delving into the world of cinema. My appetite for learning is as insatiable as my love for gaming and film, and I'm always on the lookout for new challenges that push my abilities to the limit.</p>
                    <p>If you're interested in a collaborative project or just want to chat about the latest in gaming or film, feel free to reach out!</p>
                </div>
                <div className="about-me-photo mt-8 md:mt-0">
                    <img src={profilePic} alt="Canitas" />
                </div>
            </div>
        </div>
    </section>
);


const skills = [
    { src: cSharpLogo, alt: 'C#' },
    { src: javaLogo, alt: 'Java' },
    { src: reactLogo, alt: 'React' },
    { src: springLogo, alt: 'Spring' },
    { src: mysqlLogo, alt: 'MySQL' },
    { src: nextLogo, alt: 'Next.js' },
    { src: htmlLogo, alt: 'HTML' },
    { src: nodeLogo, alt: 'Node.js' },
    { src: javascriptLogo, alt: 'JavaScript' },
    // ... add other skills here
];

// Skills section showcasing various technology logos
const SkillsSection = () => (
    <section className="skills-section bg-gray-900 py-12 px-4">
        <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center cyberpunk-neon mb-8">Technical Arsenal</h2>
            <div className="skills-icons">
                {skills.map((skill, index) => (
                    <div key={index} className="skill-icon-container">
                        <img src={skill.src} alt={skill.alt} className="skill-icon" />
                    </div>
                ))}
            </div>
        </div>
    </section>
);

// Contact section for user engagement
const ContactSection = () => (
    <section className="contact-section bg-gradient-to-b from-green-900 to-black py-10 px-4">
        <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-4xl font-bold cyberpunk-neon mb-8">Get in Touch</h2>
            <p className="mb-6">
                If you are interested in professional collaboration or have any inquiries, please feel free to reach out. I am available for discussions and potential opportunities.
            </p>
            <Link to="/hire-me" className="cyber-button text-white font-bold py-2 px-4 rounded">
                Contact Me
            </Link>
        </div>
    </section>
);




export default HomePage;