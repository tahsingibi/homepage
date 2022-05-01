import React from 'react'
import {NavLink} from 'react-router-dom'
import Mode from './Mode'

const Header = () => {

  return (
    
        <div className="container backdrop-blur-md my-4 py-4 sticky top-0 md:top-4 md:rounded-2xl text-zinc-400 text-3xl flex items-center justify-between border border-zinc-400 border-opacity-5 shadow">
            <nav className="text-base space-x-1 font-light">
                <NavLink className="navLink px-3 py-2 bg-opacity-40 rounded-md hover:opacity-70" to="/">Anasayfa</NavLink>
                <NavLink className="navLink px-3 py-2 bg-opacity-40 rounded-md hover:opacity-70" to="/about">Hakkımda</NavLink>
                <NavLink className="navLink px-3 py-2 bg-opacity-40 rounded-md hover:opacity-70" to="/portfolio">Portföy</NavLink>
            </nav>
            <Mode/>
        </div>
 
  )
}

export default Header