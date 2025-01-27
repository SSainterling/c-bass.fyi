"use client";

import { useEffect } from "react";

const ResumePage: React.FC = () => {
    useEffect(() => {
        // Automatically trigger the resume download when the page loads
        const resumePath = "/Sainterling_Resume.pdf";

        const link = document.createElement("a");
        link.href = resumePath;
        link.download = "Sainterling_Resume.pdf"; // The downloaded file name
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }, []);

    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h1>Downloading Resume...</h1>
            <p>If the download doesn&#39;t start automatically, <a href="/Sainterling_Resume.pdf" download>click here</a>.</p>
        </div>
    );
};

export default ResumePage;