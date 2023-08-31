import { Swiper, SwiperSlide } from "swiper/react"
import { charactersCardDb } from "../../Db/characterCardDb"
import { CharacterCard } from "../CharacterCard/CharacterCard"
import { EffectCoverflow, Pagination } from "swiper/modules"

import "swiper/css"
import "swiper/css/effect-coverflow"
import "swiper/css/pagination"
import "./stylesTwo.css"
import "./GaleryCharacter.css"

function GaleryCharacter() {
  return (
    <section
      className='galery-character__container'
      id='galery-character__container'
    >
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className='mySwiper'
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
