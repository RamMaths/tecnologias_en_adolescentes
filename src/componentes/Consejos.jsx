import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './App.css';
import image1 from '../img/1.jpg'; 
import image2 from '../img/2.jpg'; 
import image3 from '../img/3.jpg'; 
import image4 from '../img/4.jpg'; 


function Consejos() {
  return (
    <div className="card-container">
        <div className='consejos-titulo'>Consejos para un uso Responsable del Internet</div>
        <div className='consejos-card'>
            <Card style={{ width: '18rem' }}>
               <Card.Img variant="top" src={image1} className='consejos-image'/>
                    <Card.Body>
                        <Card.Title className='consejos-subtitulo'>Mantengan un diálogo abierto</Card.Title>
                        <Card.Text className='recursos-contenido'>
                        Habla con tus hijos sobre los beneficios y peligros de las redes sociales. Aprende sobre las plataformas en las que están activos para comprender mejor lo que ocurre en línea.
                        </Card.Text>
                    </Card.Body>
                    </Card>
        </div>
        
        <div className='consejos-card'>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={image3} className='consejos-image'/>
                    <Card.Body>
                        <Card.Title className='consejos-subtitulo'>Acceso autorizado a sus cuentas</Card.Title>
                        <Card.Text className='recursos-contenido'>
                        Como padre, mantén acceso a las cuentas de redes sociales de tu hijo. Esto te permite monitorear mensajes privados y protegerlos de peligros potenciales.
                        </Card.Text>
                    </Card.Body>
                    </Card>
        </div>
        <div className='consejos-card'>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={image2} className='consejos-image'/>
                    <Card.Body className='card-body'>
                        <Card.Title className='consejos-subtitulo'>Uso correcto de contraseñas</Card.Title>
                        <Card.Text className='recursos-contenido'>
                        Enseña a tu hijo a no compartir contraseñas con nadie más que contigo. Las contraseñas deben ser seguras y no incluir información fácil de adivinar.
                        </Card.Text>
                    </Card.Body>
                    </Card>
        </div>
        <div className='consejos-card'>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={image4} className='consejos-image'/>
                    <Card.Body>
                        <Card.Title className='consejos-subtitulo'>Evita interacciones con extraños</Card.Title>
                        <Card.Text className='recursos-contenido'>
                        Enséñales a no interactuar con desconocidos en línea. Los peligros suelen aparecer en mensajes privados, por lo que es importante estar alerta.
                        </Card.Text>
                    </Card.Body>
             </Card>
        </div>
    </div>
    );
}

export default Consejos;