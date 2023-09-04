import { useRef, useState } from "react"
import { useObserver } from "../../customHooks/useOberver"
import { Manga } from "../Manga/Manga"
import "./History.css"

function History({ setOpenMenu }) {
  const [openManga, setOpenManga] = useState(false)
  const history = useRef(null)

  useObserver(history, setOpenMenu)

  return (
    <section
      className='history__container'
      id='history__container'
      ref={history}
    >
      <aside className='history__aside'>
        <img
          src='https://i.ibb.co/ZHnG9j8/character-one.jpg'
          alt='character-one'
          className='history__aside--img'
          loading='lazy'
        />
      </aside>
      <div className='history__parraf'>
        <p>
          {`"Koe no Katachi", también conocida como "A Silent Voice", es una
          historia de redención y amistad en la que Shoya Ishida, un joven que
          había acosado a una compañera sorda llamada Shoko Nishimiya en la
          escuela primaria, intenta enmendar sus errores y reconectar con ella
          en la escuela secundaria. La trama explora temas de culpa, perdón y
          comunicación, mientras ambos personajes buscan la reconciliación y la
          aceptación en un mundo que a veces es indiferente y cruel.`}
        </p>
        <button
          className='history_button'
          onClick={() => {
            setOpenManga(!openManga)
            setOpenMenu(false)
          }}
        >
          Ver manga{" "}
          <span className='history__arrow'>
            <img
              src='/svg/arrow_right_color.svg'
              alt='arrow right'
              loading='lazy'
            />
          </span>
        </button>
      </div>
      {openManga && <Manga setOpenManga={setOpenManga} />}
    </section>
  )
}

export { History }
