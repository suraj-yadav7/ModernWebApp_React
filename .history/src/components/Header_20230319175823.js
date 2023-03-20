import React from 'react'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'

const Header = () => {
  return (
    <>
    <nav>
        <h1>The Mordern Website</h1>
        <main>
            <HashLink to="/">Home</HashLink>
            <HashLink to="/#brand">Brand</HashLink>
            <HashLink to="/#about">About</HashLink>
            <HashLink to="/#contact">Contact</HashLink>
            <HashLink to="/services">Services</HashLink>
        </main>
    </nav>
    </>
  )
}

export default Header
