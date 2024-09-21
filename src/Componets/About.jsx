import React from "react";
import Navbar from "./Navbar";

const About = () => {
  return (
    <section className="w-full h-screen">
      <div className=" h-[70vh] w-full bg-black">
        <Navbar />
        <div className=" w-full">
          <div className="mt-10 flex justify-center items-center">
            <div
              style={{
                filter: "drop-shadow(10px 10px 1000px rgba(255, 255, 255, 0))",
              }}
            >
              <img className="" src="./abouttop.png" alt="" />
            </div>
            <h2  className="text-white text-6xl w-[50%] font-bold font-oleo">
              Simplified Work Based Application For Panchayati Raj
            </h2>
          </div>
        </div>
      </div>
      <div className=" p-10 space-y-10 bg-gradient-to-br from-teal-50 to-teal-300">
        <h1 className="text-center text-5xl font-bold font-Suse">About</h1>
        <div className="flex justify-center items-center gap-10 font-Suse">
          <img
          className="h-60 w-60 object-contain bg-cover"
            src="https://cdnbbsr.s3waas.gov.in/s316026d60ff9b54410b3435b403afd226/uploads/2023/02/2023020995-1024x1024.png"
            alt=""
          />

          <p className="text-3xl w-[70%] ">
            Welcome to our Gram Panchayat website, a dedicated platform for
            keeping you informed and connected with the latest government
            schemes and initiatives designed to benefit the community. Our
            website is a one-stop resource for residents seeking information,
            updates, and opportunities to apply for various welfare schemes
            introduced by the government. Whether it’s financial assistance,
            agricultural programs, housing projects, or educational schemes, we
            ensure you stay up-to-date with all the developments that can help
            improve your quality of life.
          </p>
        </div>
        <div className="flex justify-center items-center gap-10 font-Suse">
          <p className="text-3xl w-[70%] ">
            In today's fast-paced world, it’s crucial for every citizen to have
            easy access to government resources. Our Gram Panchayat is committed
            to bridging this gap by offering timely updates on new schemes and
            projects that aim to empower every household in the community. We
            provide detailed information on the eligibility criteria,
            application procedures, and deadlines, making the process simple and
            accessible for everyone.
          </p>
            <img className="h-60 w-60 object-contain" src="https://cdnbbsr.s3waas.gov.in/s316026d60ff9b54410b3435b403afd226/uploads/2023/02/2023020970.png" alt="" />
        </div>
        <div className="flex justify-center items-center gap-10 font-Suse">
          <img className="h-60 w-60 object-contain" src="https://cdnbbsr.s3waas.gov.in/s316026d60ff9b54410b3435b403afd226/uploads/2023/02/2023020990.png" alt="" />
          <p className="text-3xl w-[70%] ">
            In addition to updates, our platform allows you to apply for various
            government schemes directly through the website. By following a few
            easy steps, you can submit your application online, track its
            status, and get notifications about further processes. This saves
            you time and eliminates the hassle of visiting multiple offices.
          </p>
        </div>
        <div className="flex justify-center items-center gap-10 font-Suse">
          <p className="text-3xl w-[70%] ">
            We believe in transparency, efficiency, and serving the needs of our
            people. Our mission is to create an empowered and informed community
            where everyone has access to the resources and support they deserve.
            Stay connected with us to unlock the benefits that government
            initiatives have to offer and take a step forward towards a
            brighter, more prosperous future for our Gram Panchayat.
          </p>
            <img className="h-60 w-60 object-contain" src="https://cdnbbsr.s3waas.gov.in/s316026d60ff9b54410b3435b403afd226/uploads/2023/02/2023020951.png" alt="" />
        </div>
      </div>
    </section>
  );
};

export default About;
