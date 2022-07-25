import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Navbar.module.css'

const Navbar = () => {
  return (
    <>
      <nav>
        <NavLink to="/" className={styles.logo}>LOGO</NavLink>
        <ul className={styles.links}>
          <li> 
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar