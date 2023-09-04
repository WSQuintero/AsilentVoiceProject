import { useEffect, useRef, useState } from "react"
import { mangaDb } from "../../Db/mangaDb"
import "./Manga.css"

function Manga({ setOpenManga }) {
  const container = useRef(null)
  const [containerWidth, setContainerWidth] = useState()

  useEffect(() => {
    setContainerWidth(container.current.clientWidth)
  }, [containerWidth])

  const handleScrollLeft = () => {
    container.current.scrollLeft -= containerWidth
  }
  const handleScrollRight = () => {
    container.current.scrollLeft += containerWidth
  }

  return (
    <div className='manga'>
      <div className='manga__container'>
        <button className='manga__button' onClick={handleScrollLeft}>
          <img src='/svg/arrow_left.svg' alt='cap manga' loading='lazy' />
        </button>
        <div className='manga__container--img' ref={container}>
          {mangaDb.map((chapter) => (
            <img src={chapter} alt='chapter' key={chapter} loading='lazy' />
          ))}
        </div>
        <button className='manga__button' onClick={handleScrollRight}>
          <img src='/svg/arrow_right.svg' alt='manga' loading='lazy' />
        </button>
      </div>
      <button
        className='manga__button--close'
        onClick={() => setOpenManga(false)}
      >
        X
      </button>
    </div>
  )
}

export { Manga }
