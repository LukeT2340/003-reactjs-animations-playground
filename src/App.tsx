import ParallaxHero from "./components/Effects/ParallaxHero/Hero.tsx"
// import FancyImageCarousel from "./components/Effects/FancyImageCarousel"
// import CursorImageBlurEffect from "./components/Effects/CursorImageBlurEffect"
// import OneElementScroll from "./components/Effects/OneElementScroll/index.jsx"
import ShadowOnScroll from "./components/Effects/ShaderOnScroll/index.jsx"
// import ImageHoverEffects from "./components/Effects/ImageHoverEffects/index.jsx"
// import BlobImageReveal from "./components/Effects/BlobImageReveal"
import SmoothScrolling from "./js/smooth-scrolling/SmoothScrolling.js"
import CoolImageReveal from "./components/Effects/CoolImageReveal"
import VideoWithScroll from "./components/Effects/VideoWithScroll"
import OnScrollShapeMorph from "./components/Effects/OnScrollShapeMorph"
import CarScene from "./components/Effects/CarScene/CarScene.tsx"

const App = () => {
  return (
    <div>
      <SmoothScrolling>
        {/* <ShaderOnScroll /> */}
        {/* <ShadowOnScroll /> */}
        <CarScene />
      </SmoothScrolling>
    </div>
  )
}

export default App
