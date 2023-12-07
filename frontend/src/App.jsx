// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header'; // Import your Header component
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import HireMePage from './pages/HireMePage';
import Footer from './components/Footer'; // Import your Footer component
function App() {
    return (
        <Router>
            <Header />
            <div className="flex flex-col min-h-screen">
                <main className="flex-grow">
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/portfolio" element={<ProjectsPage />} />
                        <Route path="/hire-me" element={<HireMePage />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>

    );
}

export default App;
