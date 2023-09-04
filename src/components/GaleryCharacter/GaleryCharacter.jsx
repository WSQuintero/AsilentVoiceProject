import { Swiper, SwiperSlide } from "swiper/react"
import { charactersCardDb } from "../../Db/characterCardDb"
import { CharacterCard } from "../CharacterCard/CharacterCard"
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules"

import "swiper/css"
import "swiper/css/effect-coverflow"
import "swiper/css/pagination"
import "./stylesTwo.css"
import "./GaleryCharacter.css"
import { useEffect, useRef, useState } from "react"
import { useObserver } from "../../customHooks/useOberver"

function GaleryCharacter({ setOpenMenu }) {
  const windowWidth = window.innerWidth
  const [perview, setPerview] = useState(windowWidth <= 1000 ? "auto" : "3")
  const galeryCharacter = useRef(null)

  useObserver(galeryCharacter, setOpenMenu)
  useEffect(() => {
    window.addEventListener("resize", () => {
      window.requestAnimationFrame(() => {
        if (window.innerWidth <= 1000) {
          setPerview("auto")
        } else {
          setPerview("3")
        }
      })
    })
  }, [perview])

  return (
    <section
      className='galery-character__container'
      id='galery-character__container'
      ref={galeryCharacter}
    >
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={perview}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 50,
          modifier: 1,
          slideShadows: true,
        }}
        loop={true}
        pagination={true}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className='mySwiper'
        autoplay={true}
        
      >
        {charactersCardDb.map((character) => (
          <SwiperSlide key={character.name}>
            <CharacterCard
              name={character.name}
              description={character.description}
              image={character.image}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export { GaleryCharacter }
