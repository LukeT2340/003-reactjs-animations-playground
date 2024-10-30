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
  // Value that container is initially translated by initially - percentage
  const initialContainerTranslateValue = 550

  // Value that the first character will be translated by initially. Other characters will be translated by more - percentage
  const initialCharacterTranslateValue = 250

  // Difference in animation degree between characters
  const stagger = 1.3

  // An ease of 1 is linear. Higher values gives more easeOut
  const ease = 1.2

  const containerRef = useRef<HTMLDivElement>(null)

  const handleContainerTransform = () => {
    if (containerRef.current) {
      const normalizedScrollY =
        (window.scrollY - animationStartYValue) / animationEndYValue

      const easedVal =
        initialContainerTranslateValue *
        Math.exp(-5 * Math.max(0, normalizedScrollY))
      containerRef.current.style.transform = `translateY(${easedVal}%)`
    }
  }

  const handleCharacterTransform = () => {
    if (containerRef.current) {
      const headingElements = containerRef.current.children
      const normalizedScrollY =
        (window.scrollY - animationStartYValue) / animationEndYValue
      let index = 0
      for (const element of headingElements) {
        const htmlElement = element as HTMLElement
        const easedVal =
          (index + 1) *
          stagger *
          initialCharacterTranslateValue *
          ease ** (-12 * ease * Math.max(0, normalizedScrollY))
        htmlElement.style.transform = `translateY(${easedVal}%)`
        index++
      }
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      handleContainerTransform()
      handleCharacterTransform()
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
          transform: `translateY(${initialContainerTranslateValue}%)`,
        }}
      >
        {text.split("").map((char: string, index: number) => (
          <h1
            className='inline-block text-[200px] leading-[160px] text-white uppercase font-bold ease-out'
            key={index}
            style={{
              transform: `translateY(${initialCharacterTranslateValue}%)`,
            }}
          >
            {char === " " ? "\u00A0" : char}
          </h1>
        ))}
      </div>
    </div>
  )
}
