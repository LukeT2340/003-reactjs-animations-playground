import {
  ClipPathAnimation,
  TextAnimationWithScroll,
} from "../../miscellaneous/AnimationComponents"
import video from "../../../assets/videos/abf9ac84-a77ef1de.mp4"

const CombinedAnimations: React.FC = () => {
  return (
    <section className='section-combined-aniamtion h-[6000px] w-screen bg-black relative -z-0'>
      <TextAnimationWithScroll
        text='monkey think'
        animationStartYValue={0}
        animationEndYValue={1000}
        top={"10vh"}
      />
      <TextAnimationWithScroll
        text='monkey    do'
        animationStartYValue={500}
        animationEndYValue={1500}
        top={"70vh"}
      />
      <ClipPathAnimation
        animationStartYValue={0}
        animationEndYValue={2000}
        initialClipPathSize={240}
        maskImage={"url(./src/assets/images/common/triangle.svg)"}
      >
        <video autoPlay muted loop>
          <source src={video} type='video/mp4' />
        </video>
      </ClipPathAnimation>
    </section>
  )
}

export default CombinedAnimations
