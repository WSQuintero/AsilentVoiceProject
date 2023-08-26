import "./NavBar.css"

function NavBar() {
  return (
    <nav className='nav-bar'>
      <ul className='nav-bar__container-links'>
        <li className='nav-bar__link'>
          <a href=''>home</a>
        </li>
        <li className='nav-bar__link'>
          <a href=''>Personajes</a>
        </li>
        <li className='nav-bar__link'>
          <a href=''>Historia</a>
        </li>
        <li className='nav-bar__link'>
          <a href=''>Galería</a>
        </li>
      </ul>
    </nav>
  )
}

export { NavBar }
