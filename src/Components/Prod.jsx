import React from "react";
import '../Styles/Product.css';
import dl from "../Assets/dl.jpg";
import ds from "../Assets/ds.jpg";
import cs from "../Assets/cs.jpg";
import st from "../Assets/st.jpg";
import bar from "../Assets/bar.jpg";
import kk from "../Assets/kk.jpg";
import rr from "../Assets/rr.jpg";

const Prod = () => {
    
  const workInfoData = [
    {
      image: ds,
      title: "Dinning Table set starting from Rs.12999",
      
    },
    {
      image: cs,
      title: "Cutlery set starting from Rs.345",
     
    },
    {
      image: st,
      title: "Storage henche furniture starting from Rs.7199",
      
    },
  ];
  return (
    <div className="dl">
          <img src={dl} alt="" />
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

export default Prod;