import React from 'react';

const Project = ({ title, imageUrl, deployedLink, githubLink }) => {
  return (
    <div className="project">
      <h3>{title}</h3>
      <img src={imageUrl} alt={`${title} Project`} />
      <p><a href={deployedLink} target="_blank" rel="noopener noreferrer">Visit Deployed</a></p>
      <p><a href={githubLink} target="_blank" rel="noopener noreferrer">GitHub Repository</a></p>
    </div>
  );
};

export default Project;