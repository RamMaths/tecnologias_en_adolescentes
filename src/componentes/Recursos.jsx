import './App.css';
import image from '../img/OIP.jpg';

const Recursos = () => {
    const recursos = [
        {
          title: 'Uso Saludable del Internet',
          description:
            'Consejos sobre cómo mantener una relación saludable con la tecnología.',
          link: 'https://www.goodtherapy.org/blog/dos-and-donts-of-healthy-technology-use-0203184',
        },
        {
          title: 'Conversaciones sobre Seguridad en Línea',
          description:
            'Guías de seguridad en línea para padres de la NSPCC.',
          link: 'https://www.nspcc.org.uk/keeping-children-safe/online-safety/',
        },
        {
          title: 'Consejos para Adolescentes',
          description:
            'Recomendaciones para adolescentes sobre el uso responsable de la tecnología.',
          link: 'https://www.safewise.com/blog/teen-internet-safety-tips/',
        }
      ];
    return (
            <div className="recursos-container">
                <div className='recursos-titulo'>Recursos para un uso Responsable del Internet</div>
                <ul>
                {recursos.map((recurso, index) => ( 
                    <li key={index}>
                    <div className='recursos-subtitulo'>{recurso.title}</div>
                    <div className='recursos-contenido'>{recurso.description}</div>
                    <a href={recurso.link} target="_blank" rel="noopener noreferrer">
                        <div className='recursos-leer'>Leer más</div>
                    </a>
                    </li>
                ))}
                </ul>
                <img src={image} className="recursos-image" />            </div>
        );
    };

export default Recursos;
