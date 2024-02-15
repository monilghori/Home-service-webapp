import { useState } from "react";
import "./login.css";

const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="outter">
        <div className="login-page">
          <h1 style={{ textAlign: "center" }}>Login</h1>
          <div className="form">
            <form className="login-form" onSubmit={handleSubmit}>
              <input
                type="text"
                name="email"
                placeholder="Email"
                onChange={handleChange}
                required
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                onChange={handleChange}
                required
              />

              {error && <div className="error_msg">{error}</div>}

              <button type="submit" className="login-btn">Login</button>
              <p className="message">
                Not Registerd? <a href="/register">Create an account</a>
              </p>
            </form>
          </div>
        </div>
        <div className="img">
          <img
            src="./src\assets\images\1.jpg"
            className="img-login"
          ></img>
        </div>
      </div>
    </>
  );
};

export default Login;
