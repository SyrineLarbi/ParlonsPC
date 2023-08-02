import React from 'react'
import { Container } from 'react-bootstrap'
import logo from "../assets/logo_nav.jpg"
import { NavLink} from "react-router-dom"


const navLinks=[
    {
        display : "Acceuil",
        path : "/home"
    },
    {
        display : "Prix",
        path : "/price"
    },
    {
        display: "Contact Us",
        path:"/contact"
    },
];

export default function Header() {
  return (
    <header className='header'>
        <Container>
            <div className='navBar_container'>
                <img src={logo} alt="logo" />
            </div>
                {/****Nav links *****/}
            <div className='nav_links'>
                {navLinks.map((item,index)=>(
                    <NavLink 
                    to={item.path}
                    key={index}
                    className={(navClass)=>
                        navClass.isActive ? "activeLink":""}
                    >
                        {item.display}
                    </NavLink>
                ))}
            </div>
                        
        </Container>
    </header>
  )
}
