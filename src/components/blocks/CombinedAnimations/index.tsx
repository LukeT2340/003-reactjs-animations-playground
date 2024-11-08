// import { scroll } from "framer-motion"

import ClipPathAnimation from "../../miscellaneous/ClipPathAnimation"
import TextAnimationWithScroll from "../../miscellaneous/TextAnimationWithScroll"
import video from "../../../../public/assets/video.mp4"
import { images } from "../../../../public/assets/data/slides"
import ImageGalleryAnimation from "../../miscellaneous/ImageGalleryAnimation"

const CombinedAnimations: React.FC = () => {
  // scroll((progress) => console.log("Progress: ", progress)) If I were to do this again I'd use this to track how far we are through the webpage as opposed to window.scrollY

  return (
    <section className='section-combined-aniamtion h-[22500px] w-screen bg-black relative -z-0'>
      <ClipPathAnimation
        animationStartYValue={5500}
        animationEndYValue={7000}
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
          animationStartYValue={1000}
          animationEndYValue={1800}
          top={"20vh"}
          className='text-[100px] leading-[80px] text-white uppercase font-bold ease-out tracking-[10px]'
        />
        <TextAnimationWithScroll
          text='Hide sections'
          animationStartYValue={2000}
          animationEndYValue={2800}
          top={"30vh"}
          className='text-[200px] leading-[300px] text-white uppercase font-bold ease-out font-anton tracking-[10px]'
        />
        <TextAnimationWithScroll
          text='on scroll'
          animationStartYValue={3000}
          animationEndYValue={3800}
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
        animationStartYValue={5000}
        animationEndYValue={5800}
        top={"10vh"}
        className='text-[150px] leading-[150px] text-emerald-200 uppercase font-bold ease-out font-anton tracking-[10px]'
      />
      <TextAnimationWithScroll
        text='on scroll'
        animationStartYValue={6000}
        animationEndYValue={6800}
        top={"30vh"}
        className='text-[150px] leading-[150px] text-emerald-200 uppercase font-bold ease-out font-anton tracking-[10px]'
      />
      <TextAnimationWithScroll
        text='using any shape'
        animationStartYValue={7000}
        animationEndYValue={7800}
        top={"50vh"}
        className='text-[150px] leading-[150px] text-emerald-200 uppercase font-bold ease-out font-anton tracking-[10px]'
      />
      <ClipPathAnimation
        animationStartYValue={9000}
        animationEndYValue={12500}
        maxClipPathSize={1050}
        maskImage={"url(/assets/images/common/alien.svg)"}
        animationDirection='reveal'
        className='z-50 w-full'
      >
        <TextAnimationWithScroll
          text='Animate images'
          animationStartYValue={12500}
          animationEndYValue={13300}
          top={"5vh"}
          className='text-[150px] leading-[150px] text-white uppercase font-bold ease-out font-anton tracking-[10px]'
        />
        <TextAnimationWithScroll
          text='on scroll'
          animationStartYValue={13500}
          animationEndYValue={14300}
          top={"25vh"}
          className='text-[150px] leading-[150px] text-white uppercase font-bold ease-out font-anton tracking-[10px]'
        />
        <ImageGalleryAnimation
          images={images}
          animationStartYValue={15500}
          animationEndYValue={21000}
          top={"45vh"}
          className='h-[50vh]'
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
