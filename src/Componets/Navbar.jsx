import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
import axios from 'axios'

const Navbar = () => {
  const {user,loginWithRedirect,isAuthenticated ,logout}=useAuth0()
  console.log(user)
  console.log(isAuthenticated)

  

  return (
    <main className='z-[99]'>
      <nav>
        <ul className='flex justify-between items-center text-white sticky top-0 p-5 font-bold'>
          <div>
            <li className='text-4xl bg-gradient-to-tr from-cyan-400 to-teal-500 px-3 py-2 rounded-lg font-Suse'>E-Gram</li>
          </div>
          <div className='flex justify-center items-center gap-5 text-2xl font-Suse'>
            <Link to="/" className='hover:border-b-[2px] hover:border-blue-600 transition-all ease-linear '>Home</Link>
            <Link to='/about' className='hover:border-b-[2px] hover:border-blue-600 transition-all ease-linear '>About</Link>
            <a href='/dashboard' className='hover:border-b-[2px] hover:border-blue-600 transition-all ease-linear '>Dashboard</a>
            <a href='/createservices' className='hover:border-b-[2px] hover:border-blue-600 transition-all ease-linear '>Create Services</a>
            <a href='/apply' className='hover:border-b-[2px] hover:border-blue-600 transition-all ease-linear '>Apply Services</a>
            <a href='/Schemes' className='hover:border-b-[2px] hover:border-blue-600 transition-all ease-linear '>Schemes</a>
            {isAuthenticated?(<button onClick={()=>logout()} className='bg-gradient-to-br from-blue-700 to-pink-200 px-3 py-1 rounded-lg'>Logout</button>):(<button onClick={()=>loginWithRedirect()} className='bg-gradient-to-br from-blue-700 to-pink-200 px-3 py-1 rounded-lg' >Login</button>)}
            {/* {isAuthenticated && <img src={user.picture} alt='user'/>} */}
            
          </div>
        </ul>
      </nav>
    </main>
  )
}

export default Navbar


// import React from "react";
// import {
//   Navbar,
//   MobileNav,
//   Typography,
//   Button,
//   IconButton,
//   Card,
// } from "@material-tailwind/react";

// //dashborad for both admin and user 
// // admin : user accounts and applications 
// // user : track application applied
 
// export function StickyNavbar() {
//   const [openNav, setOpenNav] = React.useState(false);
 
//   React.useEffect(() => {
//     window.addEventListener(
//       "resize",
//       () => window.innerWidth >= 960 && setOpenNav(false),
//     );
//   }, []);
 
//   const navList = (
//     <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 ">
//       <Typography
//         as="li"
//         variant="small"
//         color="blue-gray"
//         className="p-1 font-normal"
//       >
//         <a href="#" className="flex items-center font-bold text-2xl">
//           Home
//         </a>
//       </Typography>
//       <Typography
//         as="li"
//         variant="small"
//         color="blue-gray"
//         className="p-1 font-normal"
//       >
//         <a href="#" className="flex items-center font-bold text-2xl">
//           Create Service
//         </a>
//       </Typography>
//       <Typography
//         as="li"
//         variant="small"
//         color="blue-gray"
//         className="p-1 font-normal"
//       >
//         <a href="#" className="flex items-center font-bold text-2xl">
//           Apply For Service
//         </a>
//       </Typography>
//       <Typography
//         as="li"
//         variant="small"
//         color="blue-gray"
//         className="p-1 font-normal"
//       >
//         <a href="#" className="flex items-center font-bold text-2xl">
//           Dashboard
//         </a>
//       </Typography>
//     </ul>
//   );
 
//   return (
//     <div className=" ">
//       <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4">
//         <div className="flex items-center justify-between text-blue-gray-900">
//           <Typography
//             as="a"
//             href="#"
//             className="mr-4 cursor-pointer py-1.5  font-bold text-2xl"
//           >
//             EGram
//           </Typography>
//           <div className="flex items-center gap-4">
//             <div className="mr-4 hidden lg:block">{navList}</div>
//             <div className="flex items-center gap-x-1">
              
//               <Button
//                 variant="gradient"
//                 size="sm"
//                 className="hidden lg:inline-block font-bold text-2xl"
//               >
//                 <span>Sign in</span>
//               </Button>
//             </div>
//             <IconButton
//               variant="text"
//               className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
//               ripple={false}
//               onClick={() => setOpenNav(!openNav)}
//             >
//               {openNav ? (
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   className="h-6 w-6"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                   strokeWidth={2}
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     d="M6 18L18 6M6 6l12 12"
//                   />
//                 </svg>
//               ) : (
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-6 w-6"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth={2}
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     d="M4 6h16M4 12h16M4 18h16"
//                   />
//                 </svg>
//               )}
//             </IconButton>
//           </div>
//         </div>
//         <MobileNav open={openNav}>
//           {navList}
//           <div className="flex items-center gap-x-1">
//             <Button fullWidth variant="text" size="sm" className="">
//               <span>Log In</span>
//             </Button>
//             <Button fullWidth variant="gradient" size="sm" className="">
//               <span>Sign in</span>
//             </Button>
//           </div>
//         </MobileNav>
//       </Navbar>
      
//     </div>
//   );
// }