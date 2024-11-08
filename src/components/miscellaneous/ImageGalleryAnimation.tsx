import { useRef, useEffect } from "react"
import TextAnimationWithScroll from "./TextAnimationWithScroll"
import { motion } from "framer-motion"

interface ImageGalleryAnimationProps {
  images: string[]
  animationStartYValue: number // Pixel value
  animationEndYValue: number // Pixel value
  top: string
  className: string
}

const ImageGalleryAnimation: React.FC<ImageGalleryAnimationProps> = ({
  images,
  animationStartYValue,
  animationEndYValue,
  top,
  className,
}) => {
  const yDiff = (animationEndYValue - animationStartYValue) / images.length
  const overlap = 500

  return (
    <div className='fixed w-full' style={{ top }}>
      <div className='relative w-full'>
        {images.map((image: string, index: number) => (
          <SingleImageAnimation
            key={image}
            image={image}
            animationStartYValue={animationStartYValue + index * yDiff}
            animationEndYValue={
              animationStartYValue + (index + 1) * yDiff + overlap
            }
            className={className}
          />
        ))}
      </div>
    </div>
  )
}

interface SingleImageAnimationProps {
  image: string
  animationStartYValue: number
  animationEndYValue: number
  className: string
}

const SingleImageAnimation: React.FC<SingleImageAnimationProps> = ({
  image,
  animationStartYValue,
  animationEndYValue,
  className,
}) => {
  const imageRef = useRef<HTMLDivElement>(null)
  const initialTranslateY = 150
  useEffect(() => {
    const handleScroll = () => {
      const ease = 0.5
      const animationDistribution = 0.8 // 0.5 means that the part of the animation where the image rises to the center of the screen will take up 50% of the animation, and the part where the image shrinks will take up 50% as well

      if (imageRef.current) {
        // Take scroll value and transform it to be between 0 and 1. 0 is start of animation and 1 is end of animation
        const normalizedScrollY =
          (window.scrollY - animationStartYValue) /
          (animationEndYValue - animationStartYValue)

        if (normalizedScrollY < 0 || normalizedScrollY > 1) {
          imageRef.current.style.display = "none"
          return
        }

        imageRef.current.style.display = "block"

        if (normalizedScrollY < animationDistribution) {
          const x = normalizedScrollY / animationDistribution
          const b =
            ((-1 / animationDistribution) * Math.log(1 / initialTranslateY)) /
            Math.log(ease)
          const y = initialTranslateY * ease ** (-b * x)
          imageRef.current.style.transform = `translateY(${y}%)`
        } else {
          const x =
            (1 / (1 - animationDistribution)) *
            (normalizedScrollY - animationDistribution)
          const scale = 1 - x ** 3
          imageRef.current.style.scale = `${scale}`
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <div className='absolute left-1/2 -translate-x-1/2 '>
      <div className='flex justify-center w-full'>
        <div
          ref={imageRef}
          style={{ transform: `translate(-50%,${initialTranslateY}%)` }}
          className='overflow-hidden'
        >
          <motion.div
            initial={{ scale: 1.2 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 2, delay: 0.2, ease: "easeOut" }}
          >
            <img src={image} alt='motion image' className={className} />
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default ImageGalleryAnimation
