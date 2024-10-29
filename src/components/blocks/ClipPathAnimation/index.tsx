import { useRef, useEffect } from "react"
import video from "../../../assets/videos/abf9ac84-a77ef1de.mp4"

const ClipPathAnimation: React.FC = () => {
  const videoContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (videoContainerRef.current) {
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <section className='section-two h-screen bg-black'>
      <div
        className='absolute video-container w-screen'
        ref={videoContainerRef}
      >
        <video width='100%' height='100%' autoPlay muted>
          <source src={video} type='video/mp4' />
        </video>
      </div>
    </section>
  )
}

export default ClipPathAnimation
