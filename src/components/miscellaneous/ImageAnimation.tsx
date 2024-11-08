import { useEffect, useRef } from "react"

interface ImageAnimationProps {
  image: string
  animationStartYValue: number // Pixel value
  animationEndYValue: number // Pixel value
  className?: string
}

export const ImageAnimation = ({
  image,
  animationStartYValue,
  animationEndYValue,
  className,
}: ImageAnimationProps) => {
  // Higher values give more easeOut.
  const ease = 0.99

  // Initially translated by this value
  const initial = 100

  const containerRef = useRef<HTMLDivElement>(null)

  const handleContainerTransform = (x: number) => {
    const b = -Math.log(1 / initial) / Math.log(ease)
    const y = initial * ease ** (-b * x)

    if (containerRef.current) {
      containerRef.current.style.transform = `translateY(${y}%)`
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      const normalizedScrollY =
        (window.scrollY - animationStartYValue) /
        (animationEndYValue - animationStartYValue)
      const x = Math.max(0, normalizedScrollY)
      handleContainerTransform(x)
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <div className='fixed z-20 w-screen bottom-0'>
      <div
        className='heading-container overflow-hidden flex justify-center'
        ref={containerRef}
        style={{
          transform: `translateY(100%)`,
        }}
      >
        <img src={image} alt='image' className={className} />
      </div>
    </div>
  )
}

export default ImageAnimation
