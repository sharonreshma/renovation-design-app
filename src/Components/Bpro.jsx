import React from "react";
import '../Styles/Product.css';
import bb from "../Assets/bb.jpg";
import ba from "../Assets/ba.jpg";
import ww from "../Assets/ww.jpg";
import bd from "../Assets/bd.jpg";
import bar from "../Assets/bar.jpg";
import kk from "../Assets/kk.jpg";
import rr from "../Assets/rr.jpg";

const Bpro = () => {
    
  const workInfoData = [
    {
      image: bd,
      title: "Beds starting from Rs.9999",
      
    },
    {
      image: ww,
      title: "Wardrobes starting from Rs.9599",
     
    },
    {
      image: ba,
      title: "Bathroom Accessories starting from Rs.99",
      
    },
  ];
  return (
    <div className="bb">
          <img src={bb} alt="" />
    <div className="work-section-wrapper" style={{backgroundColor:"white"}}>
      <div className="work-section-top">
        
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
    </div>
  );
};

export default Bpro;