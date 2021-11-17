import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import "./App.css";
import { Nav, Navbar, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <header>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand as={NavLink} to="/">Aircnc</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link as={NavLink} to="/Imoveis">Imoveis</Nav.Link>
              <Nav.Link href="#pricing">Outro</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </header>
      <main>
        <Outlet></Outlet>
      </main>
      <footer>
        <h2>Footer</h2>
      </footer>
    </>
  );
}

export default App;
