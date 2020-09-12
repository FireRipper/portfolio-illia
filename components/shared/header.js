import React, { useState } from 'react'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem
} from 'reactstrap'
import Link from 'next/link'

const BsNavBrand = ({ label }) => (
  <Link href="/">
    <a className="navbar-brand port-navbar-brand">{label}</a>
  </Link>
)

const LoginLink = () => (
  <span className="nav-link port-navbar-link">Login</span>
)

const LogoutLink = () => (
  <span className="nav-link port-navbar-link">Logout</span>
)

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const navItems = [
    { key: 'home', link: '/', title: 'Home' },
    { key: 'about', link: '/about', title: 'About' },
    { key: 'portfolios', link: '/portfolios', title: 'Portfolios' },
    { key: 'blogs', link: '/blogs', title: 'Blogs' },
    { key: 'cv', link: '/cv', title: 'Cv' }
  ]

  const renderNavItems = navItems.map(({ key, link, title }) => (
    <NavItem key={key} className="port-navbar-item">
      <Link href={link}>
        <a className='nav-link port-navbar-link'>
          {title}
        </a>
      </Link>
    </NavItem>
  ))

  const toggle = () => setIsOpen(!isOpen)

  return (
    <div>
      <Navbar
        className='port-navbar port-default absolute'
        color="transparent"
        dark
        light expand="md">
        <BsNavBrand label='Illia' />
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            {renderNavItems}
          </Nav>
          <Nav navbar>
            <NavItem className="port-navbar-item">
              <a href={'/api/v1/login'} className='nav-link port-navbar-link'>
                <LoginLink />
              </a>
            </NavItem>

          </Nav>
        </Collapse>
      </Navbar>
    </div>
  )
}

// <NavItem className="port-navbar-item">
//   <Link href={'/logout'}>
//     <a className='nav-link port-navbar-link'>
//       <LogoutLink/>
//     </a>
//   </Link>
// </NavItem>

export default Header
