import logo from './logo.svg';
import './App.css';
// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  // Importa Routes en lugar de Switch
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';


function App() {
    return (
        <Router>
            <Routes>  {/* Usa Routes en lugar de Switch */}
                <Route path="/" element={<HomePage />} />  {/* Usa la prop element */}
                <Route path="/projects" element={<ProjectsPage />} />  {/* Usa la prop element */}

            </Routes>
        </Router>
    );
}

export default App;
