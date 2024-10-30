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
      if (containerRef.current) {
        const scrollVal = window.scrollY
        const zeroedScrollVal = scrollVal - animationStartYValue
        const normalizedScrollVal =
          zeroedScrollVal / (animationEndYValue - animationStartYValue)
        const clipPathSize = Math.max(
          0,
          (1 - normalizedScrollVal) * initialClipPathSize
        )

        containerRef.current.style.maskSize = `${clipPathSize}%`
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

interface TextAnimationWithScrollProps {
  text: string
  animationStartYValue: number // Pixel value
  animationEndYValue: number // Pixel value
  top: string
}

export const TextAnimationWithScroll = ({
  text,
  animationStartYValue,
  animationEndYValue,
  top,
}: TextAnimationWithScrollProps) => {
  // Higher values give more easeOut
  const ease = 1.02

  const containerRef = useRef<HTMLDivElement>(null)

  const handleContainerTransform = (x: number) => {
    if (containerRef.current) {
      const easedVal = 100 * ease ** (-100 * x)
      containerRef.current.style.transform = `translateY(${easedVal}%)`
    }
  }

  const handleCharacterTransform = (x: number) => {
    if (containerRef.current) {
      const headingElements = containerRef.current.children

      let index = 0
      for (const element of headingElements) {
        const htmlElement = element as HTMLElement

        const easedVal = 100 * ease ** (-100 * x)
        htmlElement.style.transform = `translateY(${(index + 1) * easedVal}%)`
        index++
      }
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      const normalizedScrollY =
        (window.scrollY - animationStartYValue) / animationEndYValue
      const x = Math.max(0, normalizedScrollY)

      handleContainerTransform(x)
      handleCharacterTransform(x)
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <div className='fixed z-20 w-full' style={{ top }}>
      <div
        className='heading-container overflow-hidden flex justify-center'
        ref={containerRef}
        style={{
          transform: `translateY(100%)`,
        }}
      >
        {text.split("").map((char: string, index: number) => (
          <h1
            className='inline-block text-[200px] leading-[160px] text-white uppercase font-bold ease-out'
            key={index}
            style={{
              transform: `translateY(100%)`,
            }}
          >
            {char === " " ? "\u00A0" : char}
          </h1>
        ))}
      </div>
    </div>
  )
}
