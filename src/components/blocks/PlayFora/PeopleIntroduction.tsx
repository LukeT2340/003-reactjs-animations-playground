import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import debounce from "lodash.debounce"

const PeopleIntroduction: React.FC = () => {
  const [hasAnimatedOne, setHasAnimatedOne] = useState(false)
  const [hasAnimatedTwo, setHasAnimatedTwo] = useState(false)
  const [hasAnimatedThree, setHasAnimatedThree] = useState(false)

  useEffect(() => {
    const handleScroll = debounce(() => {
      const scrollY = window.scrollY
      setHasAnimatedOne(scrollY > 1450)
      setHasAnimatedTwo(scrollY > 2150)
      setHasAnimatedThree(scrollY > 3050)
    }, 0)

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className='absolute inset-0 w-full h-full'>
      <motion.div
        className='relative w-full h-full flex flex-col justify-end items-center'
        initial={{ y: 1000, opacity: 0 }}
        animate={
          hasAnimatedOne ? { y: 0, opacity: 1 } : { y: 1000, opacity: 0 }
        }
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        <div className='translate-y-[50vh]'>
          <motion.h6
            className='text-white text-[60px] leading-[60px] font-bold mb-[10vh] w-fit mx-auto'
            initial={{ opacity: 1 }}
            animate={hasAnimatedThree ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            I am a
          </motion.h6>
          <div className='relative'>
            <div className={`absolute inset-0`}>
              <motion.div
                className='text-white'
                initial={{ rotate: 0, x: 0, y: 0 }}
                animate={
                  hasAnimatedTwo
                    ? { rotate: 25, x: 150, y: 50 }
                    : { rotate: 0, x: 0, y: 0 }
                }
                transition={{ duration: 1, ease: "easeOut" }}
              >
                <motion.div
                  className='rounded-t-[100rem] p-[25px] w-[296px] h-[120vh]'
                  initial={{
                    backgroundColor: "rgb(255, 37, 0)",
                    x: 0,
                    y: 0,
                    rotate: 0,
                  }}
                  animate={
                    hasAnimatedThree
                      ? {
                          backgroundColor: "rgb(0 43 255)",
                          x: -320,
                          y: -60,
                          rotate: -25,
                        }
                      : {
                          backgroundColor: "rgb(255, 37, 0) ",
                          x: 0,
                          y: 0,
                          rotate: 0,
                        }
                  }
                  transition={{ duration: 1, ease: "easeOut" }}
                >
                  <div className='w-full mb-[20px] rounded-full overflow-hidden'>
                    <img
                      src={
                        "/assets/images/PlayFora/6543813ad3d07597b4558c09_av_01.png"
                      }
                      alt='Card image'
                    />
                  </div>
                  <motion.h4
                    className='text-[30px] font-bold w-fit mx-auto'
                    initial={{ opacity: 1 }}
                    animate={hasAnimatedThree ? { opacity: 0 } : { opacity: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                  >
                    Charity
                  </motion.h4>
                </motion.div>
              </motion.div>
            </div>
            <div className={` absolute inset-0 `}>
              <motion.div
                className='text-black bg-yellow rounded-t-[100rem] p-[25px] w-[296px] h-[120vh]'
                initial={{
                  backgroundColor: "rgb(255, 239, 91)",
                  x: 0,
                  y: 0,
                }}
                animate={
                  hasAnimatedThree
                    ? {
                        backgroundColor: "rgb(0 43 255)",
                        x: -400,
                        y: -145,
                      }
                    : {
                        backgroundColor: "rgb(255, 239, 91) ",
                        x: 0,
                        y: 0,
                      }
                }
                transition={{ duration: 1, ease: "easeOut" }}
              >
                <div className='w-full mb-[20px] rounded-full overflow-hidden'>
                  <img
                    src={
                      "/assets/images/PlayFora/6543813a2adac6f20bdfca10_av_02.png"
                    }
                    alt='Card image'
                  />
                </div>
                <motion.h4
                  className='text-[30px] font-bold w-fit mx-auto'
                  initial={{ opacity: 1 }}
                  animate={hasAnimatedThree ? { opacity: 0 } : { opacity: 1 }}
                  transition={{ duration: 1, ease: "easeOut" }}
                >
                  Buyer
                </motion.h4>
              </motion.div>
            </div>
          </div>
          <motion.div
            className={`text-white relative`}
            initial={{ rotate: 0, x: 0, y: 0 }}
            animate={
              hasAnimatedTwo
                ? { rotate: -25, x: -150, y: 50 }
                : { rotate: 0, x: 0, y: 0 }
            }
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <motion.div
              className='p-[25px] w-[296px] h-[120vh] rounded-t-[100rem]'
              initial={{
                backgroundColor: "rgb(0 43 255)",
                rotate: 0,
                x: 0,
                y: 0,
              }}
              animate={
                hasAnimatedThree
                  ? {
                      backgroundColor: "rgb(0 43 255)",
                      rotate: 25,
                      x: -400,
                      y: -400,
                    }
                  : {
                      backgroundColor: "rgb(0 43 255)",
                      rotate: 0,
                      x: 0,
                      y: 0,
                    }
              }
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <div className='w-full mb-[20px] rounded-full overflow-hidden'>
                <motion.img
                  src={
                    "/assets/images/PlayFora/6543813a4600d08a2288d029_av_03.png"
                  }
                  alt='Card image'
                  initial={{ scale: 1.2 }}
                  animate={hasAnimatedOne ? { scale: 1.2 } : { scale: 1 }}
                  transition={{ duration: 2, ease: "easeOut" }}
                />
              </div>

              <motion.h4
                className='text-[30px] font-bold w-fit mx-auto'
                initial={{ opacity: 1 }}
                animate={hasAnimatedThree ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                Seller
              </motion.h4>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}

export default PeopleIntroduction
