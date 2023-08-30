import { Bubble } from "../Bubble/Bubble"
import "./Home.css"

function Home({ openMenu, setOpenMenu }) {
  return (
    <section className='home' id="home">
      <Bubble img={"/img/characters/character_Mesa de trabajo 1.png"} />
      <Bubble img={"/img/characters/character-02.png"} />
      <Bubble img={"/img/characters/character-03.png"} />
      <Bubble img={"/img/characters/character-04.png"} />
      <Bubble img={"/img/characters/character-05.png"} />
      <Bubble img={"/img/characters/character-06.png"} />
      <button
        className='home__button-menu'
        onClick={() => setOpenMenu(!openMenu)}
      >
        {!openMenu ? (
          <img src='/svg/arrow_left.svg' alt='open menu' />
        ) : (
          <img src='svg/arrow_right.svg' alt='open menu' />
        )}
      </button>
    </section>
  )
}

export { Home }
