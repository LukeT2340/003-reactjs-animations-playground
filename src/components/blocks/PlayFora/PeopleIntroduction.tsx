import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import debounce from "lodash.debounce"

const PeopleIntroduction: React.FC = () => {
  const [hasAnimatedOne, setHasAnimatedOne] = useState(false)

  useEffect(() => {
    const handleScroll = debounce(() => {
      const scrollY = window.scrollY
      setHasAnimatedOne(scrollY > 1350)
    }, 0)

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className='absolute inset-0 w-full h-full'>
      <motion.div
        className='relative w-full h-full flex flex-col justify-end items-center'
        initial={{ y: 1000 }}
        animate={hasAnimatedOne ? { y: 0 } : { y: 1000 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        <h6 className='text-white text-[60px] leading-[60px] font-bold mb-[10vh]'>
          I am a
        </h6>
        <Card
          src={"/assets/images/PlayFora/6543813a4600d08a2288d029_av_03.png"}
          text='Seller'
          bgColor='#002bff'
          textColor='white'
        />
      </motion.div>
    </div>
  )
}

interface CardProps {
  src: string
  text: string
  bgColor: string
  textColor: string
}

const Card: React.FC<CardProps> = ({ src, text, bgColor, textColor }) => {
  return (
    <div
      className={`text-${textColor} rounded-t-[100rem] p-[50px] w-[296px] h-[70vh]`}
      style={{ background: bgColor }}
    >
      <img
        src={src}
        alt='Card image'
        className='w-full mb-[20px] rounded-full'
      />
      <h4 className='text-[30px] font-bold w-fit mx-auto'>{text}</h4>
    </div>
  )
}

export default PeopleIntroduction
