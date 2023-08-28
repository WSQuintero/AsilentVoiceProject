import { Bubble } from "../Bubble/Bubble"
import "./Home.css"

function Home({ openMenu, setOpenMenu }) {
  return (
    <section className='home'>
      <Bubble />
      <Bubble />
      <Bubble />
      <Bubble />
      <Bubble />
      <button
        className='home__button-menu'
        onClick={() => setOpenMenu(!openMenu)}
      >
        {!openMenu ? (
          <img src='/svg/arrow left_Mesa de trabajo 1.svg' alt='open menu' />
        ) : (
          <img src='svg/arrow right_Mesa de trabajo 1.svg' alt='open menu' />
        )}
      </button>
    </section>
  )
}

export { Home }
