import { useRef } from "react"
import TextAnimateWithScroll from "./components/blocks/TextAnimateWithScroll"
import ClipPathAnimation from "./components/blocks/ClipPathAnimation"
import SectionThree from "./components/blocks/SectionThree"
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
              <TextAnimateWithScroll />
              <ClipPathAnimation />
              <SectionThree />
            </LocomotiveParallax>
          </article>
          <Footer />
        </main>
      </div>
    </>
  )
}

export default App
