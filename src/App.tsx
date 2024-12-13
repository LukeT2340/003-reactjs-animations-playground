import { useRef } from "react"
import LocomotiveParallax from "./js/parallax"
import PlayFora from "./components/blocks/PlayFora"

const App = () => {
	const locoScrollRef = useRef<HTMLElement>(null)

	return (
		<>
			<div>
				<main>
					{/* <Header /> */}
					<article>
						<LocomotiveParallax locoScrollRef={locoScrollRef}>
							<PlayFora />
						</LocomotiveParallax>
					</article>
					{/* <Footer /> */}
				</main>
			</div>
		</>
	)
}

export default App
