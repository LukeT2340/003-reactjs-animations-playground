import { useEffect } from "react"
import lottie from "lottie-web"

const VideoWithScroll = () => {
  useEffect(() => {
    const container = document.getElementById("lottie-container")

    if (!container) return

    // Load the Lottie animation
    const animation = lottie.loadAnimation({
      container, // The container element
      renderer: "svg", // Render as SVG
      loop: false, // Disable looping, as we'll control it with scroll
      autoplay: false, // Disable autoplay
      path: "/assets/images/flower.json", // Path to your Lottie JSON file
    })

    // Function to update animation progress based on scroll
    const updateAnimationProgress = () => {
      const scrollPosition = window.scrollY // Current scroll position
      const scrollHeight = document.body.scrollHeight - window.innerHeight // Total scrollable height
      const scrollFraction = scrollPosition / scrollHeight // Fraction of total scroll
      const animationFrame = scrollFraction * animation.totalFrames // Map scroll to animation frames
      animation.goToAndStop(animationFrame, true) // Update animation to the calculated frame
    }

    // Attach scroll event listener
    window.addEventListener("scroll", updateAnimationProgress)

    // Cleanup on unmount
    return () => {
      animation.destroy() // Destroy the Lottie instance
      window.removeEventListener("scroll", updateAnimationProgress)
    }
  }, [])
  return (
    <section className='h-screen w-screen fixed top-0'>
      <div className='fixed left-1/2 top-1/2'>test</div>
      <div id='lottie-container' className='h-screen w-screen'></div>
    </section>
  )
}

export default VideoWithScroll
