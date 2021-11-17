import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import "./App.css";
import { Nav, Navbar, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <header>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand as={NavLink} to="/imoveis">
              Aircnc
            </Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link as={NavLink} to="/imoveis/Casa">
                Casas
              </Nav.Link>
              <Nav.Link as={NavLink} to="/imoveis/ap">
                Apartamentos
              </Nav.Link>
              <Nav.Link as={NavLink} to="/imoveis/quarto">
                Quartos
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </header>
      <main>
        <Outlet></Outlet>
      </main>
      <footer>
        <Container>
          <Row>
            <Col><p>Desenvolvido por Luísa Santos e Nicolás Gonçalves.</p></Col>
          </Row>
        </Container>
      </footer>
    </>
  );
}

export default App;
