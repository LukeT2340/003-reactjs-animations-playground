import SectionOne from "./components/Effects/Aston/index.js"
import ShaderImageTransition from "./components/Effects/Shader-Image-Transition-1/index.jsx"
import ShaderImageTransitionTwo from "./components/Effects/Shader-Image-Transition-2/index.jsx"
import SmoothScrolling from "./js/smooth-scrolling/SmoothScrolling.js"

const App = () => {
  return (
    <div>
      <div className='relative'>
        <SmoothScrolling>
          <SectionOne />
          <ShaderImageTransition />
          <ShaderImageTransitionTwo
            image={"/assets/images/textureupscaled.webp"}
          />
          <ShaderImageTransitionTwo image={"/assets/images/head.jpg"} />
          <ShaderImageTransitionTwo image={"/assets/images/phone.jpg"} />
        </SmoothScrolling>
      </div>
    </div>
  )
}

export default App
