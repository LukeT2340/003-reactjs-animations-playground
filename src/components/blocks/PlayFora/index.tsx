import React from "react"
import { motion } from "framer-motion"
import SkateBoards from "./SkateBoards"
import IntroText from "./IntroText"
import Phone from "./Phone"
import AboutText from "./AboutText"

const PlayFora: React.FC = () => {
	return (
		<motion.section
			className="h-[250vh] relative"
			initial={{ backgroundColor: "rgb(0, 0, 0)" }}
			animate={{ backgroundColor: "rgb(243, 244, 246)" }}
			transition={{ duration: 4, delay: 0.4, ease: [0.42, 0, 0.58, 1] }}
		>
			<div className="fixed top-0 left-0 w-screen h-screen">
				<div className="relative w-screen h-screen">
					<SkateBoards />
					<IntroText />
					<Phone />
					<AboutText />
				</div>
			</div>
		</motion.section>
	)
}

export default PlayFora
