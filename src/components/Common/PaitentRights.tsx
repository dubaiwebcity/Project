"use client";

// import dynamic from "next/dynamic";
// const PDFViewer = dynamic(() => import("./PDFViewer"), {
//   ssr: false,
//   loading: () => <p style={{ textAlign: "center" }}>Loading PDF...</p>,
// });

const PatientsRightsPage: React.FC = () => {
  return (
    <div
      style={{
        backgroundColor: "#fff",
        padding: "120px 0",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "90%",
          maxWidth: "900px",
          boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
          borderRadius: "10px",
          padding: "20px",
        }}
      >
       {/* <PDFViewer /> */}

      </div>
    </div>
  );
};

export default PatientsRightsPage;
