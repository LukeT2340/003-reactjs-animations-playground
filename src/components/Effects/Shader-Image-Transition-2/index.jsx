import { Canvas } from "@react-three/fiber"
import { animate } from "motion"
import { useMotionValue } from "motion/react"
import { useEffect } from "react"
import RevealImage from "./RevealImage"
import { useInView } from "react-intersection-observer"

function ShaderImageTransitionTwo({ image }) {
  // FULLSCREEN MODE
  // const [isFullScreen, setIsFullScreen] = useState(false)
  // const handleFullScreen = () => setIsFullScreen(!isFullScreen)

  // INTERSECTION OBSERVER
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0.6,
  })

  // DARK/LIGHT MODE
  // const [isDarkMode, setIsDarkMode] = useState(true)
  // const handleDarkMode = () => setIsDarkMode(!isDarkMode)

  // REVEAL PROGRESS ANIMATION
  const revealProgress = useMotionValue(1)

  const handleReveal = () => {
    animate(revealProgress, inView ? 1 : 0, {
      duration: 1.5,
      ease: "easeInOut",
    })
  }

  useEffect(() => {
    handleReveal()
  }, [inView])

  return (
    <>
      <Canvas
        className='z-10'
        style={{
          width: "100vw",
          height: "100vh",
          backgroundColor: true ? "#000" : "#F9FAF7",
        }}
        ref={ref}
      >
        <RevealImage
          imageTexture={image}
          revealProgress={revealProgress}
          isFullScreen={false}
        />
      </Canvas>
    </>
  )
}

export default ShaderImageTransitionTwo
