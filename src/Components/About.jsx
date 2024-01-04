import React from "react";
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/about-background-image.png";
import { BsFillPlayCircleFill } from "react-icons/bs";
import Navbar from "./Navbar";
const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">About</p>
        <h1 className="primary-heading">
        Here Imagination Meets Reality!
        </h1>
        <p className="primary-text">
        R&D where artistry meets functionality, and every space tells a unique story! We believe that interiors should not only reflect the personality of the individuals inhabiting them but also enhance their daily experiences.
        </p>
        <p className="primary-text">
        With a blend of creativity, attention to detail, and a commitment to surpassing expectations, our team enables you to explore the intersection of style and functionality with us!
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button"><a href="#ser">Learn More</a></button>
          <button className="watch-video-button">
            <BsFillPlayCircleFill /> Watch Video
          </button>
        </div>
      </div></div>
  
  );
};

export default About;