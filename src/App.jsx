// css
import './App.css'

//componentes y librerías
import Introduccion from './componentes/Introduccion';
import Plataformas from './componentes/Plataformas';
import Impacto from './componentes/Impacto';
import React from 'react';
import Recursos from './componentes/Recursos';
import Consejos from './componentes/Consejos'; // Import Consejos component

function App() {
  return (
    <>
        <Introduccion/>
        <Plataformas/>
        <Impacto/>
        <Recursos />
        <Consejos />
    </>
  )
}

export default App;
