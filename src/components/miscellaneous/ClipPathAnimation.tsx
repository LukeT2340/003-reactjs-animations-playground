import { useRef, useEffect } from "react"

interface ClipPathAnimationProps {
  children: React.ReactNode
  animationStartYValue: number // Pixel value
  animationEndYValue: number // Pixel value
  initialClipPathSize: number // Percentage
  maskImage: string // of form url(./src/assets/images/common/triangle.svg)
}

export const ClipPathAnimation = ({
  children,
  animationStartYValue,
  animationEndYValue,
  initialClipPathSize,
  maskImage,
}: ClipPathAnimationProps) => {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      const ease = 1.02

      if (containerRef.current) {
        const normalizedScrollY =
          (window.scrollY - animationStartYValue) /
          (animationEndYValue - animationStartYValue)
        const x = normalizedScrollY
        const b = -Math.log(1 / (initialClipPathSize + 10)) / Math.log(ease)
        const y = Math.max(
          (initialClipPathSize + 10) * ease ** (-b * x) - 10,
          0
        )
        containerRef.current.style.maskSize = `${y}%`
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <div
      className='fixed top-0 left-0 right-0 container max-w-full'
      ref={containerRef}
      style={{
        maskImage: maskImage,
        maskRepeat: "no-repeat",
        maskPosition: "50%",
        maskSize: `${initialClipPathSize}%`,
      }}
    >
      {children}
    </div>
  )
}

export default ClipPathAnimation
