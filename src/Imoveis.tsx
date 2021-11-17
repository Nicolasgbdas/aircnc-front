import React from "react";
import { Row, Col, Card, Button } from "react-bootstrap";

export default function Imoveis() {
  return (
    <section className="imoveisSection">
      <h1 className="tituloImoveis">Escolha seu próximo destino</h1>

     

      <Row xs={2} md={4}>
        {Array.from({ length: 4 }).map((_, idx) => (
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Nome Imovel</Card.Title>
                <Card.Text>Endereço do imovel</Card.Text>
                <Button variant="dark">Detalhes</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </section>
  );
}
