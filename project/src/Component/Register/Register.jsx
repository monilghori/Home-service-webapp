import { useState } from "react";
import { Link } from "react-router-dom"
import "./register.css";

const Register = () => {
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
    city: ""
  });

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

  const handleSubmit = async (e) => {};
  return (
    <>
      <div className="out">
        <div className="login-page">
          <h1 style={{ textAlign: "center"}}>Create Account</h1>
          <div className="form">
            <form className="login-form" onSubmit={handleSubmit}>
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
                    onChange={handleRadioChange}x
                  />
                </label>
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
              {error && <div className="error_msg">{error}</div>}

              <button className="rgs-btn" type="submit">create account</button>
              <p className="message">
                Already have account! <Link to="/login" >Login</Link>
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
          <img src="./src\assets\images\1.jpg" className="img-login"></img>
        </div>
      </div>
    </>
  );
};

export default Register;
