import React from "react";

import theme_pattern from "../../assets/theme_pattern.svg";
import profile from "../../assets/about_profile.svg";
import "./about.css";
const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-section">
        <div className="about-left">
          <img src={profile} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea
              consectetur eum dignissimos, dolore tenetur illo? Exercitationem
              temporibus esse sapiente nemo.
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero
              commodi doloribus laborum. Deleniti dolores voluptates incidunt
              earum dignissimos libero debitis.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p>
              <hr style={{ width: "50%" }} />
              <p>React JS</p>
              <hr style={{ width: "70%" }} />
              <p>JavaScript</p>
              <hr style={{ width: "60%" }} />
              <p>Next JS</p>
              <hr style={{ width: "50%" }} />
            </div>
          </div>
        </div>
       
      </div>
      <div className="about-achivements">
          <div className="about-achivement">
            <h1>10+</h1>
            <p>YEARS OF EXPERIENCE</p>
          </div>
          <div className="about-achivement">
            <h1>90+</h1>
            <p>PROJECT COMPLETED</p>
          </div>
          <hr />
          <div className="about-achivement">
          <h1>20+</h1>
          <p>HAPPY CLIENTS</p>
        </div>
        </div>
    </div>
  );
};

export default About;
