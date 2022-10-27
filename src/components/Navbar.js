import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'

const NavBar = () => {
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="#home">Gabriela Papp </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggle-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
          </Nav>
          <span className="navbar-social-icons">
            <div className="social-icons">
              <a href="#">
                <img src="" alt="" />
              </a>
              <a href="#">
                <img src="" alt="" />
              </a>
              <a href="#">
                <img src="" alt="" />
              </a>
            </div>
               <div to='#connect'>
                <button className="vvd"><span>Let’s Connect</span></button>
              </div>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
export default NavBar
