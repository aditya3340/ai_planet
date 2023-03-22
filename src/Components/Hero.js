import React from "react";
import { Link } from "react-router-dom";
import hero from "../Assests/hero.png"


const Hero = () => {
  return (
    <div >
      <div className="flex-container hero">
        <div className="hero-text">
          <h1>Hackathon Submissions</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur. Urna cursus amet
            pellentesque in parturient purus feugiat faucibus. Congue laoreet
            duis porta turpis eget suspendisse ac pharetra amet. Vel nisl tempus
            nec vitae.{" "}
          </p>
          <Link to="/submission">
          <button className="hero-btn">Upload Submissions</button>
          </Link>
        </div>
        <img  src={hero} alt = "hero_img"/>
        
      </div>
    </div>
  );
};

export default Hero;
