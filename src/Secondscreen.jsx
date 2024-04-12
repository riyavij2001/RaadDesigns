// import Pic1 from './Images/Pic1.jpg'
// import Pic2 from './Images/Pic2.jpg'
// import Pic3 from './Images/Pic3.jpg'
// import Pic4 from './Images/Pic4.jpg'
// import Pic5 from './Images/Pic5.jpg'
// import Pic6 from './Images/Pic6.jpg'
// import Pic7 from './Images/Pic7.jpg'
// import { useScroll, useTransform, motion } from 'framer-motion';
// import { useRef } from 'react';


// function Secondscreen() {

//   const container = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: container,
//     offset: ['start start', 'end end']
//   })

//   const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4])
//   const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5])
//   const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6])
//   const scale7 = useTransform(scrollYProgress, [0, 1], [1, 7])
//   const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8])
//   const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9])

//   const pictures = [
//     {
//       src: Pic1, scale: scale4,
//       width: "25vw",
//       height: "25vh"
//     },
//     {
//       src: Pic2, scale: scale5,
//       top: "-30vh",
//       left: "5vw",
//       width: "35vw",
//       height: "30vh",
//     },
//     {
//       src: Pic3, scale: scale6,
//       top: "-10vh",
//       left: "-25vw",
//       width: "20vw",
//       height: "45vh",
//     },
//     {
//       src: Pic4, scale: scale7,
//       left: "27.5vw",
//       width: "25vw",
//       height: "25vh",
//     },
//     {
//       src: Pic5, scale: scale5,
//       top: "27.5vh",
//       left: "5vw",
//       width: "20vw",
//       height: "25vh",
//     },
//     {
//       src: Pic6, scale: scale8,
//       top: "27.5vh",
//       left: "-22.5vw",
//       width: "30vw",
//       height: "25vh",
//     },
//     {
//       src: Pic7, scale: scale4,
//       top: "27.5vh",
//       left: "-22.5vw",
//       width: "30vw",
//       height: "25vh",
//     },
//   ]

//   return (
//     <div ref={container} className=' h-[300vh] bg-red-600 relative'>
//       <div className=' sticky bg-[#262425] h-[100vh] top-0 overflow-hidden'>
//         {pictures.map(({ src, scale, top, left, width, height }, index) => {
//           return <motion.div style={{ scale: scale }} key={index} className=' h-full w-full absolute top-0 flex justify-center items-center'>
//             <div style={{
//               top: top,
//               left: left,
//               width: width,
//               height: height,
//             }}
//               className='relative'
//             >
//               <img src={src} className=' object-cover relative' alt={`raad-image-${index + 1}`} />

//             </div>

//           </motion.div>
//         })}
//       </div>
//     </div>
//   )
// }

// export default Secondscreen

import { useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import { motion } from "framer-motion";

const Secondscreen = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
  const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
  const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
  const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
  const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);

  const pictures = [
    {
      src: "../public/static/images/Pic3.jpg",
      scale: scale4,
      width: "30vw",
      height: "29vh"
    },
    {
      src: "../public/static/images/Pic2.jpg",
      scale: scale5,
      top: "-33vh",
      left: "2.8vw",
      width: "35vw",
      height: "30vh",
    },
    {
      src: "../public/static/images/Pic1.jpg",
      scale: scale6,
      top: "-10vh",
      left: "-27vw",
      width: "22vw",
      height: "48vh",
    },
    {
      src: "../public/static/images/Pic4.jpg",
      scale: scale5,
      left: "27.5vw",
      width: "23vw",
      height: "28vh",
    },
    {
      src: "../public/static/images/Pic5.jpg",
      scale: scale6,
      top: "32.6vh",
      left: "3.1vw",
      width: "27vw",
      height: "32vh",
    },
    {
      src: "../public/static/images/Pic6.jpg",
      scale: scale8,
      top: "33vh",
      left: "-24.5vw",
      width: "26vw",
      height: "33vh",
    },
    {
      src: "../public/static/images/Pic7.jpg",
      scale: scale9,
      top: "33vh",
      left: "25vw",
      width: "15vw",
      height: "33vh",
    },
  ];
  return (
      <div ref={container} className="h-[300vh] relative">
        <div className=" sticky h-[100vh] bg-[#262425] top-0 overflow-hidden">
          {pictures.map(({ src, scale, top, left, width, height }, index) => {
            return (
              <motion.div
                style={{
                  scale: scale,
                }}
                key={index}
                className="el h-full w-full absolute top-0 flex justify-center items-center"
              >
                <div
                  style={{
                    top: top,
                    left: left,
                    width: width,
                    height: height,
                  }}
                  className="img-container relative "
                >
                  <img
                    src={src}
                    className=" object-cover h-full w-full"
                    alt={`Image ${index + 1}`}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
  );
};

export default Secondscreen;