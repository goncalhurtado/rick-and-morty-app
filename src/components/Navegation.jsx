import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

const Navegation = () => {
  return (
    <>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Link className="" to="./Home">
              Home
            </Link>
            <Link className="" to="./Characters">
              Characters
            </Link>
            <Link className="" to="./Episodes">
              Episodes
            </Link>
            <Link className="" to="./Form">
              Form
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Navegation;
