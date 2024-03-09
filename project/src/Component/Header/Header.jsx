import "./header.css";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Headers = () => {
  const auth = localStorage.getItem("user");
  const provider = localStorage.getItem("provider");
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <>
      <header>
        <nav>
          <div className="left">
            <h1>HOME HELPER PLUSE</h1>
          </div>
          <div className="right">
            {auth ? (
              <ul>
                <li>
                  <Link to="/home">Home</Link>
                </li>
                <li>
                  <Link to="/servicesprovider">Services provider</Link>
                </li>
                <li>
                  <Link to="/aboutus">About Us</Link>
                </li>

                <li>
                  <Link to="/login" onClick={logout}>
                    <b>Logout</b>
                  </Link>
                </li>
              </ul>
            ) : provider ? (
              <ul>
                <li>
                  <Link to="/requests">
                    <b>Requests</b>
                  </Link>
                </li>
                <li>
                  <Link to="/login" onClick={logout}>
                    <b>Logout</b>
                  </Link>
                </li>
              </ul>
            ) : (
              <ul>
                <li>
                  <Link to="/login">
                    <b>Log in</b>
                  </Link>
                </li>
                <li>
                  <Link to="/register">
                    <b>Register for free</b>
                  </Link>
                </li>
              </ul>
            )}
          </div>
        </nav>
      </header>
    </>
  );
};

export default Headers;
