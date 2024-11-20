// "use client";
// import React, { useState, useEffect } from 'react';
// // import bannerData from './BannerData';

// import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
// import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
// import LocationOnIcon from '@mui/icons-material/LocationOn';
// import InstagramIcon from '@mui/icons-material/Instagram';
// import RocketIcon from '@mui/icons-material/Rocket';

// import DiscordLogo from '../assets/images/discord-logo-white.png';
// import Image from 'next/image';

// // Discord Section
// const Discord = () => (
//   <a
//     href="https://discord.gg/DZHsJYZGgs"
//     target="_blank"
//     rel="noreferrer"
//     className="flex justify-center items-center bg-[#5865F2] h-16 md:h-24 hover:bg-[#525ee4] py-4 md:py-6 active:py-3 md:hover:py-5 transition-all duration-75 ease-linear cursor-pointer"
//   >
//     <Image
//       src={DiscordLogo}
//       alt="Discord Logo"
//       className="h-full w-auto transition-all duration-200 ease-in cursor-pointer"
//     />
//   </a>
// );

// // Numbers Section
// const Numbers = () => {
//   const [size, setSize] = useState(60);

//   useEffect(() => {
//     const handleResize = () => {
//       setSize(window.innerWidth < 1024 ? 35 : 60);
//     };

//     handleResize(); // Set size on mount
//     window.addEventListener('resize', handleResize);

//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   return (
//     <div className="bg-gray-700 h-20 lg:h-36 max-w-screen">
//       <div className="flex container max-w-5xl justify-between mx-auto items-center px-5 h-full">
//         <div className="flex flex-col items-center hover:bg-gray-800 w-full h-full justify-center text-white">
//           {/* <LocationOnIcon sx={{ fontSize: size }} /> */}
//           <p className="font-bold cursor-default">Urla/İzmir</p>
//         </div>
//         <div className="flex flex-col items-center hover:bg-gray-800 w-full h-full justify-center text-white">
//           {/* <RocketIcon sx={{ fontSize: size }} /> */}
//           <p className="font-bold cursor-default"></p>
//         </div>
//         <div className="flex flex-col items-center hover:bg-gray-800 w-full h-full justify-center text-white">
//           {/* <InstagramIcon sx={{ fontSize: size }} /> */}
//           <p className="font-bold cursor-default">1188</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// // Banner Section
// const Banner = () => {
//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     // const lastIndex = bannerData.length - 1;
//     if (index < 0) setIndex(lastIndex);
//     if (index > lastIndex) setIndex(0);
//   }, [index]);

//   useEffect(() => {
//     const slider = setInterval(() => setIndex((prev) => prev + 1), 10000);
//     return () => clearInterval(slider);
//   }, [index]);

//   return (
//     <section className="z-0">
//       <div className="flex justify-center max-w-screen h-[94vh] m-auto relative overflow-x-hidden overflow-y-hidden z-0 bg-gray-800">
//         {bannerData.map((data, dataIndex) => {
//           const position =
//             index === dataIndex
//               ? 'translate-x-0 opacity-100'
//               : dataIndex === index - 1 || (index === 0 && dataIndex === bannerData.length - 1)
//               ? '-translate-x-full opacity-0'
//               : 'translate-x-full opacity-0';

//           return (
//             <div
//               key={data.id}
//               className={`${position} flex-1 absolute top-5 left-0 w-full h-[90vh] transition-all duration-300 ease-linear flex items-center justify-center`}
//             >
//               <Image
//                 src={data.image}
//                 alt={data.id}
//                 className="object-cover rounded-3xl pointer-events-none"
//                 style={{ maxWidth: '100%', maxHeight: '100%' }}
//               />
//             </div>
//           );
//         })}
//         <div className="buttons">
//           <div
//             className="flex justify-center items-center absolute left-2 sm:left-10 top-1/2 w-6 sm:w-12 h-6 sm:h-12 bg-black/70 rounded-full cursor-pointer"
//             onClick={() => setIndex((prev) => prev - 1)}
//           >
//             <KeyboardArrowLeftIcon className="text-white" />
//           </div>

//           <div
//             className="flex justify-center items-center absolute right-2 sm:right-10 top-1/2 w-6 sm:w-12 h-6 sm:h-12 bg-black/70 rounded-full cursor-pointer"
//             onClick={() => setIndex((prev) => prev + 1)}
//           >
//             <KeyboardArrowRightIcon className="text-white" />
//           </div>
//         </div>
//       </div>

//       <Numbers />
//       <Discord />
//     </section>
//   );
// };

// export default Banner;
