"use client"
import React, { useState } from 'react'
import Logo from './Logo'
import NavLinks from './NavLinks'
import SearchBar from './SearchBar'
import './Header.scss'
import MobileNav from './MobileNav'

const Header = () => {
  const [isToggled,setIsToggled] = useState(false)
  const handleMobNav =()=>{
    setIsToggled(!isToggled)
  }
  return (
    <header className='container'>
      <div className="logo"><Logo /></div>
      <div className="nav-links"><NavLinks /></div>
      <div className="searchbar"><SearchBar /></div>
      <div className="mobile-nav">
        <svg onClick={()=>handleMobNav()} xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
        </svg>
      </div>

    {isToggled && <MobileNav/>}

    </header>
  )
}

export default Header
