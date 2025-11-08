"use client";

import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";

// ✅ Load worker locally instead of CDN (works on Azure)
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url
).toString();

const PDFViewer: React.FC = () => {
  const [numPages, setNumPages] = useState<number | null>(null);

  return (
    <div style={{ width: "100%", textAlign: "center" }}>
      <Document
        file="https://bnoon-b4ffdpgpbpaehwfa.canadacentral-01.azurewebsites.net/images/pdf/bnoon-patients-rights.pdf"
        onLoadSuccess={({ numPages }) => setNumPages(numPages)}
        onLoadError={(error) => console.error("❌ PDF load error:", error)}
        loading={<p>Loading PDF...</p>}
      >
        {numPages &&
          Array.from({ length: numPages }, (_, index) => (
            <div
              key={`page_${index + 1}`}
              style={{
                marginBottom: "20px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Page
                pageNumber={index + 1}
                renderAnnotationLayer={false}
                renderTextLayer={false}
                width={900}
              />
            </div>
          ))}
      </Document>
    </div>
  );
};

export default PDFViewer;
