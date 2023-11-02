import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';
import { pdfjs } from 'react-pdf';

// Setting up the pdf worker (choose one of the setup methods described in previous messages)
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function CVViewer({ file }) {
    const [ setNumPages] = useState(null);
    const [pageNumber] = useState(1);

    const onDocumentLoadSuccess = ({ numPages }) => {
        setNumPages(numPages);
    };

    return (
        <div>
            <Document
                file={file}
                onLoadSuccess={onDocumentLoadSuccess}
                onLoadError={(error) => console.error("PDF Load Error:", error.message)}
            >
                <Page
                    pageNumber={pageNumber}
                    onRenderError={(error) => console.error("PDF Render Error:", error.message)}
                />
            </Document>

        </div>
    );
}

export default CVViewer;
