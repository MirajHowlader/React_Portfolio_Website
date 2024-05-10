import React from "react";

import Profile_imag from "../../assets/profile_img.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import "./hero.css";
const Herol = () => {
  return (
    <div id="home" className="hero">
      <img src={Profile_imag} alt="" />
      <h1><span>I'm Alex Bennett,</span>  frontend developer base in USA. </h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, iure
        necessitatibus. Praesentium est placeat adipisci voluptate, labore
        doloribus nostrum quis.
      </p>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchorLink' offset={50} href='#contact'><p onClick={()=>setMenu("contact")}>Connect With Me</p></AnchorLink></div>
        <div className="hero-resume">My Resume</div>
      </div>
    </div>
  );
};

export default Herol;
