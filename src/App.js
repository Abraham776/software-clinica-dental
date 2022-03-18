import Login from './pages/login/Login';
import Home from './pages/home/Home';
import Paciente from './pages/home/home-pages/Pacientes';
import HistoriaClinica from './pages/home/home-pages/HistoriaClinica';
import AgendarCita from './pages/home/home-pages/AgendarCita';
import Administracion from './pages/home/home-pages/Administracion';
import AdministracionDoctores from './pages/home/home-pages/AdministracionDoctores';
import AdministracionTratamientos from './pages/home/home-pages/AdministracionTratamientos';
import AdministracionTratamientosAdd from './pages/home/home-pages/AdministracionTratamientosAdd';
import AdministracionDoctoresAdd from './pages/home/home-pages/AdministracionDoctoresAdd';
import AdministracionTratamientosVista from './pages/home/home-pages/AdministracionTratamientosVista';
import PacienteHisto from './pages/home/home-pages/home-pages-paciente/PacienteHisto';
import PacienteHistoConse from './pages/home/home-pages/home-pages-paciente/PacienteHistoConse';
import PacienteHistoEvolucion from './pages/home/home-pages/home-pages-paciente/PacienteHistoEvolucion';
import PacienteHistoEvolucionVista from './pages/home/home-pages/home-pages-paciente/PacienteHistoEvolucionVista';
import PacienteHistoEvolucionAdd from './pages/home/home-pages/home-pages-paciente/PacienteHistoEvolucionAdd';
import PacienteHistoImagenes from './pages/home/home-pages/home-pages-paciente/PacienteHistoImagenes';
import PacienteHistoImagenesAdd from './pages/home/home-pages/home-pages-paciente/PacienteHistoImagenesAdd';
import PacienteHistoOdonto from './pages/home/home-pages/home-pages-paciente/PacienteHistoOdonto';
import PacienteHistoReceta from './pages/home/home-pages/home-pages-paciente/PacienteHistoReceta';
import PacienteHistoRecetaAdd from './pages/home/home-pages/home-pages-paciente/PacienteHistoRecetaAdd';
import PacienteHistoHistoriales1 from './pages/home/home-pages/home-pages-paciente/comunes/PacienteHistoHistoriales1';
import PacienteHistoHistoriales2 from './pages/home/home-pages/home-pages-paciente/comunes/PacienteHistoHistoriales2';
import PacienteHistoHistoriales3 from './pages/home/home-pages/home-pages-paciente/comunes/PacienteHistoHistoriales3';
import PacienteHistoHistoriales4 from './pages/home/home-pages/home-pages-paciente/comunes/PacienteHistoHistoriales4';
import PacienteHistoHistoriales5 from './pages/home/home-pages/home-pages-paciente/comunes/PacienteHistoHistoriales5';
import NuevoHistorialOrt from './pages/home/home-pages/home-pages-paciente/comunes/NuevoHistorialOrt';
import NuevoHistorialOdon from './pages/home/home-pages/home-pages-paciente/comunes/NuevoHistorialOdon';
import NuevoHistorialEndo from './pages/home/home-pages/home-pages-paciente/comunes/NuevoHistorialEndo';
import NuevoHistorialGeneral from './pages/home/home-pages/home-pages-paciente/comunes/NuevoHistorialGeneral';
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
				<Route path='/administraciondoctores' element={<AdministracionDoctores />} />
				<Route path='/administraciontratamientos' element={<AdministracionTratamientos/>} />
				<Route path='/AdministracionDoctoresAdd' element={<AdministracionDoctoresAdd />} />
				<Route path='/AdministracionTratamientosAdd' element={<AdministracionTratamientosAdd />} />
				<Route path='/AdministracionTratamientosVista' element={<AdministracionTratamientosVista />} />
				<Route path='/PacienteHisto' element={<PacienteHisto />} />
				<Route path='/PacienteHistoConse' element={<PacienteHistoConse />} />
				<Route path='/PacienteHistoEvolucion' element={<PacienteHistoEvolucion />} />
				<Route path='/PacienteHistoEvolucionVista' element={<PacienteHistoEvolucionVista />}/>
				<Route path='/PacienteHistoEvolucionAdd' element={<PacienteHistoEvolucionAdd />}/>
				<Route path='/PacienteHistoImagenes' element={<PacienteHistoImagenes />} />
				<Route path='/PacienteHistoImagenesAdd' element={<PacienteHistoImagenesAdd />} />
				<Route path='/PacienteHistoOdonto' element={<PacienteHistoOdonto />} />
				<Route path='/PacienteHistoReceta' element={<PacienteHistoReceta />} />
				<Route path='/PacienteHistoRecetaAdd' element={<PacienteHistoRecetaAdd />}/>
				<Route path='/PacienteHistoHistoriales1' element={<PacienteHistoHistoriales1 />} />
				<Route path='/PacienteHistoHistoriales2' element={<PacienteHistoHistoriales2 />} />
				<Route path='/PacienteHistoHistoriales3' element={<PacienteHistoHistoriales3 />} />
				<Route path='/PacienteHistoHistoriales4' element={<PacienteHistoHistoriales4 />} />
				<Route path='/PacienteHistoHistoriales5' element={<PacienteHistoHistoriales5 />} />
				<Route path='/NuevoHistorialOrt' element={<NuevoHistorialOrt/>}/>
				<Route path='/NuevoHistorialOdon' element={<NuevoHistorialOdon/>}/>
				<Route path='/NuevoHistorialEndo' element={<NuevoHistorialEndo/>}/>
				<Route path='/NuevoHistorialGeneral' element={<NuevoHistorialGeneral/>}/>
			</Routes>
		</BrowserRouter>
	);
}
