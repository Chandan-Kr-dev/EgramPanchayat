import React, { useState } from "react";
import Navbar from "./Navbar";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import Footer from "./Footer";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import axios from "axios";
// import Slide from "@mui/material/Slide";
// import { TransitionProps } from "@mui/material/transitions";

const Dashboard = () => {

  const [schemename, setschemename] = useState("")
  const [startdata, setstartdata] = useState("")
  const [enddate, setenddate] = useState("")
  const [validfor, setvalidfor] = useState("")

  const users = [
    {
      Name: "Chandan",
      email: "chandan@gmail.com",
      usertype: "Admin",
      Status: "Active",
    },
    {
      Name: "Saptarshi",
      email: "saptadev27@gmail.com",
      usertype: "Admin",
      Status: "Active",
    },
    {
      Name: "Anuska",
      email: "anuskabiswas27@gmail.com",
      usertype: "Admin",
      Status: "Active",
    },
    {
      Name: "Arna",
      email: "iamarna@gmail.com",
      usertype: "Admin",
      Status: "Active",
    },
  ];

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleschemes=(e)=>{
    e.preventDefault()
    axios.post(`${import.meta.env.VITE_DEV_URL}api/addSchemes`,{
      schemename,startdata,enddate,validfor
    })
    .then(res=>{
      console.log(res);
    })

    .catch(err=>console.error(err));
  }

  return (
    <main className="h-screen w-full bg-black">
      <Navbar />

      <div className="w-full mb-14 ">
        <h1 className=" text-5xl text-center mb-5 text-orange-900 mt-8 font-oleo">DashBoard</h1>
        <div className="cards   flex justify-start items-center">
          <div className="min-w-72 gap-4 h-32 rounded-lg bg-black text-orange-900 shadow-md shadow-orange-600 text-2xl m-10 flex justify-center items-center font-oleo ml-24">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z"
                />
              </svg>
            </span>
            <h2>Applications : 20</h2>
          </div>
          <button
            onClick={handleClickOpen}
            className="min-w-72 gap-4 h-32 rounded-lg bg-black text-orange-900 shadow-md shadow-orange-600  font-oleo text-2xl m-10 flex justify-center items-center"
          >
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z"
                />
              </svg>
            </span>
            <h2>Add Schemes</h2>
          </button>
          <div className="w-60 h-32 gap-4 rounded-lg bg-black text-orange-900 shadow-md shadow-orange-600 font-oleo text-2xl m-10 flex justify-center items-center">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
                />
              </svg>
            </span>
            <h2>Users : 20</h2>
          </div>
          <div className="w-60 h-32 gap-4 rounded-lg  bg-black text-orange-900 shadow-md shadow-orange-600 font-oleo text-2xl m-10 flex justify-center items-center">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0 1 18 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3 1.5 1.5 3-3.75"
                />
              </svg>
            </span>
            <h2>Schemes : 20</h2>
          </div>
        </div>
        <div className="bg-black rounded-lg min-h-[40vh] w-[60vw]  ml-[300px]  p-10 shadow-md shadow-orange-600  ">
          <div className="px-60   justify-center flex items-center  ">
            <table>
              <tr className="my-5 text-gray-500 font-oleo ">
                <th className="px-5 text-2xl ">Name</th>
                <th className="px-5 text-2xl ">Email</th>
                <th className="px-5 text-2xl ">Usertype</th>
                <th className="px-5 text-2xl ">Status</th>
              </tr>

              {users.map((user) => (
                <tr key={user.Name}>
                  <td className="px-5 text-center text-gray-500 font-oleo  ">{user.Name}</td>
                  <td className="px-5 text-center  text-gray-500 font-oleo">{user.email}</td>
                  <td className="px-5 text-center  text-gray-500 font-oleo">{user.usertype}</td>
                  <td className="px-5 text-center  text-gray-500 font-oleo">{user.Status}</td>
                </tr>
              ))}
            </table>
          </div>
        </div>
        <React.Fragment>
          
          <Dialog
            open={open}
            // TransitionComponent={Transition}
            keepMounted
            onClose={handleClose}
            aria-describedby="alert-dialog-slide-description"
          >
            <DialogTitle className="text-center border-b-[1px] my-2 ">{"Add new Scheme"}</DialogTitle>
            <DialogContent>
              <form className="space-y-5" action="">
                <div className="grid grid-cols-2">
                  <label className="text-xl font-bold " htmlFor="">Service Name :</label>
                  <input name="shemename" value={schemename} onChange={(e)=>setschemename(e.target.value)} className="text-xl bg-gray-200 text-black shadow-lg outline-none px-2 py-1" type="text" />
                </div>
                <div className="grid grid-cols-2">
                  <label className="text-xl font-bold " htmlFor="">Start Date:</label>
                  <input value={startdata} name="startdata" onChange={(e)=>setstartdata(e.target.value)} className="text-xl bg-gray-200 text-black shadow-lg outline-none px-2 py-1" type="date" />
                </div>
                <div className="grid grid-cols-2">
                  <label className="text-xl font-bold " htmlFor="">End Date:</label>
                  <input value={enddate} name="enddate" onChange={(e)=>setenddate(e.target.value)} className="text-xl bg-gray-200 text-black shadow-lg outline-none px-2 py-1" type="date" />
                </div>
                <div className="grid grid-cols-2">
                  <label className="text-xl font-bold " htmlFor="">Valid for:</label>
                  <select
                    value={validfor}
                  
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    onChange={(e) => setvalidfor(e.target.value)}
                    name="validfor"
                    id="usertype-select"
                  >
                    <option value="">--Selected Janta--</option>
                    <option value="All Age Groups">All age groups</option>
                    <option value="Senior Citizen">Senior citizen</option>
                    <option value="Children">Chilren</option>
                    <option value="Middle Aged">Middle aged</option>
                  </select>
                </div>
                <button onClick={handleschemes} className="bg-green-300 text-white px-2 py-1 rounded-lg ml-[50%] text-xl">Add</button>
              </form>
            </DialogContent>
            
          </Dialog>
        </React.Fragment>
      </div>
      <Footer />
    </main>
  );
};

export default Dashboard;
