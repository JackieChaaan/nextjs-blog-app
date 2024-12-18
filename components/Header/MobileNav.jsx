import Link from 'next/link'
import React from 'react'
import './MobileNav.scss'

const MobileNav = () => {
  return (
    <nav id='mob-nav-links'>
        <ul id='mob-nav-items'>
            <li ><Link href='/'>Home</Link></li>
            <li >Blog</li>
            <li>Single Post</li>
            <li>Pages</li>
            <li>Contact</li>
        </ul>
    </nav>
  )
}

export default MobileNav
