// import { scroll } from "framer-motion"

import ClipPathAnimation from "../../miscellaneous/ClipPathAnimation"
import TextAnimationWithScroll from "../../miscellaneous/TextAnimationWithScroll"
import video from "../../../../public/assets/video.mp4"
import { images } from "../../../../public/assets/data/slides"
import ImageGalleryAnimation from "../../miscellaneous/ImageGalleryAnimation"

const CombinedAnimations: React.FC = () => {
  // scroll((progress) => console.log("Progress: ", progress)) If I were to do this again I'd use this to track how far we are through the webpage as opposed to window.scrollY

  return (
    <section className='section-combined-aniamtion h-[19500px] w-screen bg-black relative -z-0'>
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
          top={"50vh"}
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
      <TextAnimationWithScroll
        text='Or reveal sections'
        animationStartYValue={5000 / 2}
        animationEndYValue={5800 / 2}
        top={"10vh"}
        className='text-[5vw] leading-[5vw] text-emerald-200 uppercase font-bold ease-out font-drukWide tracking-[10px]'
      />
      <TextAnimationWithScroll
        text='on scroll'
        animationStartYValue={6000 / 2}
        animationEndYValue={6800 / 2}
        top={"30vh"}
        className='text-[5vw] leading-[5vw] text-emerald-200 uppercase font-bold ease-out font-drukWide tracking-[10px]'
      />
      <TextAnimationWithScroll
        text='using any shape'
        animationStartYValue={7000 / 2}
        animationEndYValue={7800 / 2}
        top={"50vh"}
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
        />
        <ImageGalleryAnimation
          images={images}
          animationStartYValue={15500 / 2}
          animationEndYValue={18000}
          top={"45vh"}
          className='w-[40vw]'
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

export default CombinedAnimations
