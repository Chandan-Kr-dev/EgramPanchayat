import React from "react";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <section className="w-full h-screen bg-[url('./landing.jpeg')]  bg-no-repeat bg-cover">
      <Navbar />
      <div className=" mt-[350px] ">
        <div className=" px-[300px] ">
          <h1 className="text-9xl text-center font-[900] text-nowrap font-Suse ml-10 text-deep-purple-300 shadow-2xl ">
            E-Gram Panchayat.
          </h1>
          <p className="text-4xl text-teal-300 shadow-xl tracking-tighter font-bold font-Suse text-center">
            {" "}
            To empower citizens and promote sustainable development through
            digitalization of gram panchayat services.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Home;

// To empower citizens and promote sustainable development through
// digitalization of gram panchayat services.
