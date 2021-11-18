import React, { useState, useEffect } from "react";
import {
  Row,
  Col,
  Card,
  Button,
  ButtonGroup,
  Container,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
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
              <Container>
                <section className="imoveisSection">
                  <Row>
                    <Col>
                      <Card style={{ width: "100%" }}>
                        <Card.Body>
                          <Card.Title>
                            {i.tipoDeImovel} em {i.endereco}
                          </Card.Title>
                          <p className="imovelP">Informações Gerais:</p>
                          <Card.Text>
                            Comodos: {i.comodos} | banheiros: {i.banheiros} |
                            andar: {i.andar}{" "}
                          </Card.Text>
                          <p className="imovelP">Comodidades:</p>
                          <Card.Text>
                            {i.comodidades.arCond && "Ar Condicionado |"}{" "}
                            {i.comodidades.wifi && "Wifi |"}{" "}
                            {i.comodidades.cozinha && "Cozinha |"}{" "}
                            {i.comodidades.garagem && "Garagem |"}
                          </Card.Text>
                          <p className="imovelP">Segurança:</p>
                          <Card.Text>
                            {i.seguranca.detecFumaça && "Detector de Fumaça |"}
                            {i.seguranca.cameras && "Câmeras |"}
                            {i.seguranca.extintorIncend &&
                              "Extintor de Incêndio |"}
                            {i.seguranca.alarmcorbono && "Alarme de Carbono |"}
                          </Card.Text>
                          <Card.Text>
                            Câmeras: {i.seguranca.cameras} | Alarme:{" "}
                            {i.seguranca.alarmcorbono}
                          </Card.Text>
                          <p className="imovelP">Taxas:</p>
                          <Card.Text>
                            Taxa de serviço: R${i.txServico} | Taxa de limpeza:
                            R$
                            {i.txLimpeza}
                          </Card.Text>
                          <h6>R${i.preco} / Noite</h6>
                          <Button variant="dark">Alugar</Button>
                        </Card.Body>
                      </Card>
                    </Col>
                  </Row>
                </section>
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
    </div>
  );
}
