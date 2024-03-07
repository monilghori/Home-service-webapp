import { useState } from "react";
import { Link } from "react-router-dom";
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
    city: "",
    address: "",
  });

  const [serviceProviderdata, setServiceProviderData] = useState({
    name : "",
    email : "",
    password : "",
    serviceType : [],
    description : "",
    city : ""})

  const handleChange = (e) => {
    //   console.log(data)
    setData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleRadioChange = (event) => {
    setData({
      ...userData,
      gender: event.target.value,
    });
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

      const res = await axios.put(url, data);
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
              {role === "User" ? (<div>
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
                      x
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
              </div>)
              :(
              <div>
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
                <div className="description">
                  <label>description :</label>
                  <textarea
                    name="description"
                    placeholder="description"
                    value={serviceProviderdata.description}
                    onChange={handleChange}
                  ></textarea>
                </div>

                <div className="select">
                  <label htmlFor="city-select">Choose city: </label>
                  <select
                    name="city"
                    id="city-select"
                    value={serviceProviderdata.city}
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
              </div>)}
              

              {error && <div className="error_msg">{error}</div>}

              <button className="rgs-btn" type="submit">
                create account
              </button>
              <p className="message">
                Already have account! <Link to="/login">Login</Link>
              </p>
            </form>
            {/* <button className='login-with-google-btn'>
                        Sign In With Google
                    </button>
                    <button className='login-with-facebook-btn'>
                        Sign In With Facebook
                    </button> */}
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
