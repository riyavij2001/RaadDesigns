import Pic1 from './Images/Pic1.jpg'
import Pic2 from './Images/Pic2.jpg'
import Pic3 from './Images/Pic3.jpg'
import Pic4 from './Images/Pic4.jpg'
import Pic5 from './Images/Pic5.jpg'
import Pic6 from './Images/Pic6.jpg'
import Pic7 from './Images/Pic7.jpg'
import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';


function Secondscreen() {

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  })

  const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4])
  const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5])
  const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6])
  const scale7 = useTransform(scrollYProgress, [0, 1], [1, 7])
  const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8])
  const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9])

  return (
    <div ref={container} className=' h-[300vh] bg-red-600 relative'>
      <div className=' sticky bg-[#262425] h-[100vh] '>
        <div className=' flex items-center justify-center'>
          
          <motion.div style={{ scale: scale5 }} className=' w-[25vw] h-[25vh]   p-4'>
            <img src={Pic1} className=' object-cover'></img>
          </motion.div>

          <motion.div style={{ scale: scale4 }} className=' w-[35vw] h-[30vh]    p-4'>
            <img src={Pic5} className=' object-cover '></img>
          </motion.div>

          <motion.div style={{ scale: scale6 }} className=' w-[20vw] h-[45vh]    p-4'>
            <img src={Pic2} className=' object-cover '></img>
          </motion.div>

          <motion.div style={{ scale: scale7 }} className=' w-[25vw] h-[25vh] top-[2.5vh] left-[5vw]    p-4 '>
            <img src={Pic3} className=' object-cover '></img>
          </motion.div>

          <motion.div style={{ scale: scale8 }} className=' w-[20vw] h-[25vh] p-4 '>
            <img src={Pic4} className=' object-cover '></img>
          </motion.div>

          <motion.div style={{ scale: scale9 }} className=' top-[22.5vw] left-[25.5vw] w-[30vw] h-[25vh]    p-4 '>
            <img src={Pic7} className=' object-cover '></img>
          </motion.div>

        </div>
      </div>

    </div>
  )
}

export default Secondscreen
