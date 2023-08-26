import { Bubble } from "../Bubble/Bubble"
import "./Home.css"

function Home() {
  return (
    <section className='home'>
      <Bubble />
      <Bubble />
      <Bubble />
      <Bubble />
      <Bubble />
      <button className='home__button-menu'>{"<<"}</button>
    </section>
  )
}

export { Home }
