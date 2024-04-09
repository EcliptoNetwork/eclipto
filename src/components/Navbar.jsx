import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <header className="header" >
        <NavLink to="/" className="w-20 h-10 rounded-lg bg-white items-center justify-center flex font-bold text-black shadow-md">
            <p>Eclipto</p>
        </NavLink>
        <nav className="flex text-lg gap-7 font-medium">
        <NavLink to="/about" className={({ isActive }) => isActive?
        'text-orange-500' : 'text-white'}>
            About
        </NavLink>
        <NavLink to="/initiatives" className={({ isActive }) => isActive?
        'text-orange-500' : 'text-white'}>
            Initiatives
        </NavLink>
        <NavLink to="/research" className={({ isActive }) => isActive?
        'text-orange-500' : 'text-white'}>
            Research
        </NavLink>

        </nav>
    </header>
  )
}

export default Navbar
