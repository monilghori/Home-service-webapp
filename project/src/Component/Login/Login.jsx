import { useState } from "react";
import { Link , useNavigate} from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import "./login.css";

const Login = () => {
  const [role, setRole] = useState("");
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
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
        url = "http://localhost:9090/api/user/login";
        const user = {
          email: data.email,
          password: data.password,
        };
        res = await axios
          .post(url, user)
          .then((res) => {
            console.log(res.data);
            localStorage.clear();
            localStorage.setItem("user", JSON.stringify(res.data));
            toast.success("Login Successfully", {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              closeButton: false,
            });
            navigate("../home");
          })
          .catch((err) => {
            setError(err.response.data);
            toast.error(err.response.data, {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              closeButton: false,
            });
          });
      } else if (role === "Service Provider") {
        url = "http://localhost:9090/api/serviceprovider/login";
        const  serviceprovider = {
          email: data.email,
          password: data.password,
        }
        res = await axios.post(
          url,
          serviceprovider
        ).then((res) => {
          localStorage.clear();
          localStorage.setItem("provider", JSON.stringify(res.data));
          toast.success("Login Successfully", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            closeButton: false,
          });
          navigate("../requests");
        })
        .catch((err) => {
          setError(err.response.data);
          toast.error(err.response.data, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            closeButton: false,
          });
        });;

      } else {
        setError(res.data.message);
      }
    } catch (error) {
      console.log(error);
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

              <button type="submit" className="login-btn">
                Login
              </button>
              <p className="message">
                Not Registerd? <Link to="/register">Create an account</Link>
              </p>
            </form>
          </div>
        </div>
        <div className="img">
          <img src="./public\assets\images\1.jpg" className="img-login"></img>
        </div>
      </div>
    </>
  );
};

export default Login;
