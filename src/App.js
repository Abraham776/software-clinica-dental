import Login from './pages/login/Login';
import Home from './pages/home/Home';
import Paciente from './pages/home/home-pages/Pacientes';
import HistoriaClinica from './pages/home/home-pages/HistoriaClinica';
import AgendarCita from './pages/home/home-pages/AgendarCita';
import Administracion from './pages/home/home-pages/Administracion';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

export default function App() {
  return (
    
    
    
    <BrowserRouter>

    
      <Routes>
        <Route path="/"  element={<Login/>} />
        <Route path="/home"  element={<Home/>} />
        <Route path='/pacientes' element={<Paciente/>}/>
        <Route path='/historiaClinica' element={<HistoriaClinica />}/>
        <Route path='/agendarCita' element={<AgendarCita/>}/>
        <Route path='/administracion' element={<Administracion/>}/>

      </Routes>
     
       




    </BrowserRouter>
        
        
  );
}
