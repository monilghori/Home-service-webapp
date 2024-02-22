import PropTypes from "prop-types";
import axios from "axios";
import { useEffect, useState } from "react";
import "./services.css";
import { useNavigate } from "react-router-dom";




const Services = () => {
  const [servicesData, setServicesData] = useState([]);

  useEffect(() => {
    axios("http://localhost:3000/services_provider")
    .then((res) => {
      setServicesData(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
  },[])
  
    const navigate = useNavigate()

    const ServiceCard = ({ service }) => (
      <div className="service-card">
        <img src={service.logo} alt={service.name} className="service-logo" />
        <h3>{service.name}</h3>
        <p className="service-description">{service.description}</p>
        <button className="service-button" onClick={() => handleClick(service.id)}>Check</button>
      </div>
    );
    
    ServiceCard.propTypes = {
      service: PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        logo: PropTypes.string.isRequired,
      }).isRequired,
    };

    const handleClick = (id) => {
      navigate(`/servicesprovider/${id}`)

    }
  return (
    <div className="services-container">
      {servicesData.map((service) => (
        <ServiceCard key={service.id} service={service} />
      ))}
    </div>
  );
};

export default Services;
