import { Home } from "./components/Home/Home"
import { NavBar } from "./components/NavBar/NavBar"
import "./App.css"
import { useState } from "react"

function App() {
  const [openMenu, setOpenMenu] = useState(false)
  return (
    <>
      <header>{openMenu && <NavBar></NavBar>}</header>
      <main>
        <Home openMenu={openMenu} setOpenMenu={setOpenMenu} />
      </main>
    </>
  )
}

export default App
