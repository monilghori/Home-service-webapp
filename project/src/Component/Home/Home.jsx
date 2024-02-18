// import React from "react"
import { FeatureCard } from "../FeatureCard/FeatureCard";
import "./home.css"

const Home = () => {
  return (
    <>
      <div className="outterr">
        <div className="welcome">
          <h1>Welcome to Home Helper Pluse</h1>
        </div>
        <div className="features">
          <h6>Features</h6>
          <h1>Features</h1>
          <div className="cards">
          <FeatureCard />
          <FeatureCard />
          </div>
          
        </div>
      </div>
    </>
  );
};

export default Home;
