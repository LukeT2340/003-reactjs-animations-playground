import { useRef } from "react"
import TextAnimateWithScroll from "./components/blocks/TextAnimateWithScroll"
import ClipPathAnimation from "./components/blocks/ClipPathAnimation"
import CombinedAnimations from "./components/blocks/CombinedAnimations/index.tsx"
import LocomotiveParallax from "./js/parallax"
import Header from "./components/blocks/Header/Header.tsx"
import Footer from "./components/blocks/Footer/Footer.tsx"

const App = () => {
  const locoScrollRef = useRef<HTMLElement>(null)

  return (
    <>
      <div>
        <main>
          <Header />
          <article>
            <LocomotiveParallax locoScrollRef={locoScrollRef}>
              <CombinedAnimations />
            </LocomotiveParallax>
          </article>
          <Footer />
        </main>
      </div>
    </>
  )
}

export default App
