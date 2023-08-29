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
      <CharacterCard galery={galery} img />
    </section>
  )
}

export { GaleryCharacters }
