import { motion } from "framer-motion"
import FramerMotionScroll from "../../miscellaneous/FramerMotionScroll"
import one from "../../../../public/assets/images/desktop/hero-parallax-1.png"
import two from "../../../../public/assets/images/desktop/hero-parallax-2.png"
import three from "../../../../public/assets/images/desktop/hero-parallax-3.jpg"

const Aston: React.FC = () => {
  return (
    <section className='aston relative h-[3000px] z-10 bg-[#185444]'>
      <FramerMotionScroll
        animationStartYValue={17000}
        animationEndYValue={30000}
        initial={{ clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)" }}
        animate={{
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
        }}
        exit={{ clipPath: "polygon(0 0, 100% 0, 100% 0, 0% 0)" }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
      >
        <div className='relative w-full h-full'>
          <div className='absolute left-[10vw] bottom-[10vh] text-[95px] leading-[105px] text-white font-domain z-30'>
            <motion.h1
              initial={{
                y: 150,
                opacity: 0,
              }}
              animate={{
                y: 0,
                opacity: 1,
              }}
              transition={{ duration: 1.5, delay: 0.7, ease: "easeInOut" }}
            >
              Collect.
            </motion.h1>
            <motion.h1
              initial={{
                y: 150,
                opacity: 0,
              }}
              animate={{
                y: 0,
                opacity: 1,
              }}
              transition={{ duration: 1.5, delay: 0.7, ease: "easeInOut" }}
            >
              Convert. Pay
            </motion.h1>
            <motion.h6
              initial={{
                y: 150,
                opacity: 0,
              }}
              animate={{
                y: 0,
                opacity: 1,
              }}
              transition={{ duration: 1.5, delay: 0.9, ease: "easeInOut" }}
              className='text-[20px] leading-[30px] mt-[30px]'
            >
              Scroll to explore
            </motion.h6>
          </div>
          <motion.div
            className='w-full h-full absolute inset-0 z-20'
            initial={{
              scale: 1.3,
            }}
            animate={{
              scale: 1,
            }}
            exit={{
              scale: 1.3,
              opacity: 0,
            }}
            transition={{ duration: 1.4, delay: 0.2, ease: "easeInOut" }}
          >
            <img src={one} alt='none' className='w-full h-full' />
          </motion.div>
          <motion.div
            className='w-full h-full absolute inset-0 z-10'
            initial={{
              scale: 1.4,
            }}
            animate={{
              scale: 1,
            }}
            exit={{
              scale: 1.4,
              opacity: 0,
            }}
            transition={{ duration: 1.4, delay: 0.2, ease: "easeInOut" }}
          >
            <img src={two} alt='none' className='w-full h-full' />
          </motion.div>
          <motion.div
            className='w-full h-full absolute inset-0 z-0'
            initial={{
              scale: 1.2,
            }}
            animate={{
              scale: 1,
            }}
            exit={{
              scale: 1.2,
              opacity: 0,
            }}
            transition={{ duration: 1.4, delay: 0.2, ease: "easeInOut" }}
          >
            <img src={three} alt='none' className='w-full h-full' />
          </motion.div>
        </div>
      </FramerMotionScroll>
    </section>
  )
}

export default Aston
