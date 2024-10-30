import {
  ClipPathAnimation,
  TextAnimationWithScroll,
} from "../../miscellaneous/AnimationComponents"
import video from "../../../assets/videos/abf9ac84-a77ef1de.mp4"

const CombinedAnimations: React.FC = () => {
  return (
    <section className='section-combined-aniamtion h-[8000px] w-screen bg-black relative -z-0'>
      <TextAnimationWithScroll
        text='monkey    do'
        animationStartYValue={3000}
        animationEndYValue={4000}
        top={"10vh"}
        className='text-[170px] leading-[200px] text-white uppercase font-bold ease-out font-anton tracking-[10px]'
      />
      <ClipPathAnimation
        animationStartYValue={2000}
        animationEndYValue={4000}
        initialClipPathSize={240}
        maskImage={"url(./src/assets/images/common/triangle.svg)"}
      >
        <TextAnimationWithScroll
          text='monkey see'
          animationStartYValue={0}
          animationEndYValue={2000}
          top={"10vh"}
          className='text-[170px] leading-[200px] text-red-500 uppercase font-bold ease-out font-anton tracking-[10px]'
        />
        <video autoPlay muted loop>
          <source src={video} type='video/mp4' />
        </video>
      </ClipPathAnimation>
    </section>
  )
}

export default CombinedAnimations
