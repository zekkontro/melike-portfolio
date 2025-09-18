import React from "react";

import INFO from "../../data/user";
import "./styles/allProjects.css";

const AllProjects = () => {
	return (
		<div className="all-projects-container">
			<div className="title projects-title">Projects</div>
			<div className="subtitle projects-subtitle">
				I've worked on a variety of projects over the years and I'm
				proud of the progress I've made. Many of these projects are
				open-source and available for others to explore and contribute
				to.
			</div>

			<div className="projects-list">
				{INFO.projects.map((project, index) => (
					<div className="project" key={index}>
						<div className="project-container">
							<div className="project-logo">
								<img src={project.logo} alt="logo" />
							</div>
							<div className="project-title">{project.title}</div>
							<div className="project-description">
								{project.description}
							</div>
							<div className="project-link">
								<a
									href={project.link}
									target="_blank"
									rel="noreferrer"
								>
									{project.linkText}
								</a>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default AllProjects;
