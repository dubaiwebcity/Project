"use client";

import React from "react";

const PaitentRights: React.FC = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center", // horizontally center
        alignItems: "center",    // vertically center
        width: "100%",
        height: "100vh",
        margin: "50px 0",
        padding: 0,
      }}
    >
      <iframe
        className="pdf-iframe"          // className add kar diya
        src="/pdf/bnoon-patients-rights.pdf#toolbar=0&navpanes=0&scrollbar=0"
        width="50%"                     // default desktop width
        height="100%"                    // iframe height
        style={{ border: "none" }}
      ></iframe>

      <style jsx>{`
        @media (max-width: 768px) {
          .pdf-iframe {
            width: 100%;      /* Mobile pe full width */
          }
        }
      `}</style>
    </div>
  );
};

export default PaitentRights;
