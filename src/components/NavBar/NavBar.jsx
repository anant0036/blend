import React from 'react'
import './Navbar.scss'
import logo from '/a5135f8ce830710c2ef79507cb4441aa-removebg-preview.png'
function NavBar() {
  return (
    <div className='navbar'>
      <li>Power</li>
      <img src={logo} />
      <li>Power</li>
    </div>
  )
}

export default NavBar
