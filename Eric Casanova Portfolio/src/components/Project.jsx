import React from 'react';

const Project = ({ title, link, image }) => (
  <div className="work-item">
    <a href={link}>
      <img src={image} alt={title} />
      <h3>{title}</h3>
    </a>
  </div>
);

export default Project;
