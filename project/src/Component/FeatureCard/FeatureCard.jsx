import React from 'react';
import './FeatureCard.css'; // Ensure this import is correct based on your file structure
import PropTypes from 'prop-types';



export const FeatureCard = (props) => {
    
  return (
    <div className="feature-card">
      <img
        src={props.img}
        alt={props.alt}
      />
      <div className="gradient-overlay"></div>
      <div className="card-content">
        <h1>{props.title}</h1>
        <p>{props.description}</p>
        <button>View more &rarr;</button>
      </div>
    </div>
  );
};
