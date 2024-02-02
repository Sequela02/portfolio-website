/**
 * App.jsx
 *
 * This is the main entry point of the application. It sets up the routing for the entire application
 * and includes the main layout components such as the Header and Footer. It also handles the lazy loading
 * of the different pages in the application.
 *
 * @module App
 */

import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ErrorBoundary from './components/ErrorBoundary';

// Lazy load the different pages of the application
const HomePage = lazy(() => import('./pages/HomePage'));
const ProjectsPage = lazy(() => import('./pages/ProjectsPage'));
const HireMePage = lazy(() => import('./pages/HireMePage'));
const NotFoundPage = lazy(() => import('./components/NotFoundPage')); // 404 page

/**
 * The main App component that sets up the routing and layout of the application.
 *
 * @returns {ReactElement} The rendered App component
 */
function App() {
    return (
        <ErrorBoundary>
            <Router>
                <Header />
                <div className="flex flex-col min-h-screen">
                    <main className="flex-grow">
                        {/* Use Suspense to handle the lazy loading of the different pages */}
                        <Suspense fallback={<div>Loading...</div>}>
                            <Routes>
                                <Route path="/" element={<HomePage />} />
                                <Route path="/portfolio" element={<ProjectsPage />} />
                                <Route path="/hire-me" element={<HireMePage />} />
                                <Route path="*" element={<NotFoundPage />} /> {/* Catch-all route for 404 page */}
                            </Routes>
                        </Suspense>
                    </main>
                </div>
                <Footer />
            </Router>
        </ErrorBoundary>
    );
}

export default App;