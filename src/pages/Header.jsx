import React from 'react'
import { Container } from 'react-bootstrap'
import logo from "../assets/logo_nav.jpg"

export default function Header() {
  return (
    <header className='header'>
        <Container>
            <div className='navBar_container'>
                <img src={logo} alt="logo" />
            </div>
        </Container>
    </header>
  )
}
