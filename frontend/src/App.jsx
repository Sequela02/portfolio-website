// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';

/**
 * App Component
 *
 * This component sets up the application's routing using react-router.
 * Currently, it supports two routes: the HomePage and the ProjectsPage.
 */
function App() {
    return (
        <Router>
            <Routes>
                {/* Home Route */}
                <Route path="/" element={<HomePage />} />

                {/* Projects Route */}
                <Route path="/projects" element={<ProjectsPage />} />
            </Routes>
        </Router>
    );
}

export default App;
