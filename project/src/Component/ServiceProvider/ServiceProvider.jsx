import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./ServiceProvider.css";

const ServiceProvider = () => {
  const [servicesData, setServicesData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formInputs, setFormInputs] = useState({
    date: "",
    service: "",
    description: "",
  });

  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:9090/api/serviceprovider/${id}`)
      .then((res) => {
        setServicesData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormInputs((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const allFieldsFilled = Object.values(formInputs).every(
    (val) => val.trim() !== ""
  );

  const bookService = (serviceId) => {
    setIsModalOpen(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formInputs);
    const userdata = JSON.parse(localStorage.getItem("user"));
    try {
      const servicedata = await axios
        .get(`http://localhost:9090/api/service/${formInputs.service}`)
        .then((res) => {
          return res.data;
        })
        .catch((err) => {
          throw err;
        });
        console.log(servicedata);
        const update = {
            ...formInputs,
            service:{id : servicedata.id},
            user: {id : userdata.id},
            serviceProvider: {id : servicesData.id},
          }
          console.log(update);
      await axios
        .post("http://localhost:9090/api/request/create", update)
        .then(async (res) => {
          setIsModalOpen(false);
          setFormInputs({})
          toast.success("Service Booked Successfully", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            closeButton: false,
          });
        })
        .catch((err) => {
          throw err;
        });
    } catch (err) {
        console.log(err);
      toast.error("Service Booking Failed", {
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
    console.log(formInputs);
  };

  return (
    <>
      <div className="service-details-card" key={servicesData.id}>
        <h2>{servicesData.name}</h2>
        <img src="../src\assets\images\2.jpg" alt={servicesData.name} />
        <p>{servicesData.description}</p>
        <button onClick={() => bookService(servicesData.id)}>
          Book Service
        </button>
        <ToastContainer />
      </div>
      {isModalOpen && (
        <div className="modal">
          <form>
            <label>Date:</label>
            <input
              type="date"
              name="date"
              value={formInputs.date}
              onChange={handleInputChange}
            />
            <label>Service Type:</label>
            <select
              name="service"
              value={formInputs.service}
              onChange={handleInputChange}
            >
              <option value="">Select Service</option>
              {servicesData.services.map((service, index) => (
                <option key={index} value={service.name}>
                  {service.name}
                </option>
              ))}
              {/* <option value="AC Repair">AC Repair</option>
                            <option value="Replacing Ceiling Fans">Replacing Ceiling Fans</option>
                            <option value="Plumbing Repair">Plumbing Repair</option>
                            <option value="Repairing Refrigerators">Repairing Refrigerators</option>
                            <option value="Roof Repair">Roof Repair</option>
                            <option value="Painting and Wall Repair">Painting and Wall Repair</option> */}
            </select>
            <label>Description:</label>
            <textarea
              name="description"
              value={formInputs.description}
              onChange={handleInputChange}
            ></textarea>
            <button
              type="submit"
              disabled={!allFieldsFilled}
              onClick={handleSubmit}
            >
              Submit
            </button>

            <button onClick={() => setIsModalOpen(false)}>Close</button>
          </form>
        </div>
      )}
    </>
  );
};

export default ServiceProvider;
