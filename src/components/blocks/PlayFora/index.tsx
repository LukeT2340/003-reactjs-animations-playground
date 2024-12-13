import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import SkateBoards from "./SkateBoards"
import IntroText from "./IntroText"
import Phone from "./Phone"
import AboutText from "./AboutText"
import debounce from "lodash.debounce"
import PeopleIntroduction from "./PeopleIntroduction"

const PlayFora: React.FC = () => {
  const [backgroundHasAnimatedOne, setBackgroundHasAnimatedOne] =
    useState(false)
  const [backgroundHasAnimatedTwo, setBackgroundHasAnimatedTwo] =
    useState(false)

  useEffect(() => {
    const handleScroll = debounce(() => {
      const scrollY = window.scrollY
      setBackgroundHasAnimatedOne(scrollY > 1850)
      setBackgroundHasAnimatedTwo(scrollY > 3050)
    }, 0)

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.section
      className='h-[5000px] relative'
      initial={{ backgroundColor: "rgb(0, 0, 0)" }}
      animate={
        backgroundHasAnimatedOne
          ? backgroundHasAnimatedTwo
            ? { backgroundColor: "rgb(0 43 255)" }
            : { backgroundColor: "rgb(0, 0 , 0)" }
          : { backgroundColor: "rgb(243, 244, 246)" }
      }
      transition={{
        duration: backgroundHasAnimatedOne ? 0.5 : 4,
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
