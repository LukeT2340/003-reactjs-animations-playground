import { useEffect, useRef } from "react"

interface TextAnimationWithScrollProps {
  text: string
  animationStartYValue: number // Pixel value
  animationEndYValue: number // Pixel value
  top: string
  className?: string
}

export const TextAnimationWithScroll = ({
  text,
  animationStartYValue,
  animationEndYValue,
  top,
  className,
}: TextAnimationWithScrollProps) => {
  // Higher values give more easeOut.
  const ease = 2.5

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

  const handleCharacterTransform = (x: number) => {
    if (containerRef.current) {
      const headingElements = containerRef.current.children

      let index = 0
      for (const element of headingElements) {
        const htmlElement = element as HTMLElement
        const b = ((-1 / (index + 1)) * Math.log(1 / initial)) / Math.log(ease)
        const y = initial * ease ** (-b * (index + 1) * x)
        htmlElement.style.transform = `translateY(${(index + 1) * y}%)`
        index++
      }
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      const normalizedScrollY =
        (window.scrollY - animationStartYValue) /
        (animationEndYValue - animationStartYValue)
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
            key={index}
            style={{
              transform: `translateY(100%)`,
              display: "inline-block",
            }}
            className={className}
          >
            {char === " " ? "\u00A0" : char}
          </h1>
        ))}
      </div>
    </div>
  )
}

export default TextAnimationWithScroll
