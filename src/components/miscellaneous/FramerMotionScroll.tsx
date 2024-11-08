import { motion, AnimatePresence } from "framer-motion"
import { PropsWithChildren, useEffect, useState } from "react"

interface Props {
  animationStartYValue: number
  animationEndYValue: number
  initial: { opacity?: number; clipPath?: string; scale?: number }
  animate: { opacity?: number; clipPath?: string; scale?: number }
  exit: { opacity?: number; clipPath?: string; scale?: number }
  transition: { duration?: number; delay?: number; ease?: string }
}

const FramerMotionScroll: React.FC<PropsWithChildren<Props>> = ({
  children,
  animationStartYValue,
  animationEndYValue,
  initial,
  animate,
  exit,
  transition,
}) => {
  const [isVisible, setIsVisible] = useState(false)

  const setDisplay = (x: number) => {
    setIsVisible(x > 0 && x < 1)
  }

  useEffect(() => {
    const handleScroll = () => {
      const normalizedScrollY =
        (window.scrollY - animationStartYValue) /
        (animationEndYValue - animationStartYValue)
      const x = Math.max(0, normalizedScrollY)
      setDisplay(x)
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <AnimatePresence>
      {isVisible && (
        <div className='w-full h-full fixed inset-0'>
          <motion.div
            initial={initial}
            animate={animate}
            exit={exit}
            transition={transition}
            className='w-full h-full'
          >
            {children}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}

export default FramerMotionScroll
