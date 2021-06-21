import React from 'react';
import {Nav, Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";
import {Container} from "react-bootstrap"

const Menu = () => {
    return (
        <>
          <Navbar collapseOnSelect bg="dark" variant={"dark"} expand="md">
              <Container>
                <Navbar.Brand>Baufest Tennis</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="mr-auto">
                    <Nav.Link to={"/"} as={Link} >Home</Nav.Link>
                    <Nav.Link to={"/jugador"} as={Link}>Jugadores</Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Container>
          </Navbar>
        </>
    );
}

export default Menu;
