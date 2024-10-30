import { useRef, useEffect } from "react"

interface ClipPathAnimationProps {
  children: React.ReactNode
  animationStartYValue: number // Pixel value
  animationEndYValue: number // Pixel value
  finalClipPathSize: number // Percentage
  maskImage: string // of form url(./src/assets/images/common/triangle.svg)
}

export const ClipPathAnimation = ({
  children,
  animationStartYValue,
  animationEndYValue,
  finalClipPathSize,
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
          (1 - normalizedScrollVal) * finalClipPathSize
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
  // Value that container is initially translated by (percentage)
  const initialContainerTranslateValue = 350

  // Value that characters are initially translated by (percentage)
  const initialCharacterTranslateValue = 158

  const containerRef = useRef<HTMLDivElement>(null)

  const handleContainerTransform = () => {
    if (containerRef.current) {
      const normalizedScrollY =
        (window.scrollY - animationStartYValue) / animationEndYValue
      const val = +Math.max(
        initialContainerTranslateValue * (1 - normalizedScrollY),
        0
      ).toFixed(2)

      containerRef.current.style.transform = `translateY(${val}%)`
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
        const val = +Math.max(
          0.15 *
            (index + 5) *
            (initialCharacterTranslateValue * (1 - normalizedScrollY)),
          0
        ).toFixed(2)

        htmlElement.style.transform = `translateY(${val}%)`
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
