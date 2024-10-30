import { useEffect, useRef } from "react"

const TextAnimateWithScroll = () => {
  // Animation ends at this scrollY value
  const scrollMaxValue = 2000

  // Value that container is initially translated by (percentage)
  const initialContainerTranslateValue = 350

  // Value that characters are initially translated by (percentage)
  const initialCharacterTranslateValue = 158

  const parentContainerRef = useRef<HTMLDivElement>(null)

  const handleContainerTransform = () => {
    if (parentContainerRef.current) {
      // Normalize window.scrollY to have a max of 1.0 in section
      const normalizedScrollY = window.scrollY / scrollMaxValue
      const val = +Math.max(
        initialContainerTranslateValue * (1 - normalizedScrollY),
        0
      ).toFixed(2)

      parentContainerRef.current.style.transform = `translateY(${val}%)`
    }
  }

  const handleCharacterTransform = () => {
    if (parentContainerRef.current) {
      const headingElements = parentContainerRef.current.children

      // Normalize window.scrollY to have a max of 1.0 in section
      const normalizedScrollY = window.scrollY / scrollMaxValue

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
    <section className='text-animate-with-scroll relative flex justify-center items-start h-[300vh] bg-black -z-10 overflow-hidden pointer-events-none'>
      <div className='fixed top-[100px]'>
        <div
          className='heading-container overflow-hidden'
          ref={parentContainerRef}
          style={{
            transform: `translateY(${initialContainerTranslateValue}%)`,
          }}
        >
          {"Monkey-Think".split("").map((char: string, index: number) => (
            <h1
              className='inline-block text-[200px] leading-[160px] text-white uppercase font-bold ease-out'
              key={index}
              style={{
                transform: `translateY(${initialCharacterTranslateValue}%)`,
              }}
            >
              {char}
            </h1>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TextAnimateWithScroll