import React from 'react';
import { Link } from 'react-router-dom';

/**
 * NotFoundPage component displays a user-friendly message and a link to the home page
 * when users navigate to a URL that does not correspond to any routes in the application.
 *
 * @returns {JSX.Element} A styled 404 Not Found page with navigation option.
 */
const NotFoundPage = () => {
    return (
        <div className="gradient-bg flex flex-col items-center justify-center h-screen text-white">
            <h1 className="text-6xl font-bold">404</h1>
            <p className="mt-4 text-xl">
                Oops! The page you are looking for does not exist.
            </p>
            <Link to="/" className="mt-8 cyber-button hover:bg-green-600">
                Go Home
            </Link>
        </div>
    );
};

export default NotFoundPage;
