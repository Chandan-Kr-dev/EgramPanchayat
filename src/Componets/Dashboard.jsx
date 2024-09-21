import React from "react";
import Navbar from "./Navbar";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

const Dashboard = () => {
  const users = [
    {
      Name: "Chandan",
      email: "chandan@gmail.com",
      usertype: "Admin",
      Status: "Active",
    },
    {
      Name: "Chandan",
      email: "chandan@gmail.com",
      usertype: "Admin",
      Status: "Active",
    },
  ];
  return (
    <main className="min-h-screen w-full bg-gradient-to-bl from-light-blue-400 to-light-blue-800">
      <Navbar />
      <div className="w-full ">
        <h1 className=" text-4xl text-center mb-5">DashBoard</h1>
        <div className="cards  ml-[370px] flex justify-start items-center">
          <div className="min-w-72 gap-4 h-32 rounded-lg bg-blue-gray-200 font-bold text-blue-900 font-oleo text-2xl m-10 flex justify-center items-center">
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
            <h2>Applications : 23</h2>
          </div>
          <div className="w-60 h-32 gap-4 rounded-lg bg-blue-gray-200 font-bold text-blue-900 font-oleo text-2xl m-10 flex justify-center items-center">
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
            <h2>Users : 23</h2>
          </div>
          <div className="w-60 h-32 gap-4 rounded-lg bg-blue-gray-200 font-bold text-blue-900 font-oleo text-2xl m-10 flex justify-center items-center">
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
            <h2>Schemes : 23</h2>
          </div>
        </div>
        <div className="bg-white rounded-lg min-h-[40vh] w-[60vw]  ml-[370px]  p-10">
          <div className="px-60 ">
            <table>
              <tr className="my-5">
                <th className="px-5 text-2xl ">Name</th>
                <th className="px-5 text-2xl ">Email</th>
                <th className="px-5 text-2xl ">usertype</th>
                <th className="px-5 text-2xl ">Status</th>
              </tr>

              {users.map((user) => (
                <tr key={user.Name}>
                  <td className="px-5 text-center">{user.Name}</td>
                  <td className="px-5 text-center">{user.email}</td>
                  <td className="px-5 text-center">{user.usertype}</td>
                  <td className="px-5 text-center">{user.Status}</td>
                </tr>
              ))}
            </table>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
