import React from 'react'
import "./Header.css"
import NavBar from './NavBar'

function Header() {
  return (
    <header className='myHeader'>
        <h1>Employee manage system</h1>
        <NavBar></NavBar>
    </header>
  )
}

export default Header
