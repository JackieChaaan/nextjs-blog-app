import React from 'react'

import Image from 'next/image'
import './Logo.scss'

const Logo = () => {
  return (
    <figure>
        <Image src='/assets/Logo.png' alt='logo' width="158" height="36"/>
    </figure>
  )
}

export default Logo
