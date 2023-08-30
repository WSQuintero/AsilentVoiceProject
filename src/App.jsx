import { Home } from "./components/Home/Home"
import { NavBar } from "./components/NavBar/NavBar"
import { useState } from "react"
import { GaleryCharacters } from "./components/GaleryCharacters/GaleryCharacters"
import { History } from "./components/History/History"
import { GaleryImg } from "./components/GaleryImg/GaleryImg"
import "./App.css"

function App() {
  const [openMenu, setOpenMenu] = useState(false)

  return (
    <>
      <header>{openMenu && <NavBar></NavBar>}</header>
      <main>
        <Home openMenu={openMenu} setOpenMenu={setOpenMenu} />
        <GaleryCharacters openMenu={openMenu} setOpenMenu={setOpenMenu} />
        <History setOpenMenu={setOpenMenu} />
        <GaleryImg setOpenMenu={setOpenMenu} />
      </main>
    </>
  )
}

export default App
