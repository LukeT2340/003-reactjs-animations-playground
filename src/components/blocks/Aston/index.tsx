import FramerMotionScroll from "../../miscellaneous/FramerMotionScroll"
import one from "../../../../public/assets/images/desktop/hero-parallax-1.png"
import two from "../../../../public/assets/images/desktop/hero-parallax-2.png"
import three from "../../../../public/assets/images/desktop/hero-parallax-3.jpg"

const Aston: React.FC = () => {
  return (
    <section className='aston relative h-[3000px] z-10 bg-[#185444]'>
      <FramerMotionScroll
        animationStartYValue={17000}
        animationEndYValue={18000}
        initial={{ clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)" }}
        animate={{
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
        }}
        exit={{ clipPath: "polygon(0 0, 100% 0, 100% 0, 0% 0)" }}
        transition={{ duration: 1.5, delay: 0.2, ease: "easeInOut" }}
      >
        <div className='relative w-full h-full'>
          <div className='w-full h-full absolute inset-0 z-10'>
            <FramerMotionScroll
              animationStartYValue={17000}
              animationEndYValue={18000}
              initial={{
                scale: 1.25,
              }}
              animate={{
                scale: 1,
              }}
              exit={{
                scale: 1.25,
              }}
              transition={{ duration: 1.5, delay: 0.2, ease: "easeInOut" }}
            >
              <img src={one} alt='none' className='w-full h-full' />
            </FramerMotionScroll>
          </div>
          <div className='w-full h-full absolute inset-0 z-0'>
            <FramerMotionScroll
              animationStartYValue={17000}
              animationEndYValue={18000}
              initial={{
                scale: 1.3,
              }}
              animate={{
                scale: 1,
              }}
              exit={{
                scale: 1.3,
              }}
              transition={{ duration: 1.5, delay: 0.2, ease: "easeInOut" }}
            >
              <img src={two} alt='none' className='w-full h-full' />
            </FramerMotionScroll>
          </div>
          <div className='w-full h-full absolute inset-0 z-0'>
            <FramerMotionScroll
              animationStartYValue={17000}
              animationEndYValue={18000}
              initial={{
                scale: 1.2,
              }}
              animate={{
                scale: 1,
              }}
              exit={{
                scale: 1.2,
              }}
              transition={{ duration: 1.5, delay: 0.2, ease: "easeInOut" }}
            >
              <img src={three} alt='none' className='w-full h-full' />
            </FramerMotionScroll>
          </div>
        </div>
      </FramerMotionScroll>
    </section>
  )
}

export default Aston
