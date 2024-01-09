import { useRef } from "react";
import { useObserver } from "../../customHooks/useOberver";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { characterImage, characterSlider } from "../../Db/CharacterSlider";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import "./GaleryImg.css";

function GaleryImg({ setOpenMenu }) {
  const galeryImg = useRef(null);

  useObserver(galeryImg, setOpenMenu);

  return (
    <section
      className="galery-img__container"
      id="galery-img__container"
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
        autoplay={{
          delay: 3000, // milisegundos antes de pasar a la siguiente diapositiva
          disableOnInteraction: false, // no detener el autoplay después de la interacción del usuario
        }}
        className="mySwiper2"
      >
        {characterSlider.map((img) => (
          <SwiperSlide key={img}>
            <img src={img} alt="image" />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="galery-img__three">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/nfK6UgLra7g?rel=0"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; "
          className="galery-img__three--video"
        />
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/b_ePl3_RpJ0?rel=0"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; "
          className="galery-img__three--video"
        />
      </div>
      <div className="galery-img__one">
        {characterImage.map((img) => (
          <img
            className="galery-img__one--element"
            src={img}
            key={img}
            alt="character"
          />
        ))}
      </div>
    </section>
  );
}

export { GaleryImg };
