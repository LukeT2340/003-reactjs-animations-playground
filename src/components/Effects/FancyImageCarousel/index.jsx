import React, { useEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import ShaderImageTransitionTwo from "../Shader-Image-Transition-2/index.jsx"
import SwiperCustom from "./SwiperCustom.jsx"
import CursorImageBlurEffect from "../CursorImageBlurEffect"

gsap.registerPlugin(ScrollTrigger)

const FancyImageCarousel = () => {
  //   useEffect(() => {
  //     const sections = gsap.utils.toArray(".panel")

  //     gsap.to(sections, {
  //       xPercent: -100 * (sections.length - 1),
  //       ease: "none",
  //       scrollTrigger: {
  //         trigger: ".carousel-container",
  //         pin: true,
  //         scrub: 1,
  //         snap: 1 / (sections.length - 1),
  //         end: () =>
  //           "+=" + document.querySelector(".carousel-container").offsetWidth,
  //       },
  //     })
  //   }, [])
  const Images = [
    // <ShaderImageTransitionTwo
    //   image={"/assets/images/textureupscaled.webp"}
    //   text={"Image One"}
    //   smallerText='SubText'
    // />,
    // <ShaderImageTransitionTwo
    //   image={"/assets/images/head.jpg"}
    //   text={"Image Two"}
    //   smallerText='SubText'
    // />,
    // <ShaderImageTransitionTwo
    //   image={"/assets/images/phone.jpg"}
    //   text={"Image Three"}
    //   smallerText='SubText'
    // />,
    // <CursorImageBlurEffect />,
  ]

  return (
    <section className='relative z-50 bg-black'>
      <ShaderImageTransitionTwo
        image={"/assets/images/textureupscaled.webp"}
        text={"Image One"}
        smallerText='Sub Text'
      />
      <ShaderImageTransitionTwo
        image={"/assets/images/head.jpg"}
        text={"Image Two"}
        smallerText='Sub Text'
      />
      <ShaderImageTransitionTwo
        image={"/assets/images/blocks.jpg"}
        text={"Image Three"}
        smallerText='Sub Text'
      />
      <CursorImageBlurEffect image='/assets/images/2.jpg' />
    </section>
  )
}

export default FancyImageCarousel
