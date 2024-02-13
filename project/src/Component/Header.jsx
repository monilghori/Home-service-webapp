import "./header.css";
import React from "react";
import { Link , useNavigate } from "react-router-dom";

const Headers = () => {
  let auth = 1;

  const logout = () => {}

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
                  <Link to="/services">Services</Link>
                </li>
                <li>
                  <Link to="/aboutus">About Us</Link>
                </li>
                
                <li>
                  <Link to="/login" onClick={logout}><b>Logout</b></Link>
                </li>
              </ul>
            ) : (
              <ul>
                <li>
                  <Link to="/login"><b>Log in</b></Link>
                </li>
                <li>
                  <Link to="/register"><b>Register for free</b></Link>
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
