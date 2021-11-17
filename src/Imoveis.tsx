import React, { useState, useEffect } from "react";
import {
  Row,
  Col,
  Card,
  Button,
  ButtonGroup,
  Container,
} from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
import { Imovel } from "../aircnc-back/src/entidades/Imovel";
import fetch from "node-fetch";

export default function Imoveis() {
  const [dados, setDados] = useState<Array<Imovel>>();
  const [carregando, setCarregando] = useState(false);
  const [erro, setErro] = useState(false);
  const [elements, setElements] = useState<Array<JSX.Element>>([]);
  let navigate = useNavigate();

  useEffect(() => {
    async function consultarWebServer() {
      setErro(false);
      setCarregando(true);
      try {
        const resultado = await fetch("http://localhost:5000/imoveis");
        if (resultado.ok) {
          const dados: Array<Imovel> = await resultado.json();
          setDados(dados);
        } else {
          setErro(true);
        }
      } catch (error) {
        setErro(true);
      }

      setCarregando(false);
    }

    consultarWebServer();
  }, []);

  useEffect(() => {
    function Elements(dados: Array<Imovel>) {
      let element = [];
      for (let i of dados) {
        element.push(
          <>
            <Container className="ImovelContainer">
              {/*<Button
                variant="light"
                onClick={() => {
                  navigate(`/imovel/${i.iId}`);
                }}
              >*/}
              <Col className="ImovelButton">
                <div>Tipo de imóvel: {i.tipoDeImovel}</div>
                <div>
                  {i.comodos} comodos • {i.banheiros} banheiros
                </div>
                <div> ~~~~ </div>
                <div>
                  {i.comodidades.arCond && "Ar Condicionado • "}
                  {i.comodidades.wifi && "Wifi • "}{" "}
                  {i.comodidades.cozinha && "Cozinha • "}{" "}
                  {i.comodidades.garagem && "Estacionamento Gratuito"}{" "}
                </div>
                <div> ~~~~ </div>
                <h5>R${i.preco} / Noite</h5>
              </Col>
              {/*</Button>*/}
            </Container>
          </>
        );
      }

      setElements(element);
    }

    Elements(dados || []);
  }, [dados]);

  return (
    <div>
      {erro && <div>Ocorreu um erro!</div>}
      {carregando ? (
        <div>Carregando...</div>
      ) : (
        dados && (
          <div>
            {" "}
            <ButtonGroup vertical> {elements} </ButtonGroup>
          </div>
        )
      )}

      <section className="imoveisSection">
        <h1 className="tituloImoveis">Escolha seu próximo destino</h1>

        <Row xs={2} md={4}>
          {Array.from({ length: 4 }).map((_, idx) => (
            <Col>
              <Card style={{ width: "100%" }}>
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
    </div>
  );
}
