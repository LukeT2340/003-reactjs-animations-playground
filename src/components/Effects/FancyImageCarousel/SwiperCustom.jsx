import { Navigation, Mousewheel, EffectFade, Autoplay } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import { useEffect, useState } from "react"
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/effect-coverflow"
import "swiper/css/effect-fade"

// import back from "../assets/images/back-arrow.svg"
// import forward from "../assets/images/forward-arrow.svg"

const SwiperCustom = ({ slidesData }) => {
  const [swiperInstance, setSwiperInstance] = useState({})

  useEffect(() => {}, [swiperInstance])

  return (
    <div className='relative'>
      <Swiper
        key={"feraiongr"}
        spaceBetween={0}
        modules={[Navigation, Mousewheel, Autoplay]}
        direction='horizontal'
        slidesPerView='1'
        speed={2000}
        autoplay={{
          delay: 300,
        }}
        loop={true}
        navigation={{
          nextEl: ".image-swiper-button-next",
          prevEl: ".image-swiper-button-prev",
        }}
        onSwiper={(swiper) => {
          setSwiperInstance(swiper)
        }}
      >
        {slidesData.map((slide, index) => (
          <SwiperSlide key={index}>{slide}</SwiperSlide>
        ))}
      </Swiper>
      {/* <div className='swiper-button image-swiper-button-next text-white absolute top-[45%] right-20 z-10'>
        <img src={forward} alt='forward button' />
      </div>
      <div className='swiper-button image-swiper-button-prev text-white absolute top-[45%] left-20 z-[10]'>
        <img src={back} alt='back button' />
      </div> */}
    </div>
  )
}

export default SwiperCustom
