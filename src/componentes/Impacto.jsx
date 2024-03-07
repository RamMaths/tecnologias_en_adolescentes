import { 
    Container,
    Row,
    Col,
    Card
} from "react-bootstrap";

import "./Impacto.css";

const Impacto = () => {

    const cardHeight = "13em";

    return (
        <Container className="pt-5">
            <Row>
                <Col>
                    <h2 className="text-start">Impacto de las tecnologías en la juventud</h2>
                </Col>
            </Row>
            <Row className="row row-cols-3 pt-5 justify-content-center align-items-center">
                <Col>
                    <Container className="w-100">
                        <Card className="card" style={{ width: "22em", minHeight: cardHeight }}>
                          <Card.Body>
                            <Card.Title>Comunicación</Card.Title>
                            <Card.Text>
                                Las tecnologías digitales facilitan la comunicación constante entre
                                adolescentes y sus amigos y familiares a través de mensajes, redes sociales
                                y aplicaciones de mensajería.
                            </Card.Text>
                          </Card.Body>
                        </Card>
                    </Container>
                </Col>
                <Col>
                    <Container>
                        <Card className="card" style={{ width: "22em", minHeight: cardHeight }}>
                          <Card.Body>
                            <Card.Title>Educación</Card.Title>
                            <Card.Text>
                                Proporcionan acceso a recursos educativos en línea, permitiendo a los adolescentes
                                aprender de forma autodidacta y explorar áreas de interés.
                            </Card.Text>
                          </Card.Body>
                        </Card>
                    </Container>
                </Col>
                <Col>
                    <Container className="w-100">
                        <Card className="card" style={{ width: "22em", minHeight: cardHeight }}>
                          <Card.Body>
                            <Card.Title>Entretenimiento</Card.Title>
                            <Card.Text>
                                Ofrecen una amplia gama de opciones de entretenimiento, como videojuegos, streaming,
                                redes sociales y contenido en línea
                            </Card.Text>
                          </Card.Body>
                        </Card>
                    </Container>
                </Col>
                <Col>
                    <Container>
                        <Card className="card" style={{ width: "22em", minHeight: cardHeight }}>
                          <Card.Body>
                            <Card.Title>Socialización</Card.Title>
                            <Card.Text>
                                Facilitan la conexión con personas de intereses similares en línea, beneficiando
                                a aquellos que se sienten marginados en entornos sociales tradicionales.
                            </Card.Text>
                          </Card.Body>
                        </Card>
                    </Container>
                </Col>
                <Col>
                    <Container className="w-100">
                        <Card className="card" style={{ width: "22em", minHeight: cardHeight }}>
                          <Card.Body>
                            <Card.Title>Desarrollo de habilidades</Card.Title>
                            <Card.Text>
                                Ayudan a desarrollar habilidades técnicas, cognitivas y sociales, como
                                resolución de problemas, pensamiento crítico y colaboración.
                            </Card.Text>
                          </Card.Body>
                        </Card>
                    </Container>
                </Col>
                <Col>
                    <Container>
                        <Card className="card" style={{ width: "22em", minHeight: cardHeight }}>
                          <Card.Body>
                            <Card.Title>Riesgos y precauciones</Card.Title>
                            <Card.Text>
                                Las tecnologías digitales pueden plantear riesgos como adicción, impacto en
                                la salud mental y física, exposición a contenido inapropiado y privacidad en línea. 
                            </Card.Text>
                          </Card.Body>
                        </Card>
                    </Container>
                </Col>
            </Row>
        </Container>
    );
}

export default Impacto;
