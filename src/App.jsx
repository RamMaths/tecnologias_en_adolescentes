import '../src/componentes/App.css';
import React from 'react';
import Recursos from './componentes/Recursos';
import Consejos from './componentes/Consejos'; // Import Consejos component

function App() {
  return (
    <div>
      <Recursos />
      <Consejos />
    </div>
  );
}

export default App;