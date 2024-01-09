import { Bubble } from "../Bubble/Bubble"
import { charactersCardDb } from "../../Db/characterCardDb"
import "./Home.css"

function Home({ openMenu, setOpenMenu }) {
  return (
    <section className='home' id='home'>
      {charactersCardDb.map((img) => (
        <Bubble img={img.image}  key={img.image} />
      ))}
      <button
        className='home__button-menu'
        onClick={() => setOpenMenu(!openMenu)}
      >
        {!openMenu ? (
          <img src='/svg/arrow_left.svg' alt='open menu'  />
        ) : (
          <img src='svg/arrow_right.svg' alt='open menu'  />
        )}
      </button>
    </section>
  )
}

export { Home }
