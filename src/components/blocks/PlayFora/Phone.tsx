import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import debounce from "lodash.debounce"

const Phone: React.FC = () => {
  const [hasAnimatedOne, setHasAnimatedOne] = useState(false)
  const [hasAnimatedTwo, setHasAnimatedTwo] = useState(false)
  const [hasAnimatedThree, setHasAnimatedThree] = useState(false)

  useEffect(() => {
    const handleScroll = debounce(() => {
      const scrollY = window.scrollY
      setHasAnimatedOne(scrollY > 10)
      setHasAnimatedTwo(scrollY > 450)
      setHasAnimatedThree(scrollY > 1350)
    }, 0)

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className='absolute -bottom-0 left-1/2 -translate-x-1/2 z-10'>
      <motion.div
        initial={{ y: 0 }}
        animate={hasAnimatedThree ? { y: -1000 } : { y: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        <motion.div
          initial={{ x: 0 }}
          animate={hasAnimatedTwo ? { x: -400 } : { x: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <motion.img
            src='/assets/images/PlayFora/65c38484e3832bde771a2052_phone.png'
            alt='skateboards'
            className='object-cover w-[400px]'
            initial={{ opacity: 0, y: 600 }}
            animate={
              hasAnimatedOne ? { opacity: 1, y: 0 } : { opacity: 0, y: 600 }
            }
            transition={{ duration: 0.8, ease: "easeOut" }}
          />
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Phone
