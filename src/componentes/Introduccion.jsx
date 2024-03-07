//librerias
import { 
    Row,
    Col,
    Container,
    Image
} from 'react-bootstrap';

//imagenes
import img from "../media/Adolescentes-y-uso-de-TIC.jpg";

//css
import "./Introduccion.css";

const Introduccion = () => {
    const introduccion ={
        width: "100%"
    };

    return (
    <Container className="m-0" style={introduccion}>
        <Row>
            <Col>
                <h2 className="text-start">Introducción</h2>
            </Col>
        </Row>
        <Row className="pt-3">
            <Col sm={8}>
                <div className="justify-content-center align-items-center">
                    <p className="text-justify">
                        Las tecnologías digitales han transformado profundamente la forma en que los jóvenes interactúan con
                        el mundo que les rodea. Desde dispositivos móviles hasta redes sociales y aplicaciones, estas
                        tecnologías han cambiado la manera en que se comunican, se informan, se divierten y aprenden.
                        En el día a día, los jóvenes utilizan las tecnologías digitales para estar conectados con amigos
                        y familiares a través de redes sociales como Facebook, Instagram, Snapchat y Twitter.
                    </p>
                </div>
            </Col>

            <Col sm={4}>
                <div className="justify-content-center align-items-center"></div>
                <Image src={img} thumbnail></Image>
            </Col>
        </Row>
        <Row className="mt-3">
            <Col className="">
                <p>
                     Estas
                    plataformas les permiten compartir momentos de su vida, mantenerse al tanto de lo que hacen
                    sus amigos y expresar sus ideas y opiniones.

                    Además, los jóvenes utilizan internet para acceder a información y recursos educativos. Ya sea
                    para hacer tareas escolares, investigar temas de interés o aprender nuevas habilidades, internet
                    les ofrece un mundo de conocimiento al alcance de sus manos.
                </p>
            </Col>
        </Row>
    </Container>
    );
}

export default Introduccion;
