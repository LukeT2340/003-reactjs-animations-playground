import ClipPathAnimation from "../../miscellaneous/ClipPathAnimation"
import TextAnimationWithScroll from "../../miscellaneous/TextAnimationWithScroll"
import video from "../../../assets/videos/abf9ac84-a77ef1de.mp4"

const CombinedAnimations: React.FC = () => {
  return (
    <section className='section-combined-aniamtion h-[9000px] w-screen bg-black relative -z-0'>
      <TextAnimationWithScroll
        text='monkey    do'
        animationStartYValue={1000}
        animationEndYValue={1500}
        top={"10vh"}
        className='text-[250px] leading-[300px] text-white uppercase font-bold ease-out font-anton tracking-[10px]'
      />
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
    </section>
  )
}

export default CombinedAnimations
