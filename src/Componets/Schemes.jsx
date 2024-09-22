import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import axios from "axios";

const Schemes = () => {
  const [schemes, setschemes] = useState([]);

  const fetchSchemes = async() => {
    try {
      await axios
        .get(`${import.meta.env.VITE_DEV_URL}api/getschemes`)
        .then((response) => {
          console.log(response);
          setschemes(response.data);
          // console.log(schemes);
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(()=>{
    fetchSchemes()
  },[])

  return (
    <div className="min-h-screen w-full ">
      <div className="h-[65vh] w-full bg-black">
        <Navbar />
        <div className="flex justify-center items-center p-5">
          <img className="drop-shadow-4xl" src="./services.png" alt="" />
          <h1 className="text-6xl font-bold font-oleo text-white">
            Services for the people
          </h1>
        </div>
      </div>
      <div className="p-10">
        <h1 className="text-center text-2xl font-bold font-Suse">
          Schemes Active
        </h1>
        <div className="flex flex-wrap justify-center gap-10">
          {/* {schemes.map((sche, i) => (
            <div key={i} className="h-60 w-60 bg-light-green-50 text-white rounded-lg">
              <h1>{sche.SchemeName}</h1>
            </div>
          ))} */}
        </div>
      </div>
    </div>
  );
};

export default Schemes;
