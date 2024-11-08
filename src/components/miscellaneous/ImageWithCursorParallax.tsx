import { useState } from "react"

interface Props {
  image: string
}

const ImageWithCursorParallax: React.FC<Props> = ({ image }) => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (event: { clientX: any; clientY: any }) => {
    console.log(event.clientX)
    setCursorPosition({ x: event.clientX, y: event.clientY })
  }
  return (
    <div className='w-full h-full' onMouseMove={handleMouseMove}>
      <img src={image} alt='none' />
    </div>
  )
}

export default ImageWithCursorParallax
