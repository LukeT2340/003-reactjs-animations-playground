import React, { PropsWithChildren, useEffect, useState } from "react"
import { motion } from "framer-motion"
import debounce from "lodash.debounce"

const PeopleIntroductionText: React.FC = () => {
  const [hasAnimatedOne, setHasAnimatedOne] = useState(false)

  useEffect(() => {
    const handleScroll = debounce(() => {
      const scrollY = window.scrollY
      setHasAnimatedOne(scrollY > 3050)
    }, 0)

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className='absolute left-[55%] top-1/2 -translate-y-1/2 text-white'>
      <motion.div
        initial={{ opacity: 0 }}
        animate={hasAnimatedOne ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <h2 className='text-[60px] leading-[60px] font-bold mb-[60px]'>
          Seller
        </h2>
        <div className='grid grid-cols-2 gap-x-10 gap-y-[100px]'>
          <Card number={1} title='Apply to Sell'>
            <h6 className='max-w-[300px] text-[17px] leading-[19px] font-medium'>
              If you have a track record of successful selling on other
              platforms, fill out our Play Host (seller){" "}
              <a className='underline' href='#'>
                application
              </a>
              .
            </h6>
          </Card>
          <Card number={2} title='List and launch in four steps'>
            <h6 className='max-w-[300px] text-[17px] leading-[19px] font-medium'>
              Once approved, set up your Play (listing). Indicate how much you
              want for your item and how much should go to your favorite
              charity.
            </h6>
          </Card>
          <Card number={3} title='Share your Play Link with your audience'>
            <h6 className='max-w-[300px] text-[17px] leading-[19px] font-medium'>
              Slide your Play or profile links into your social bios and drum up
              excitement with your followers.
            </h6>
          </Card>
          <Card number={4} title='Get Paid'>
            <h6 className='max-w-[300px] text-[17px] leading-[19px] font-medium'>
              After your Play closes, ship your item with care. Then, do it all
              again! Your funds will be available to withdraw within one
              business day.
            </h6>
          </Card>
        </div>
      </motion.div>
    </div>
  )
}

interface Props {
  number: number
  title: string
}

const Card: React.FC<PropsWithChildren<Props>> = ({
  number,
  title,
  children,
}) => {
  return (
    <div className='flex flex-col items-start gap-[30px] block-copy'>
      <div className='relative ml-[20px]'>
        <span className='relative text-[19px] leading-[17px]'>{number}</span>
        <div className='absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-[40px] h-[40px] rounded-full border-[2px] border-white'></div>
      </div>
      <h5 className='text-[24px] leading-[26px] font-bold'>{title}</h5>
      {children}
    </div>
  )
}

export default PeopleIntroductionText
