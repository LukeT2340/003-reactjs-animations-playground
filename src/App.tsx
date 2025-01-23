import ParallaxHero from "./components/Effects/ParallaxHero/index.js"
import FancyImageCarousel from "./components/Effects/FancyImageCarousel"
import CursorImageBlurEffect from "./components/Effects/CursorImageBlurEffect"
import OneElementScroll from "./components/Effects/OneElementScroll/index.jsx"
import ShadowOnScroll from "./components/Effects/ShaderOnScroll/index.jsx"
import ImageHoverEffects from "./components/Effects/ImageHoverEffects/index.jsx"
import BlobImageReveal from "./components/Effects/BlobImageReveal"
import SmoothScrolling from "./js/smooth-scrolling/SmoothScrolling.js"
import CoolImageReveal from "./components/Effects/CoolImageReveal/index.jsx"

const App = () => {
  return (
    <div>
      <SmoothScrolling>
        <BlobImageReveal />
        <ParallaxHero />
        <CoolImageReveal
          image={"/assets/images/textureupscaled.webp"}
          text={"Image One"}
          smallerText='Sub Text'
        />
        <CoolImageReveal
          image={"/assets/images/head.jpg"}
          text={"Image Two"}
          smallerText='Sub Text'
        />
        <CoolImageReveal
          image={"/assets/images/blocks.jpg"}
          text={"Image Three"}
          smallerText='Sub Text'
        />
        <CursorImageBlurEffect image='/assets/images/2.jpg' />
        <ShadowOnScroll />
      </SmoothScrolling>
    </div>
  )
}

export default App
