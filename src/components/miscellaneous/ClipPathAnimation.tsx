import { useRef, useEffect } from "react"

interface ClipPathAnimationProps {
  children: React.ReactNode // Stuff we want inside the mask shape
  animationStartYValue: number // Pixel value
  animationEndYValue: number // Pixel value
  maxClipPathSize: number // Percentage
  maskImage: string // of form url(./src/assets/images/common/triangle.svg)
  animationDirection: string // If animationDirection is "hide", it will hide whatever is inside it. If it is set to anything else it will reveal
  className: string
}

export const ClipPathAnimation = ({
  children,
  animationStartYValue,
  animationEndYValue,
  maxClipPathSize,
  maskImage,
  animationDirection,
  className,
}: ClipPathAnimationProps) => {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      const ease = 1.02

      if (containerRef.current) {
        const normalizedScrollY =
          (window.scrollY - animationStartYValue) /
          (animationEndYValue - animationStartYValue)
        const x =
          animationDirection === "hide"
            ? normalizedScrollY
            : 1 - normalizedScrollY

        const b = -Math.log(1 / (maxClipPathSize + 10)) / Math.log(ease)
        const y = Math.max((maxClipPathSize + 10) * ease ** (-b * x) - 10, 0)
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
      className={`${className} fixed top-0 left-0 right-0 w-full h-full`}
      ref={containerRef}
      style={{
        maskImage: maskImage,
        maskRepeat: "no-repeat",
        maskPosition: "50%",
        maskSize: `${maxClipPathSize}%`,
      }}
    >
      {children}
    </div>
  )
}

export default ClipPathAnimation
