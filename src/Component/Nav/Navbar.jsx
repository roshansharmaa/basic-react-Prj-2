import React from "react";
import style from './Navbar.module.css'
function Navbar() {
  return (
    <nav className={`${style.nav_cont}`}>
        <div className={`${style.first}`}>Contecto</div>
        <ul className={`${style.second}`}>
          <li>Home</li>
          <li>Contect</li>
        </ul>
      </nav>
  )
}
export default Navbar;