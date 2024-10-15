import React from "react";
import Navbar from "./Navbar";
import Video from '../assets/Videos/heroVideo.mp4'
import Roles from './Roles'
import Carousal from './LiveSchemeCarousal'
import Carousal2 from './PastSchemesCarousal'
import Testimonials from "./Testanomials";
import Footer from "./Footer";
import Officers from './Officers'

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="home-container">
        <video className="background-video" autoPlay loop muted>
          <source src={Video} type="video/mp4" />
        </video>
        <div className="overlay-content">
          <h1>Welcome to EGram <span> Panchayat</span></h1>
          <p>Empowering rural communities with accessible schemes</p>
          <a className="cta-button" href="/login" >Get Started</a>
        </div>
      </div>
     
      <Carousal/>
      <Carousal2/>
       <Officers/>
      <Testimonials/>
      <Footer/>
    </>


  );
};

export default Home;

// To empower citizens and promote sustainable development through
// digitalization of gram panchayat services.
