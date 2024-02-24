import React, { useState, useEffect } from 'react';
import axios from "axios";
import { useParams } from 'react-router-dom';
import { ToastContainer , toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';    
import "./ServiceProvider.css";

const ServiceProvider = () => {
    const [servicesData, setServicesData] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formInputs, setFormInputs] = useState({
        name: '',
        date: '',
        serviceType: '',
        description: ''
    });
    
    const { id } = useParams();

    useEffect(() => {
        axios("http://localhost:3000/services_provider")
          .then((res) => {
            setServicesData(res.data);
          })
          .catch((err) => {
            console.log(err);
          });
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormInputs(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const allFieldsFilled = Object.values(formInputs).every(val => val.trim() !== '');

    const bookService = (serviceId) => {
        setIsModalOpen(true);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsModalOpen(false)
        setFormInputs({})
        toast.success('Service Booked Successfully', {
            position: "top-right",
            autoClose: 5000, 
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            closeButton: false, 
        });
    }

    return (
        <>
            {servicesData.map((service) => (
                service.id === id && (
                    <div className="service-details-card" key={service.id}>
                      <h2>{service.name}</h2>
                      <img src={service.logo} alt={service.name} />
                      <p>{service.description}</p>
                      <button onClick={() => bookService(service.id)}>Book Service</button>
                      <ToastContainer />
                    </div>
                )
            ))}
            {isModalOpen && (
                <div className="modal">
                    <form>
                        <label>Name:</label>
                        <input type="text" name="name" value={formInputs.name} onChange={handleInputChange} />
                        <label>Date:</label>
                        <input type="date" name="date" value={formInputs.date} onChange={handleInputChange} />
                        <label>Service Type:</label>
                        <select name="serviceType" value={formInputs.serviceType} onChange={handleInputChange}>
                            <option value="">Select Service</option>
                            <option value="AC Repair">AC Repair</option>
                            <option value="Replacing Ceiling Fans">Replacing Ceiling Fans</option>
                            <option value="Plumbing Repair">Plumbing Repair</option>
                            <option value="Repairing Refrigerators">Repairing Refrigerators</option>
                            <option value="Roof Repair">Roof Repair</option>
                            <option value="Painting and Wall Repair">Painting and Wall Repair</option>
                        </select>
                        <label>Description:</label>
                        <textarea name="description" value={formInputs.description} onChange={handleInputChange}></textarea>
                        <button type="submit" disabled={!allFieldsFilled} onClick={handleSubmit}>Submit</button>
                        
                        <button onClick={() => setIsModalOpen(false)}>Close</button>
                    </form>
                    
                </div>
            )}
        </>
    );
};

export default ServiceProvider;
