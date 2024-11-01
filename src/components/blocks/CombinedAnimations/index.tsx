import ClipPathAnimation from "../../miscellaneous/ClipPathAnimation"
import TextAnimationWithScroll from "../../miscellaneous/TextAnimationWithScroll"
import video from "../../../assets/videos/abf9ac84-a77ef1de.mp4"
import { images } from "../../../assets/data/slides"
import ImageGalleryAnimation from "../../miscellaneous/ImageGalleryAnimation"

const CombinedAnimations: React.FC = () => {
  return (
    <section className='section-combined-aniamtion h-[7000px] w-screen bg-black relative -z-0'>
      <ClipPathAnimation
        animationStartYValue={500}
        animationEndYValue={1000}
        initialClipPathSize={240}
        maskImage={"url(./src/assets/images/common/triangle.svg)"}
      >
        <TextAnimationWithScroll
          text='monkey see'
          animationStartYValue={0}
          animationEndYValue={500}
          top={"10vh"}
          className='text-[250px] leading-[300px] text-red-500 uppercase font-bold ease-out font-anton tracking-[10px]'
        />
        <video autoPlay muted loop width='100%'>
          <source src={video} type='video/mp4' />
        </video>
      </ClipPathAnimation>
      <TextAnimationWithScroll
        text='monkey    do'
        animationStartYValue={800}
        animationEndYValue={1500}
        top={"10vh"}
        className='text-[250px] leading-[300px] text-white uppercase font-bold ease-out font-anton tracking-[10px]'
      />
      <ImageGalleryAnimation
        images={images}
        animationStartYValue={1500}
        animationEndYValue={4000}
        top={"34vh"}
        className='w-[50vw] z-50'
      />
    </section>
  )
}

export default CombinedAnimations
