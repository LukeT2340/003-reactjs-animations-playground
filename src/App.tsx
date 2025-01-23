import ParallaxHero from "./components/Effects/ParallaxHero/index.js"
import FancyImageCarousel from "./components/Effects/FancyImageCarousel"
import CursorImageBlurEffect from "./components/Effects/CursorImageBlurEffect"
import OneElementScroll from "./components/Effects/OneElementScroll/index.jsx"
import ShadowOnScroll from "./components/Effects/ShaderOnScroll/index.jsx"
import ImageHoverEffects from "./components/Effects/ImageHoverEffects/index.jsx"
import ShaderImageTransitionOne from "./components/Effects/Shader-Image-Transition-1/index.jsx"
import SmoothScrolling from "./js/smooth-scrolling/SmoothScrolling.js"
import { useRef } from "react"
const App = () => {
  return (
    <div>
      <SmoothScrolling>
        {/* <LocomotiveParallax locoScrollRef={parallaxRef}> */}
        <ShaderImageTransitionOne />

        <ParallaxHero />
        <FancyImageCarousel />
        {/* <OneElementScroll /> */}
        <ShadowOnScroll />
        {/* <ImageHoverEffects /> */}
        {/* </LocomotiveParallax> */}
      </SmoothScrolling>
    </div>
  )
}

export default App
