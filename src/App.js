import Login from './pages/login/Login';
import Home from './pages/home/Home';
import Paciente from './pages/home/home-pages/Pacientes';
import HistoriaClinica from './pages/home/home-pages/HistoriaClinica';
import AgendarCita from './pages/home/home-pages/AgendarCita';
import Administracion from './pages/home/home-pages/Administracion';
import PacienteHisto from './pages/home/home-pages/home-pages-paciente/PacienteHisto';
import PacienteHistoConse from './pages/home/home-pages/home-pages-paciente/PacienteHistoConse';
import PacienteHistoEvolucion from './pages/home/home-pages/home-pages-paciente/PacienteHistoEvolucion';
import PacienteHistoImagenes from './pages/home/home-pages/home-pages-paciente/PacienteHistoImagenes';
import PacienteHistoOdonto from './pages/home/home-pages/home-pages-paciente/PacienteHistoOdonto';
import PacienteHistoOdontoAc from './pages/home/home-pages/home-pages-paciente/PacienteHistoOdontoAc';
import PacienteHistoReceta from './pages/home/home-pages/home-pages-paciente/PacienteHistoReceta';
import PacienteHistoHistoriales1 from './pages/home/home-pages/home-pages-paciente/comunes/PacienteHistoHistoriales1';
import PacienteHistoHistoriales2 from './pages/home/home-pages/home-pages-paciente/comunes/PacienteHistoHistoriales2';
import PacienteHistoHistoriales3 from './pages/home/home-pages/home-pages-paciente/comunes/PacienteHistoHistoriales3';
import PacienteHistoHistoriales4 from './pages/home/home-pages/home-pages-paciente/comunes/PacienteHistoHistoriales4';
import PacienteHistoHistoriales5 from './pages/home/home-pages/home-pages-paciente/comunes/PacienteHistoHistoriales5';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export default function App() {
	return (



		<BrowserRouter>


			<Routes>
				<Route path="/" element={<Login />} />
				<Route path="/home" element={<Home />} />
				<Route path='/pacientes' element={<Paciente />} />
				<Route path='/historiaClinica' element={<HistoriaClinica />} />
				<Route path='/agendarCita' element={<AgendarCita />} />
				<Route path='/administracion' element={<Administracion />} />
				<Route path='/PacienteHisto' element={<PacienteHisto />} />
				<Route path='/PacienteHistoConse' element={<PacienteHistoConse />} />
				<Route path='/PacienteHistoEvolucion' element={<PacienteHistoEvolucion />} />
				<Route path='/PacienteHistoImagenes' element={<PacienteHistoImagenes />} />
				<Route path='/PacienteHistoOdonto' element={<PacienteHistoOdonto />} />
				<Route path='/PacienteHistoOdontoAc' element={<PacienteHistoOdontoAc />} />
				<Route path='/PacienteHistoReceta' element={<PacienteHistoReceta />} />
				<Route path='/PacienteHistoHistoriales1' element={<PacienteHistoHistoriales1 />} />
				<Route path='/PacienteHistoHistoriales2' element={<PacienteHistoHistoriales2 />} />
				<Route path='/PacienteHistoHistoriales3' element={<PacienteHistoHistoriales3 />} />
				<Route path='/PacienteHistoHistoriales4' element={<PacienteHistoHistoriales4 />} />
				<Route path='/PacienteHistoHistoriales5' element={<PacienteHistoHistoriales5 />} />


			</Routes>






		</BrowserRouter>


	);
}
