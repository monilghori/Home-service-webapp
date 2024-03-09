import axios from "axios";
import { useEffect, useState } from "react";
import "./services.css";
import { useNavigate } from "react-router-dom";

const Services = () => {
  const [servicesData, setServicesData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:9090/api/serviceprovider/serviceproviders")
      .then((res) => {
        console.log(res.data);
        setServicesData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const navigate = useNavigate();

  const ServiceCard = ({ service }) => (
    <div className="service-card">
      <img src="./src\assets\images\2.jpg" alt={service.name} className="service-logo" />
      <h3>{service.name}</h3>
      <p className="service-description">{service.description}</p>
      <button className="service-button" onClick={() => handleClick(service.id)}>Check</button>
    </div>
  );

  const handleClick = (id) => {
    navigate(`/servicesprovider/${id}`);
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
