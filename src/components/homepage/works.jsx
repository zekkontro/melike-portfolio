import React from "react";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<div className="works-container">
				<div className="works-title">Work Experience</div>
				<div className="works-list">
					<div className="work-item">
						<div className="work-title">
							Finance & AI Specialist
						</div>
						<div className="work-subtitle">Current Position</div>
						<div className="work-duration">2022 - Present</div>
						<div className="work-description">
							Working on ML and financial forecasting, focusing on
							DL, crisis-resilient networking, data-driven
							modeling in hydrogeology and realtime financial
							analysis.
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Works;
