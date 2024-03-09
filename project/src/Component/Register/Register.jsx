import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios"; // Don't forget to import axios if not imported
import "./register.css";

const Register = () => {
  const [role, setRole] = useState("");
  const [error, setError] = useState("");

  const cities = [
    "Ahmedabad",
    "Surat",
    "Vadodara",
    "Rajkot",
    "Bhavnagar",
    "Jamnagar",
    "Gandhinagar",
    "Junagadh",
    "Anand",
    "Navsari",
    "Morbi",
    "Nadiad",
    "Surendranagar",
    "Gandhidham",
    "Bharuch",
    "Mehsana",
    "Bhuj",
    "Porbandar",
    "Palanpur",
    "Valsad",
    "Vapi",
    "Gondal",
    "Veraval",
    "Godhra",
    "Patan",
    "Dahod",
  ];

  const [userData, setData] = useState({
    name: "",
    email: "",
    password: "",
    gender: "male",
    address: "",
    city: "",
    
  });

  const [serviceProviderdata, setServiceProviderData] = useState({
    name: "",
    email: "",
    password: "",
    serviceType: [],
    description: "",
    city: "",
  });

  const handleChange = (e) => {
    setData({ ...userData, [e.target.name]: e.target.value });
  };
  const handleChangesp = (e) => {
    setServiceProviderData({ ...serviceProviderdata, [e.target.name]: e.target.value });
  };

  const handleRadioChange = (event) => {
    setData({
      ...userData,
      gender: event.target.value,
    });
  };

  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setServiceProviderData({
        ...serviceProviderdata,
        serviceType: [...serviceProviderdata.serviceType, value],
      });
    } else {
      setServiceProviderData({
        ...serviceProviderdata,
        serviceType: serviceProviderdata.serviceType.filter(
          (service) => service !== value
        ),
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let url;
      {
        role === "User"
          ? (url = "http://localhost:3000/student/createstudent")
          : (url = "http://localhost:3000/faculty/createfaculty");
      }

      const res = await axios.put(
        url,
        role === "User" ? userData : serviceProviderdata
      );
      console.log(res.data.message);
      navigate("../login"); 
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
      }
    }
  };

  return (
    <>
      <div className="out">
        <div className="login-page">
          <h1 style={{ textAlign: "center" }}>Create Account</h1>
          <div className="form">
            <form className="login-form" onSubmit={handleSubmit}>
              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="login-select"
                required
              >
                <option disabled={true} value="">
                  Select Role
                </option>
                <option value="User">User</option>
                <option value="Service Provider">Service Provider</option>
              </select>
              {role === "User" ? (
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    required
                    onChange={handleChange}
                  />
                  <input
                    type="text"
                    name="email"
                    placeholder="Email"
                    required
                    onChange={handleChange}
                  />
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    required
                    onChange={handleChange}
                  />
                  <div className="radio-btn">
                    <label>
                      Male:
                      <input
                        type="radio"
                        name="gender"
                        value="male"
                        checked={userData.gender === "male"}
                        onChange={handleRadioChange}
                      />
                      Female:
                      <input
                        type="radio"
                        name="gender"
                        value="female"
                        checked={userData.gender === "female"}
                        onChange={handleRadioChange}
                      />
                    </label>
                  </div>
                  <div className="address">
                    <label>Address :</label>
                    <textarea
                      name="address"
                      placeholder="Address"
                      value={userData.address}
                      onChange={handleChange}
                    ></textarea>
                  </div>

                  <div className="select">
                    <label htmlFor="city-select">Choose city: </label>
                    <select
                      name="city"
                      id="city-select"
                      value={userData.city}
                      onChange={handleChange}
                    >
                      <option value="">Select a city</option>
                      {cities.map((city) => (
                        <option key={city} value={city}>
                          {city}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              ) : (
                <div>
                  <input
                    type="text"
                    name="email"
                    placeholder="Email"
                    required
                    onChange={handleChangesp}
                  />
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    required
                    onChange={handleChangesp}
                  />
                  <div className="description">
                    <label>Description :</label>
                    <textarea
                      name="description"
                      placeholder="Description"
                      value={serviceProviderdata.description}
                      onChange={handleChangesp}
                    ></textarea>
                  </div>

                  <div >
                    <label>Services Offered:</label>
                    <div className="checkboxes">
                      <table>
                        <tr>
                          <td>
                            <input
                              type="checkbox"
                              name="services"
                              value="AC Repair"
                              onChange={handleCheckboxChange}
                              checked={serviceProviderdata.serviceType.includes(
                                "AC Repair"
                              )}
                            />
                          </td>
                          <td>
                            <label>AC Repair</label>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <input
                              type="checkbox"
                              name="services"
                              value="Replacing Ceiling Fans"
                              onChange={handleCheckboxChange}
                              checked={serviceProviderdata.serviceType.includes(
                                "Replacing Ceiling Fans"
                              )}
                            />
                          </td>
                          <td>
                            <label>Replacing Ceiling Fans</label>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <input
                              type="checkbox"
                              name="services"
                              value="Plumbing Repair"
                              onChange={handleCheckboxChange}
                              checked={serviceProviderdata.serviceType.includes(
                                "Plumbing Repair"
                              )}
                            />
                          </td>
                          <td>
                            <label>Plumbing Repair</label>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <input
                              type="checkbox"
                              name="services"
                              value="Repairing Refrigerators"
                              onChange={handleCheckboxChange}
                              checked={serviceProviderdata.serviceType.includes(
                                "Repairing Refrigerators"
                              )}
                            />
                          </td>
                          <td>
                            <label>Repairing Refrigerators</label>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <input
                              type="checkbox"
                              name="services"
                              value="Roof Repair"
                              onChange={handleCheckboxChange}
                              checked={serviceProviderdata.serviceType.includes(
                                "Roof Repair"
                              )}
                            />
                          </td>
                          <td>
                            <label>Roof Repair</label>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <input
                              type="checkbox"
                              name="services"
                              value="Painting and Wall Repair"
                              onChange={handleCheckboxChange}
                              checked={serviceProviderdata.serviceType.includes(
                                "Painting and Wall Repair"
                              )}
                            />
                          </td>
                          <td>
                            <label>Painting and Wall Repair</label>
                          </td>
                        </tr>
                      </table>
                    </div>
                  </div>

                  <div className="select">
                    <label htmlFor="city-select">Choose city: </label>
                    <select
                      name="city"
                      id="city-select"
                      value={serviceProviderdata.city}
                      onChange={handleChangesp}
                    >
                      <option value="">Select a city</option>
                      {cities.map((city) => (
                        <option key={city} value={city}>
                          {city}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              )}

              {error && <div className="error_msg">{error}</div>}

              <button className="rgs-btn" type="submit">
                Create Account
              </button>
              <p className="message">
                Already have an account! <Link to="/login">Login</Link>
              </p>
            </form>
          </div>
        </div>
        <div className="img">
          <img
            src="./src\assets\images\1.jpg"
            className="img-login"
            alt="image of home service"
          ></img>
        </div>
      </div>
    </>
  );
};

export default Register;
