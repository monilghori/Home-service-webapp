import { useState } from "react";
import { Link } from "react-router-dom"
import "./login.css";

const Login = () => {
  const [role, setRole] = useState("");
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
    try {
      let url;
      let res;

      if (role === "User") {
        url = "http://localhost:3000/student/login";

        res = await axios.post(
          url,
          {
            email: data.email,
            password: data.password,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        console.log(res.data);
        if (res.data.success === true) {
          navigate("../home");

          localStorage.clear();
          localStorage.setItem("user", JSON.stringify());
        } else {
          setError(res.data.message);
        }
      } 
      else if (role === "Service Provider") {
        url = "http://localhost:3000/faculty/login";

        res = await axios.post(
          url,
          {
            email: data.email,
            password: data.password,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (res.data.success === true) {
          navigate("../requests");
          console.log(res.data);
          localStorage.clear();
          localStorage.setItem("serviceprovider", JSON.stringify()); 
        } else {
          setError(res.data.message);
        }
      } 
       else {
          setError(res.data.message);
        }
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
      <div className="outter">
        <div className="login-page">
          <h1 style={{ textAlign: "center" }}>Login</h1>
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
                Not Registerd? <Link to="/register">Create an account</Link>
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
