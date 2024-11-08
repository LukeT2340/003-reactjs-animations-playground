// import { scroll } from "framer-motion"

import ClipPathAnimation from "../../miscellaneous/ClipPathAnimation"
import TextAnimationWithScroll from "../../miscellaneous/TextAnimationWithScroll"
import video from "../../../../public/assets/video.mp4"
import { images } from "../../../../public/assets/data/slides"
import ImageGalleryAnimation from "../../miscellaneous/ImageGalleryAnimation"

const CombinedAnimations: React.FC = () => {
  // scroll((progress) => console.log("Progress: ", progress)) If I were to do this again I'd use this to track how far we are through the webpage as opposed to window.scrollY

  return (
    <section className='section-combined-aniamtion h-[20500px] w-screen bg-black relative -z-0'>
      <ClipPathAnimation
        animationStartYValue={4000}
        animationEndYValue={5500}
        maxClipPathSize={100}
        maskImage={"url(/assets/images/common/triangle.svg)"}
        animationDirection='hide'
      >
        <TextAnimationWithScroll
          text='Text animations on scroll'
          animationStartYValue={0}
          animationEndYValue={800}
          top={"10vh"}
          className='text-[90px] leading-[80px] text-white uppercase font-bold ease-out tracking-[10px]'
        />
        <TextAnimationWithScroll
          text='and'
          animationStartYValue={800}
          animationEndYValue={1600}
          top={"20vh"}
          className='text-[100px] leading-[80px] text-white uppercase font-bold ease-out tracking-[10px]'
        />
        <TextAnimationWithScroll
          text='Hide sections'
          animationStartYValue={1600}
          animationEndYValue={2400}
          top={"30vh"}
          className='text-[200px] leading-[300px] text-white uppercase font-bold ease-out font-anton tracking-[10px]'
        />
        <TextAnimationWithScroll
          text='on scroll'
          animationStartYValue={2000}
          animationEndYValue={2800}
          top={"50vh"}
          className='text-[200px] leading-[300px] text-white uppercase font-bold ease-out font-anton tracking-[10px]'
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
        animationStartYValue={5500}
        animationEndYValue={6000}
        top={"10vh"}
        className='text-[150px] leading-[150px] text-emerald-200 uppercase font-bold ease-out font-anton tracking-[10px]'
      />
      <TextAnimationWithScroll
        text='on scroll'
        animationStartYValue={6000}
        animationEndYValue={6500}
        top={"30vh"}
        className='text-[150px] leading-[150px] text-emerald-200 uppercase font-bold ease-out font-anton tracking-[10px]'
      />
      <TextAnimationWithScroll
        text='using any shape'
        animationStartYValue={6500}
        animationEndYValue={7000}
        top={"50vh"}
        className='text-[150px] leading-[150px] text-emerald-200 uppercase font-bold ease-out font-anton tracking-[10px]'
      />
      <ClipPathAnimation
        animationStartYValue={6500}
        animationEndYValue={9000}
        maxClipPathSize={1050}
        maskImage={"url(/assets/images/common/alien.svg)"}
        animationDirection='reveal'
        className='z-50 w-full'
      >
        <TextAnimationWithScroll
          text='Animate images'
          animationStartYValue={9000}
          animationEndYValue={9500}
          top={"5vh"}
          className='text-[150px] leading-[150px] text-white uppercase font-bold ease-out font-anton tracking-[10px]'
        />
        <TextAnimationWithScroll
          text='on scroll'
          animationStartYValue={10000}
          animationEndYValue={10500}
          top={"25vh"}
          className='text-[150px] leading-[150px] text-white uppercase font-bold ease-out font-anton tracking-[10px]'
        />
        <ImageGalleryAnimation
          images={images}
          animationStartYValue={11000}
          animationEndYValue={19000}
          top={"45vh"}
          className='w-[35vw]'
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
