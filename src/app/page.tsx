import PortfolioHeader from "@/app/components/portfolioHeader";  // Ensure correct path
import React from "react";

export default function Home() {
    return (
        <div id='header' className="grid grid-c">
            {/* Render PortfolioHeader only */}
            <PortfolioHeader />
        </div>
    );
}
