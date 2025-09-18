import React from "react";

import "./styles/article.css";

const Article = ({ date, title, description, link }) => {
	return (
		<div className="article">
			<div className="article-left-side">
				<div className="article-date">{date}</div>
			</div>

			<div className="article-right-side">
				<div className="article-title">{title}</div>
				<div className="article-description">{description}</div>
				<div className="article-link">
					<a href={link}>Read article</a>
				</div>
			</div>
		</div>
	);
};

export default Article;
