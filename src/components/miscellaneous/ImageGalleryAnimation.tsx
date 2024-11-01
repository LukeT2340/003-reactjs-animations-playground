import { useRef, useEffect } from "react"

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
  const eachImageAnimationYDiff =
    (animationEndYValue - animationStartYValue) / images.length

  return (
    <div className='fixed w-full' style={{ top }}>
      <div className='relative w-full'>
        {images.map((image: string, index: number) => (
          <SingleImageAnimation
            key={image}
            image={image}
            animationStartYValue={
              animationStartYValue + index * eachImageAnimationYDiff
            }
            animationEndYValue={
              animationStartYValue + (index + 1) * eachImageAnimationYDiff
            }
            className={className}
            index={index}
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
  index: number
}

const SingleImageAnimation: React.FC<SingleImageAnimationProps> = ({
  image,
  animationStartYValue,
  animationEndYValue,
  className,
  index,
}) => {
  const imageRef = useRef<HTMLDivElement>(null)
  const initialTranslateY = 300

  useEffect(() => {
    const handleScroll = () => {
      const ease = 1.02
      const animationDistribution = 0.5 // 0.5 means that the part of the animation where the image rises to the center of the screen will take up 50% of the animation, and the part where the image shrinks will take up 50% as well
      if (imageRef.current) {
        const normalizedScrollY =
          (window.scrollY - animationStartYValue) /
          (animationEndYValue - animationStartYValue)

        if (normalizedScrollY < 0 || normalizedScrollY > 1) {
          imageRef.current.style.display = "none"
          return
        }
        imageRef.current.style.display = "block"
        if (normalizedScrollY < animationDistribution) {
          const x = normalizedScrollY
          if (x < 0 || x > 1) {
            return
          }
          const b =
            ((-1 / animationDistribution) * Math.log(1 / initialTranslateY)) /
            Math.log(ease)
          const y = initialTranslateY * ease ** (-b * x)
          imageRef.current.style.transform = `translateY(${y}%)`
        } else {
          const x =
            (1 / animationDistribution) *
            (normalizedScrollY - animationDistribution)
          const scale = 1 - x ** 3
          imageRef.current.style.transform = `scale(${scale})`
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <div className='flex justify-center w-full'>
      <div
        ref={imageRef}
        style={{ transform: `translate(-50%,${initialTranslateY}%)` }}
      >
        <img src={image} alt='motion image' className={className} />
      </div>
    </div>
  )
}

export default ImageGalleryAnimation
