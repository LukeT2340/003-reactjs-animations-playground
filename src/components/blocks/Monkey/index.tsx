// import { scroll } from "framer-motion"

import ClipPathAnimation from "../../miscellaneous/ClipPathAnimation"
import TextAnimationWithScroll from "../../miscellaneous/TextAnimationWithScroll"
import video from "../../../../public/assets/video.mp4"
import { images } from "../../../../public/assets/data/slides"
import ImageGalleryAnimation from "../../miscellaneous/ImageGalleryAnimation"
import ImageAnimation from "../../miscellaneous/ImageAnimation"
import monkey from "../../../../public/assets/images/monkey.png"
import FramerMotionScroll from "../../miscellaneous/FramerMotionScroll"

const Monkey: React.FC = () => {
  // scroll((progress) => console.log("Progress: ", progress)) If I were to do this again I'd use this to track how far we are through the webpage as opposed to window.scrollY

  return (
    <section className='section-monkey h-[16500px] w-screen bg-black relative -z-10'>
      <ClipPathAnimation
        animationStartYValue={5500 / 2}
        animationEndYValue={7000 / 2}
        maxClipPathSize={100}
        maskImage={"url(/assets/images/common/triangle.svg)"}
        animationDirection='hide'
      >
        <TextAnimationWithScroll
          text='Text animations on scroll'
          animationStartYValue={0}
          animationEndYValue={800 / 2}
          top={"10vh"}
          className='text-[3vw] leading-[3vw] text-white uppercase font-drukWide font-bold ease-out tracking-[10px]'
        />
        <TextAnimationWithScroll
          text='and'
          animationStartYValue={1000 / 2}
          animationEndYValue={1800 / 2}
          top={"20vh"}
          className='text-[3vw] leading-[3vw] text-white font-drukWide uppercase font-bold ease-out tracking-[10px]'
        />
        <TextAnimationWithScroll
          text='Hide sections'
          animationStartYValue={2000 / 2}
          animationEndYValue={2800 / 2}
          top={"30vh"}
          className='text-[5vw] leading-[5vw] text-white uppercase font-bold ease-out font-drukWide tracking-[10px]'
        />
        <TextAnimationWithScroll
          text='on scroll'
          animationStartYValue={3000 / 2}
          animationEndYValue={3800 / 2}
          top={"40vh"}
          className='text-[5vw] leading-[5vw] text-white uppercase font-bold ease-out font-drukWide tracking-[10px]'
        />
        <video
          autoPlay
          muted
          loop
          width='100%'
          className='object-cover w-full h-full'
        >
          <source src={video} type='video/mp4' />
        </video>
      </ClipPathAnimation>
      <ImageAnimation
        image={monkey}
        animationStartYValue={5400 / 2}
        animationEndYValue={6000 / 2}
        className='w-[70vw]'
      />
      <TextAnimationWithScroll
        text='Or reveal new'
        animationStartYValue={5000 / 2}
        animationEndYValue={5800 / 2}
        top={"50vh"}
        className='text-[5vw] leading-[5vw] text-emerald-200 uppercase font-bold ease-out font-drukWide tracking-[10px]'
      />
      <TextAnimationWithScroll
        text='sections on scroll'
        animationStartYValue={6000 / 2}
        animationEndYValue={6800 / 2}
        top={"60vh"}
        className='text-[5vw] leading-[5vw] text-emerald-200 uppercase font-bold ease-out font-drukWide tracking-[10px]'
      />
      <TextAnimationWithScroll
        text='using any shape'
        animationStartYValue={7000 / 2}
        animationEndYValue={7800 / 2}
        top={"70vh"}
        className='text-[5vw] leading-[5vw] text-emerald-200 uppercase font-bold ease-out font-drukWide tracking-[10px]'
      />
      <ClipPathAnimation
        animationStartYValue={9000 / 2}
        animationEndYValue={12500 / 2}
        maxClipPathSize={1050}
        maskImage={"url(/assets/images/common/alien.svg)"}
        animationDirection='reveal'
        className='z-50 w-full'
      >
        <TextAnimationWithScroll
          text='Image Gallery'
          animationStartYValue={12500 / 2}
          animationEndYValue={13300 / 2}
          top={"15vh"}
          className='text-[5vw] leading-[5vw] text-white uppercase font-bold ease-out font-drukWide tracking-[10px]'
        />
        <TextAnimationWithScroll
          text='work in progress'
          animationStartYValue={13000 / 2}
          animationEndYValue={13800 / 2}
          top={"25vh"}
          className='text-[2vw] leading-[2vw] text-white uppercase font-bold ease-out font-drukWide tracking-[10px]'
        />
        {/* <TextAnimationWithScroll
          text='Animate images'
          animationStartYValue={12500 / 2}
          animationEndYValue={13300 / 2}
          top={"15vh"}
          className='text-[5vw] leading-[5vw] text-white uppercase font-bold ease-out font-drukWide tracking-[10px]'
        />
        <TextAnimationWithScroll
          text='on scroll'
          animationStartYValue={13500 / 2}
          animationEndYValue={14300 / 2}
          top={"25vh"}
          className='text-[5vw] leading-[5vw] text-white uppercase font-bold ease-out font-drukWide tracking-[10px]'
        /> */}
        <FramerMotionScroll
          animationStartYValue={7000}
          animationEndYValue={13000}
          initial={{
            clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)",
          }}
          animate={{
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
          }}
          exit={{ clipPath: "polygon(0 0, 100% 0, 100% 0, 0% 0)" }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
        >
          <h1 className='text-white text-[40px] leading-[50px] font-drukWide'>
            test
          </h1>
        </FramerMotionScroll>
        <ImageGalleryAnimation
          images={images}
          animationStartYValue={7000}
          animationEndYValue={13000}
          top={"35vh"}
          className='w-[40vw]'
        />
        <TextAnimationWithScroll
          text='Let us know what other animations we should try and replicate!'
          animationStartYValue={12500}
          animationEndYValue={13000}
          top={"50vh"}
          className='text-[1.3vw] leading-[1.3vw] text-white font-bold ease-out font-drukWide tracking-[10px]'
        />
        <video
          autoPlay
          muted
          loop
          width='100%'
          className='object-cover w-full h-full'
        >
          <source src={video} type='video/mp4' />
        </video>
      </ClipPathAnimation>
    </section>
  )
}

export default Monkey
