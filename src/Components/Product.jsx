import React from "react";
import '../Styles/Product.css';
import ld from "../Assets/ld.jpg";
import ss from "../Assets/ss.jpg";
import tv from "../Assets/tv.jpg";
import sc from "../Assets/sc.jpg";
import bar from "../Assets/bar.jpg";
import kk from "../Assets/kk.jpg";
import rr from "../Assets/rr.jpg";

const Product = () => {
    
  const workInfoData = [
    {
      image: ss,
      title: "Sofa set starting from Rs.9999",
      
    },
    {
      image: tv,
      title: "TV unit starting from Rs.4345",
     
    },
    {
      image: sc,
      title: "Wall & Decor accent starting from Rs.299",
      
    },
  ];
  return (
    <div className="ld">
          <img src={ld} alt="" />
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

export default Product;