import React from "react";
import Modern from "../Assets/modern-image.png";
import Contemporary from "../Assets/contemporary-image.png";
import Industrial from "../Assets/industrial-image.png";

const Work = () => {
  const workInfoData = [
    {
      image: Modern,
      title: "MODERN",
      text: "In its purest form, modernized designing reflects a fuss-free approach to life.",
    },
    {
      image: Contemporary,
      title: "CONTEMPORARY",
      text: "Contemporary style offers an 'everything in its place' interior featuring designs that are high on function and simplicity and low on collections and fuss. ",
    },
    {
      image: Industrial,
      title: "INDUSTRIAL",
      text: "The industrial interior design style loves the art of exposed pipes and beams.",
    },
  ];
  return (
    <div className="work-section-wrapper" style={{backgroundColor:"#EBF5FB"}}>
      <div className="work-section-top">
        <p className="primary-subheading">Trending</p>
        <h1 className="primary-heading">Best Choices</h1>
        <p className="primary-text">
        Interior design encompasses a wide range of styles and approaches to create functional and aesthetically pleasing spaces. Here are some popular types of interior design styles:
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;