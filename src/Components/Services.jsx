import React from "react";
import '../Styles/Services.css';
import dr from "../Assets/dr.jpg";
import lr from "../Assets/lr.jpg";
import br from "../Assets/br.jpg";
import bar from "../Assets/bar.jpg";
import kk from "../Assets/kk.jpg";
import rr from "../Assets/rr.jpg";

const Services = () => {
  const workInfoData = [
    {
      image: lr,
      title: "LIVING ROOM",
      
    },
    {
      image: br,
      title: "BEDROOM",
     
    },
    {
      image: kk,
      title: "KITCHEN",
      
    },
    {
        image: dr,
        title: "DINNING ROOM",
        
      },
      {
        image: bar,
        title: "BATHROOM",
        
      },
      {
        image: rr,
        title: "RENOVATION",
        
      },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <h1 className="primary-subheading">SERVICES</h1>
        <p className="primary-text">
        With a blend of creativity, attention to detail, and a commitment to surpassing expectations, our team enables you to explore the intersection of style and functionality with us!
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
            <div className="learnmore">
           <center><button>
              Get Started{" "}
            </button></center>
            </div>
          </div>
        ))}
        
      </div>
    </div>
  );
};

export default Services;