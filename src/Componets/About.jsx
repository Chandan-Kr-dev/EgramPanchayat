import React from "react";
import Navbar from "./Navbar";
import Roles from './Roles'
import Footer from "./Footer";
import HeroVideo from '../assets/Videos/heroVideo.mp4'

const stats = [
  { id: 1, name: 'Trustable Users', value: '1000 +' },
  { id: 2, name: 'Top Officers', value: '50 +' },
  { id: 3, name: 'States', value: '10 +' },
  { id: 4, name: 'Live Schemes', value: '20 +' },
]

const About = () => {
  return (
    <section className="w-full h-screen bg-black">

      <Navbar />
      <div className="hero-section">
        <div className="hero-video">
          <video autoPlay loop muted className="hero-video-conatiner">
            <source src={HeroVideo} type="video/mp4" />
          </video>
        </div>
        <div className="hero-text">

          <h2>EGram <span>Panchayat</span> ?</h2>
          <p>Egram Panchayat is a comprehensive platform designed to bridge the gap between rural citizens and the government</p>
          <p>This platform empowers citizens by providing easy access to information on various government schemes and services that promote rural development. </p>
          <p>Through the Egram Panchayat website, people can apply for schemes, monitor their applications, and stay updated on new and ongoing projects aimed at improving the quality of life in rural communities.</p>
          <a className="cta-button-hero" href="/login" >Apply Schemes</a>
        </div>
      </div>
      <Roles />
      <div className="bg-black py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
                <dt className="text-base leading-7 text-orange-900">{stat.name}</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
      <Footer/>
    </section>
  );
};

export default About;
