import React from 'react'
import {NavLink} from 'react-router-dom'


function Header() {
  return (
     <header className="header">
      <div className="container">
          <nav className="topNav">
            <NavLink to="/">Anasayfa</NavLink>
            <NavLink to="/about">Hakkımda</NavLink>
            <NavLink to="/projeler">Projeler</NavLink>
        </nav>
      </div>
     </header>
  )
}

export default Header