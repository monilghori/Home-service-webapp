import React from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { useState } from "react";
import "./services.css";

// const servicesData = [
//     {
//         id: 1,
//         name: "Clean & Shine",
//         description: "Professional home and office cleaning services.",
//         logo: "url-to-logo1.jpg",
//       },
//       {
//         id: 2,
//         name: "QuickFix Plumbers",
//         description: "Expert plumbing services with 24/7 support.",
//         logo: "url-to-logo2.jpg",
//       },
//   // Your services data
// ];

const ServiceCard = ({ service }) => (
  <div className="service-card">
    <img src={service.logo} alt={service.name} className="service-logo" />
    <h3>{service.name}</h3>
    <p>{service.description}</p>
    <button>Check</button>
  </div>
);

// Define prop types for ServiceCard
ServiceCard.propTypes = {
  service: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    logo: PropTypes.string.isRequired,
  }).isRequired,
};

const Services = () => {
  const [servicesData, setServicesData] = useState([]);
  axios("http://localhost:3000/services_provider")
    .then((res) => {
      setServicesData(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
  return (
    <div className="services-container">
      {servicesData.map((service) => (
        <ServiceCard key={service.id} service={service} />
      ))}
    </div>
  );
};

export default Services;
