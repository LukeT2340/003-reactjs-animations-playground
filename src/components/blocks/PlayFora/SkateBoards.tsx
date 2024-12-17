import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import debounce from "lodash.debounce"

const SkateBoards: React.FC = () => {
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    const handleScroll = debounce(() => {
      const scrollY = window.scrollY
      setHasAnimated(scrollY > 10)
    }, 0)

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className='absolute top-1/2 -translate-y-1/2 h-ful left-1/2 -translate-x-1/2'>
      <motion.div
        initial={{ scale: 0.2, rotate: 500 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ duration: 4, delay: 0.4, ease: [0.42, 0, 0.58, 1] }}
      >
        <motion.img
          src='/assets/images/PlayFora/655480d1e7cd3596665e9de0_mains.png'
          alt='skateboards'
          className='object-cover max-w-[1600px]'
          initial={{ opacity: 1, rotate: 0 }}
          animate={
            hasAnimated ? { opacity: 0, rotate: 60 } : { opacity: 1, rotate: 0 }
          }
          transition={{ duration: 0.8, ease: "easeInOut" }}
        />
      </motion.div>
    </div>
  )
}

export default SkateBoards
