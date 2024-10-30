import { useRef, useEffect } from "react"
import video from "../../../assets/videos/abf9ac84-a77ef1de.mp4"

const ClipPathAnimation: React.FC = () => {
  const videoContainerRef = useRef<HTMLDivElement>(null)
  const animationStartYValue = 2700
  const animationEndYValue = 5500
  const finalClipPathSize = 300

  useEffect(() => {
    const handleScroll = () => {
      if (videoContainerRef.current) {
        const scrollVal = window.scrollY
        const zeroedScrollVal = scrollVal - animationStartYValue
        const normalizedScrollVal =
          zeroedScrollVal / (animationEndYValue - animationStartYValue)
        const clipPathSize = Math.max(
          0,
          (1 - normalizedScrollVal) * finalClipPathSize
        )

        // videoContainerRef.current.style.clipPath = `circle(${clipPathSize}% at 50% 50%)`
        videoContainerRef.current.style.maskSize = `${clipPathSize}%`
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <section className='section-two h-[300vw] bg-black relative -z-20'>
      <div
        className='fixed top-0 left-0 video-container w-screen'
        ref={videoContainerRef}
        style={{
          maskImage: "url(./src/assets/images/common/triangle.svg)",
          maskRepeat: "no-repeat",
          maskPosition: "50%",
        }}
      >
        <video width='100%' height='100%' autoPlay muted loop>
          <source src={video} type='video/mp4' />
        </video>
      </div>
    </section>
  )
}

export default ClipPathAnimation
