import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import SkateBoards from "./SkateBoards"
import IntroText from "./IntroText"
import Phone from "./Phone"
import AboutText from "./AboutText"
import debounce from "lodash.debounce"
import PeopleIntroduction from "./PeopleIntroduction"

const PlayFora: React.FC = () => {
  const [backgroundHasAnimated, setBackgroundHasAnimated] = useState(false)

  useEffect(() => {
    const handleScroll = debounce(() => {
      const scrollY = window.scrollY
      setBackgroundHasAnimated(scrollY > 1350)
    }, 0)

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.section
      className='h-[550vh] relative'
      initial={{ backgroundColor: "rgb(0, 0, 0)" }}
      animate={
        backgroundHasAnimated
          ? { backgroundColor: "rgb(0, 0 , 0)" }
          : { backgroundColor: "rgb(243, 244, 246)" }
      }
      transition={{
        duration: backgroundHasAnimated ? 0.5 : 4,
        delay: 0,
        ease: [0.42, 0, 0.58, 1],
      }}
    >
      <div className='fixed top-0 left-0 w-screen h-screen'>
        <div className='relative w-screen h-screen'>
          <SkateBoards />
          <IntroText />
          <Phone />
          <AboutText />
          <PeopleIntroduction />
        </div>
      </div>
    </motion.section>
  )
}

export default PlayFora
