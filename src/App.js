import './App.css';
import React from 'react';
import Inicio from './components/pages/Inicio';
import Candidaturas from './components/pages/Candidaturas';
import Vagas from './components/pages/Vagas';
import Perfil from './components/pages/Perfil';
import NavBar from './components/layout/NavBar';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
        < Router>
        <NavBar/>
          <Routes>
              <Route path='/' exact element={<Inicio />} />
              <Route path='/candidaturas' element={<Candidaturas />} />
              <Route path='/vagas' element={<Vagas />} />
              <Route path='/perfil' element={<Perfil />} />
          </Routes>
          {/* < Footer /> */}
        </Router>
    </div>
  );
}

export default App;
