import {
  ClipPathAnimation,
  TextAnimationWithScroll,
} from "../../miscellaneous/AnimationComponents"
import video from "../../../assets/videos/abf9ac84-a77ef1de.mp4"

const CombinedAnimations: React.FC = () => {
  return (
    <section className='section-combined-aniamtion h-[300vw] w-screen bg-black relative -z-0'>
      <TextAnimationWithScroll
        text='monkey think'
        animationStartYValue={0}
        animationEndYValue={3000}
        top={"10vh"}
      />
      <TextAnimationWithScroll
        text='monkey think'
        animationStartYValue={0}
        animationEndYValue={3000}
        top={"70vh"}
      />
      <ClipPathAnimation
        animationStartYValue={2000}
        animationEndYValue={3000}
        finalClipPathSize={300}
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
