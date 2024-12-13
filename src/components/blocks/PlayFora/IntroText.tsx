import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import debounce from "lodash.debounce"

const IntroText: React.FC = () => {
	const [hasAnimated, setHasAnimated] = useState(false)

	useEffect(() => {
		const handleScroll = debounce(() => {
			const scrollY = window.scrollY
			setHasAnimated(scrollY > 40)
		}, 0)

		window.addEventListener("scroll", handleScroll)
		return () => window.removeEventListener("scroll", handleScroll)
	}, [])

	return (
		<div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 text-center max-w-[450px]">
			<motion.div
				initial={{ opacity: 1 }}
				animate={hasAnimated ? { opacity: 0 } : { opacity: 1 }}
				transition={{ duration: 0.8, ease: "easeInOut" }}
			>
				<motion.div
					initial={{ opacity: 0, scale: 0.2 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 4, delay: 0.4, ease: [0.42, 0, 0.58, 1] }}
				>
					<div className="block-copy mb-[40px]">
						<h3 className="text-[67px] leading-[61px] font-bold mb-[21px]">
							Shop to win. Play for good.
						</h3>
						<p>
							The world’s most playful and charitable buying and selling
							experience.
						</p>
					</div>
					<div className="flex items-center justify-center gap-7 w-fit mx-auto">
						<h6 className="text-[24px] leading-[26px] font-bold w-fit text-left">
							Download
							<br /> Playfora
						</h6>
						<img
							src="/assets/images/PlayFora/6554a2d039442b4ed3d13074_image-p-500.png"
							alt="skateboards"
							className="w-[131px]"
						/>
					</div>
				</motion.div>
			</motion.div>
		</div>
	)
}

export default IntroText
