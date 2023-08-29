import { Home } from "./components/Home/Home"
import { NavBar } from "./components/NavBar/NavBar"
import "./App.css"
import { useState } from "react"
import { GaleryCharacters } from "./components/GaleryCharacters/GaleryCharacters"

function App() {
  const [openMenu, setOpenMenu] = useState(false)
  const [observerGalery,setObserverGalery]=useState(false)
  return (
    <>
      <header>{openMenu && <NavBar></NavBar>}</header>
      <main>
        <Home openMenu={openMenu} setOpenMenu={setOpenMenu} />
        <GaleryCharacters
          openMenu={openMenu}
          setOpenMenu={setOpenMenu}
          observerGalery={observerGalery}
          setObserverGalery={setObserverGalery}
        />
      </main>
    </>
  )
}

export default App
