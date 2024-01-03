import React from "react";
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/home-banner-image.png";
import '../Styles/Homepage.css';
import Navbar from "./Navbar";
import About from "./About";
import Work from "./Work";
import Services from "./Services";
import Pricing from "./Pricing";
import Footer from "./Footer";
import Contact from "./Contact";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  return (
    <div className="home-container" style={{backgroundImage:"none"}}>
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
          A design so unique created just for you!
          </h1>
          <p className="primary-text">
          Design dreams made into reality.Your personality is now our expertise.Bringing out the unique interior designs out there for you, to help you experience the joy of living.
          </p>
          <button className="secondary-button">
            Explore More <FiArrowRight />{" "}
          </button>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
      </div>
      <section id="abt">
      <About/>
      </section>
      <section id="ww">
      <Work/>
      </section>
      <section id="ser">
      <Services/>
      </section>
      <section id="pr">
      <Pricing/>
      </section>
      <section id="con">
      <Contact/>
      <Footer/>
      </section>
    </div>
    
  );
};

export default Home;