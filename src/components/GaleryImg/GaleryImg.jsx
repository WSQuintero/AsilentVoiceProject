import { useRef } from "react"
import { useObserver } from "../../customHooks/useOberver"
import { FreeMode, Navigation, Thumbs } from "swiper/modules"
import { characterImage, characterSlider } from "../../Db/CharacterSlider"
import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css"
import "swiper/css/free-mode"
import "swiper/css/navigation"
import "swiper/css/thumbs"

import "./GaleryImg.css"

function GaleryImg({ setOpenMenu }) {
  const galeryImg = useRef(null)

  useObserver(galeryImg, setOpenMenu)

  return (
    <section
      className='galery-img__container'
      id='galery-img__container'
      ref={galeryImg}
    >
      <Swiper
        style={{
          "--swiper-navigation-color": "#441349",
          "--swiper-pagination-color": "#441349",
        }}
        loop={true}
        spaceBetween={10}
        navigation={true}
        modules={[FreeMode, Navigation, Thumbs]}
        autoplay={true}
        className='mySwiper2'
      >
        {characterSlider.map((img) => (
          <SwiperSlide key={img}>
            <img src={img} alt='image' loading='lazy' />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className='galery-img__three'>
        <iframe
          width='560'
          height='315'
          src='https://www.youtube.com/embed/nfK6UgLra7g?si=CYSkcJWCTkW3nrf'
          title='YouTube video player'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          className='galery-img__three--video'
          loading='lazy'
        />
        <iframe
          width='560'
          height='315'
          src='https://www.youtube.com/embed/b_ePl3_RpJ0?si=W_E8mf9R_rBJ7jFg'
          title='YouTube video player'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          className='galery-img__three--video'
          loading='lazy'
        />
      </div>
      <div className='galery-img__one'>
        {characterImage.map((img) => (
          <img
            className='galery-img__one--element'
            src={img}
            key={img}
            loading='lazy'
          />
        ))}
      </div>
      {/* <div className='galery-img__two'></div> */}
    </section>
  )
}

export { GaleryImg }
