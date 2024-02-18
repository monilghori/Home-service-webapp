import React from 'react';
import './FeatureCard.css'; // Ensure this import is correct based on your file structure
import PropTypes from 'prop-types';



export const FeatureCard = (props) => {

    FeatureCard.propTypes = {
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        img: PropTypes.string.isRequired,
        alt: PropTypes.string.isRequired // Not marked as required assuming an image might not always be present
      };
    
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
