import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import debounce from "lodash.debounce"

const AboutText: React.FC = () => {
  const [hasAnimatedOne, setHasAnimatedOne] = useState(false)
  const [hasAnimatedTwo, setHasAnimatedTwo] = useState(false)
  const [hasAnimatedThree, setHasAnimatedThree] = useState(false)

  useEffect(() => {
    const handleScroll = debounce(() => {
      const scrollY = window.scrollY
      setHasAnimatedOne(scrollY > 450)
      setHasAnimatedTwo(scrollY > 1000)
      setHasAnimatedThree(scrollY > 1850)
    }, 0)

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className='absolute left-1/2 translate-y-[50px] top-1/2 text-left'>
      <div>
        <motion.div
          className='block-copy max-w-[600px]'
          initial={{ y: 0 }}
          animate={hasAnimatedThree ? { y: "-100vh" } : { y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <motion.div
            initial={{ y: 0 }}
            animate={hasAnimatedTwo ? { y: -250 } : { y: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <motion.h6
              initial={{ opacity: 0 }}
              animate={hasAnimatedOne ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className='mb-[80px]'
            >
              <h6 className='text-[33px] leading-[36px] font-bold'>
                <span className='text-blue'>Sellers</span> list and sell items
                for full price, <span className='text-blue'>Buyers</span> can
                win cool stuff by purchasing a Spot, and{" "}
                <span className='text-blue'>Charities</span> seamlessly raise
                money for important causes.
              </h6>
            </motion.h6>
            <motion.div
              initial={{ y: 150, opacity: 0 }}
              animate={
                hasAnimatedTwo ? { y: 0, opacity: 1 } : { y: 150, opacity: 0 }
              }
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className='bg-light-gray p-11 rounded-[24px]'
            >
              <h6 className='text-[24px] leading-[26px] font-bold max-w-[540px] ml-4'>
                On Playfora, play is paramount, business is pleasure, and
                everyone can win
              </h6>
              <div className='my-[50px] h-[1px] w-full bg-gray-300' />
              <div className='flex justify-start gap-7'>
                <div>
                  <h3 className='text-[60px] leading-[60px] font-bold mb-5'>
                    1400+
                  </h3>
                  <h5 className='text-[30px] leading-[26px] text-gray-600 font-bold'>
                    charities
                  </h5>
                </div>
                <div>
                  <h3 className='text-[60px] leading-[60px] font-bold mb-5'>
                    $40K+
                  </h3>
                  <h5 className='text-[30px] leading-[26px] text-gray-600 font-bold'>
                    raised for good
                  </h5>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default AboutText
