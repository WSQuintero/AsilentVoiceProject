import "./GaleryCharacters.css"
import { CharacterCard } from "../CharacterCard/CharacterCard"
import { useObserver } from "../../customHooks/useOberver"
import { useRef } from "react"

function GaleryCharacters({ setOpenMenu }) {
  const galery = useRef(null)

  useObserver(galery, setOpenMenu)

  return (
    <section
      className='galery-character__container'
      id='galery-character__container'
    >
      <div className='galery-container__buttons' ref={galery}>
        <button className='galery__left-button'>
          <img src='/svg/arrow_left_color.svg' alt='button left' />
        </button>
        <CharacterCard img />
        <button className='galery__right-button'>
          <img src='/svg/arrow_right_color.svg' alt='button right' />
        </button>
      </div>
    </section>
  )
}

export { GaleryCharacters }
