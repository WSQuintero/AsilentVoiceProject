import { Bubble } from "../Bubble/Bubble"
import { charactersCardDb } from "../../Db/characterCardDb"
import "./Home.css"

function Home({ openMenu, setOpenMenu }) {
  return (
    <section className='home' id='home'>
      {charactersCardDb.map((img) => (
        <Bubble img={img.image} loading='lazy' key={img.image} />
      ))}
      <button
        className='home__button-menu'
        onClick={() => setOpenMenu(!openMenu)}
      >
        {!openMenu ? (
          <img src='/svg/arrow_left.svg' alt='open menu' loading='lazy' />
        ) : (
          <img src='svg/arrow_right.svg' alt='open menu' loading='lazy' />
        )}
      </button>
    </section>
  )
}

export { Home }
