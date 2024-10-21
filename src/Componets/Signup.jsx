import axios from "axios";
import React from "react";
import { useState } from "react";

const Signup = () => {
  const [Name, setName] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const handlesubmit = (e) => {
    e.preventDefault();
    console.log("Name: ", Name, "Email: ", email, "Password: ", password);
    try {
      axios.post(`${import.meta.env.VITE_DEV_URL}users/signup`,{Name,email,password})
      .then((res)=>{
        console.log(res.data);
      })
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <main className="bg-black text-white h-screen w-full">
        <div className="grid grid-cols-3 grid-rows-3">
          <div className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
            <div className="border-2 border-white rounded-md w-fit p-10  ">
              <h1 className="text-center uppercase bold text-2xl mb-4 ">Signup</h1>
              <form onSubmit={handlesubmit} className="space-y-3">
                <div className="input grid grid-cols-3">
                  <label htmlFor="">Full Name</label>
                  <input
                    className="col-span-2 rounded outline-none bg-black text-white border-[1px] border-gray-500 px-2 py-1 "
                    type="text"
                    placeholder="Ashish Kumar"
                    name="Name"
                    value={Name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="input grid grid-cols-3">
                  <label htmlFor="">Email</label>
                  <input
                    className="col-span-2 rounded outline-none bg-black text-white border-[1px] border-gray-500 px-2 py-1 "
                    type="email"
                    placeholder="name@domainmname"
                    name="email"
                    value={email}
                    onChange={(e) => setemail(e.target.value)}
                  />
                </div>
                <div className="input grid grid-cols-3">
                  <label htmlFor="">Password</label>
                  <input
                    className="col-span-2 rounded outline-none bg-black text-white border-[1px] border-gray-500 px-2 py-1 "
                    type="password"
                    placeholder="*********"
                    name="password"
                    value={password}
                    onChange={(e) => setpassword(e.target.value)}
                  />
                </div>
                <div className="flex justify-center items-center">
                  <button
                    className="border-2 border-gray-400 rounded-md px-2 py-1 "
                    type="submit"
                    
                  >
                    SignUp
                  </button>
                </div>
              </form>
              <div className="text-center">
                <p>-------------------------or---------------------------</p>
                <div>
                  <h3>Already have an account <a className="text-purple-600 font-bold underline" href="/login">Login</a></h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Signup;
