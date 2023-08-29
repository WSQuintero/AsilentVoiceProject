import { useEffect, useRef } from "react"
import "./GaleryCharacters.css"
import { CharacterCard } from "../CharacterCard/CharacterCard"

function GaleryCharacters({ setOpenMenu }) {
  const galery = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setOpenMenu(() => true)
        }
      })
    })

    if (galery.current) {
      observer.observe(galery.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <section className='galery-character__container'>
      <div className='galery-container__buttons'>
        <button className='galery__left-button'>
          <img src='/svg/arrow_left_color.svg' alt='button left' />
        </button>
        <CharacterCard galery={galery} img />
        <button className='galery__right-button'>
          <img src='/svg/arrow_right_color.svg' alt='button right' />
        </button>
      </div>
    </section>
  )
}

export { GaleryCharacters }
