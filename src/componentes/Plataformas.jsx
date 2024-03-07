import { 
    Row,
    Col,
    Container,
    Image
} from "react-bootstrap";

import facebook from "../media/icons8-facebook-48.png";
import whatsapp from "../media/icons8-whatsapp-48.png";
import instagram from "../media/icons8-instagram-48.png";
import pinterest from "../media/icons8-pinterest-48.png";
import tiktok from "../media/icons8-tiktok-48.png";

const Plataformas = () => {
    return (
        <Container className="pt-5">
            <h3 className="text-end">Plataformas más utilizadas</h3>
            <Row className="pt-5 row row-cols-5">
                <Col>
                    <Image src={facebook} className='border-0' thumbnail></Image>
                </Col>
                <Col>
                    <Image src={whatsapp} className='border-0' thumbnail></Image>
                </Col>
                <Col>
                    <Image src={instagram} className='border-0' thumbnail></Image>
                </Col>
                <Col>
                    <Image src={pinterest} className='border-0' thumbnail></Image>
                </Col>
                <Col>
                    <Image src={tiktok} className='border-0' thumbnail></Image>
                </Col>
            </Row>
        </Container>
    );
};

export default Plataformas;
