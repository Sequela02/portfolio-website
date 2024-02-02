import React from 'react';
import * as Sentry from '@sentry/react';

/**
 * ErrorBoundary Component.
 *
 * This is a higher order component that catches JavaScript errors anywhere in their child
 * component tree, logs those errors, and displays a fallback UI.
 *
 * @component
 */
class ErrorBoundary extends React.Component {
    /**
     * Constructor for the ErrorBoundary component.
     *
     * @param {object} props - The props that were defined by the caller of this component.
     */
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    /**
     * This lifecycle method is invoked after an error has been thrown by a descendant component.
     * It receives the error that was thrown as a parameter and should return a value to update state.
     *
     * @param {object} error - The error that was thrown.
     * @returns {object} The new state.
     */
    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    /**
     * This lifecycle method is invoked after an error has been thrown by a descendant component.
     * It receives two parameters:
     *
     * 1. error - The error that was thrown.
     * 2. info - An object with a componentStack key containing information about which component
     *    threw the error.
     *
     * @param {object} error - The error that was thrown.
     * @param {object} errorInfo - An object with information about the error.
     */
    componentDidCatch(error, errorInfo) {
        Sentry.captureException(error, { extra: errorInfo });
    }

    /**
     * Render function for the ErrorBoundary component.
     *
     * @returns {ReactNode} The React Node to render.
     */
    render() {
        if (this.state.hasError) {
            return <h1>Something went wrong.</h1>;
        }

        return this.props.children;
    }
}

export default ErrorBoundary;