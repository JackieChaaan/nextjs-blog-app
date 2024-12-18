import Link from 'next/link'
import React from 'react'
import './NavLinks.scss'

const NavLinks = () => {
  return (
    <nav className='nav_links'>
        <ul className='nav-link-items'>
            <li ><Link href='/'>Home</Link></li>
            <li >Blog</li>
            <li>Single Post</li>
            <li>Pages</li>
            <li>Contact</li>
        </ul>
    </nav>
  )
}

export default NavLinks
