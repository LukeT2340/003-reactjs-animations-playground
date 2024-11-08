import { useRef } from "react"
import Monkey from "./components/blocks/Monkey/index.tsx"
import LocomotiveParallax from "./js/parallax"
import Aston from "./components/blocks/Aston/index.tsx"

const App = () => {
  const locoScrollRef = useRef<HTMLElement>(null)

  return (
    <>
      <div>
        <main>
          {/* <Header /> */}
          <article>
            <LocomotiveParallax locoScrollRef={locoScrollRef}>
              <Monkey />
              <Aston />
            </LocomotiveParallax>
          </article>
          {/* <Footer /> */}
        </main>
      </div>
    </>
  )
}

export default App
