import React from 'react';
import { Viewer, Worker } from '@react-pdf-viewer/core';

// Import the default layout plugin and its styles
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

// Import the drop plugin and its styles
import { dropPlugin } from '@react-pdf-viewer/drop';
import '@react-pdf-viewer/drop/lib/styles/index.css';

// Import the core styles (if not already imported in your project)
import '@react-pdf-viewer/core/lib/styles/index.css';

function CVViewer({ file }) {
    // Create instances of the plugins
    const defaultLayoutPluginInstance = defaultLayoutPlugin();
    const dropPluginInstance = dropPlugin();

    return (
        <div
            style={{
                display: 'flex',
                height: '50rem',
                margin: '5rem auto',
                width: '64rem',
            }}
        >
            {/* Use the Worker with the correct version */}
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
                <Viewer
                    fileUrl={file}
                    plugins={[defaultLayoutPluginInstance, dropPluginInstance]}
                />
            </Worker>
        </div>
    );
}

export default CVViewer;
