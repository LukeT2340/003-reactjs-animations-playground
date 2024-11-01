import ClipPathAnimation from "../../miscellaneous/ClipPathAnimation"
import TextAnimationWithScroll from "../../miscellaneous/TextAnimationWithScroll"
import video from "../../../assets/videos/abf9ac84-a77ef1de.mp4"
import { images } from "../../../assets/data/slides"
import ImageGalleryAnimation from "../../miscellaneous/ImageGalleryAnimation"

const CombinedAnimations: React.FC = () => {
  return (
    <section className='section-combined-aniamtion h-[7500px] w-screen bg-black relative -z-0'>
      <ClipPathAnimation
        animationStartYValue={1200}
        animationEndYValue={1800}
        maxClipPathSize={100}
        maskImage={"url(./src/assets/images/common/triangle.svg)"}
        animationDirection='hide'
      >
        <TextAnimationWithScroll
          text='COOL TEXT ANIMATION'
          animationStartYValue={0}
          animationEndYValue={500}
          top={"10vh"}
          className='text-[150px] leading-[300px] text-white uppercase font-bold ease-out font-wetPaint tracking-[10px]'
        />
        <TextAnimationWithScroll
          text='hiding section'
          animationStartYValue={500}
          animationEndYValue={1000}
          top={"30vh"}
          className='text-[200px] leading-[300px] text-white uppercase font-bold ease-out font-anton tracking-[10px]'
        />
        <video autoPlay muted loop width='100%'>
          <source src={video} type='video/mp4' />
        </video>
      </ClipPathAnimation>
      <TextAnimationWithScroll
        text='media gallery'
        animationStartYValue={1500}
        animationEndYValue={2000}
        top={"10vh"}
        className='text-[250px] leading-[300px] text-white uppercase font-bold ease-out font-anton tracking-[10px]'
      />
      <ImageGalleryAnimation
        images={images}
        animationStartYValue={1500}
        animationEndYValue={4000}
        top={"34vh"}
        className='w-[50vw]'
      />
      <ClipPathAnimation
        animationStartYValue={3700}
        animationEndYValue={5000}
        maxClipPathSize={100}
        maskImage={"url(./src/assets/images/common/alien.svg)"}
        animationDirection='reveal'
        className='z-50'
      >
        <TextAnimationWithScroll
          text='Reveal section'
          animationStartYValue={5000}
          animationEndYValue={6000}
          top={"10vh"}
          className='text-[250px] leading-[300px] text-emerald-200 uppercase font-bold ease-out font-anton tracking-[10px]'
        />
        <video autoPlay muted loop width='100%'>
          <source src={video} type='video/mp4' />
        </video>
      </ClipPathAnimation>
    </section>
  )
}

export default CombinedAnimations
