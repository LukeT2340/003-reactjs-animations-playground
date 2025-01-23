import { Canvas } from "@react-three/fiber"
import { animate } from "motion"
import { useMotionValue } from "motion/react"
import { useEffect, useRef } from "react"
import RevealImage from "./RevealImage"
import { useInView } from "react-intersection-observer"
import gsap from "gsap"
import { SplitText } from "gsap/all"

gsap.registerPlugin(SplitText)

function ShaderImageTransitionTwo({ image, text, smallerText }) {
  const textContainerRef = useRef(null)

  const { ref, inView, entry } = useInView({
    threshold: 0.6,
  })

  const revealProgress = useMotionValue(1)

  const handleReveal = () => {
    animate(revealProgress, inView ? 1 : 0, {
      duration: 1.5,
      ease: "easeInOut",
    })
  }

  function animateText() {
    if (textContainerRef.current) {
      const quotes = textContainerRef.current.querySelectorAll("p")
      quotes.forEach((quote, index) => {
        quote.split = new SplitText(quote, {
          type: "chars,lines",
          linesClass: "split-line",
        })

        // Set up the anim
        quote.anim = gsap.from(quote.split.chars, {
          scrollTrigger: {
            trigger: quote,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
          duration: 0.5,
          ease: "easeOut",
          yPercent: 30,
          autoAlpha: 0,
          stagger: 0.07,
          delay: 0.4 + index * 0.2,
        })
      })
    }
  }

  useEffect(() => {
    handleReveal()
    if (inView) {
      animateText()
    }
  }, [inView])

  return (
    <div className='relative' id={text} ref={ref}>
      <Canvas
        className='z-10'
        style={{
          width: "100vw",
          height: "80vh",
          backgroundColor: true ? "#000" : "#F9FAF7",
        }}
      >
        <RevealImage
          imageTexture={image}
          revealProgress={revealProgress}
          isFullScreen={false}
        />
      </Canvas>
      <div
        ref={textContainerRef}
        className={`z-50 absolute left-[30%] top-[60%] transition-opacity duration-1000 ease-in-out text-white ${
          inView ? "opacity-100" : "opacity-0"
        }`}
        data-scroll='true'
        data-scroll-speed='0.15'
      >
        <p className='pb-[30px] text-[60px]'>{text}</p>
        <p className='text-[30px]'>{smallerText}</p>
      </div>
    </div>
  )
}

export default ShaderImageTransitionTwo
