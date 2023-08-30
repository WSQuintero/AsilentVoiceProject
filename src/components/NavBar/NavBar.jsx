import "./NavBar.css"

function NavBar() {
  return (
    <nav className='nav-bar'>
      <ul className='nav-bar__container-links'>
        <li className='nav-bar__link'>
          <a href='#home'>home</a>
        </li>
        <li className='nav-bar__link'>
          <a href='#galery-character__container'>Personajes</a>
        </li>
        <li className='nav-bar__link'>
          <a href='#history__container'>Historia</a>
        </li>
        <li className='nav-bar__link'>
          <a href='#galery-img__container'>Galería</a>
        </li>
      </ul>
    </nav>
  )
}

export { NavBar }
