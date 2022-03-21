import React from "react";
import { NavLink } from "react-router-dom";
import "./sidebarP.scss";
import LogoLogin from "../../../assets/img/LogoLogin.jpg";
import Boton from "./BotonPH";
import Menu from "./Opciones";
import MenuOdo from "./OpcionesOdo";
import { AiOutlineUser, AiOutlineReconciliation, AiOutlineSmile, AiOutlinePicture, AiOutlineFile, AiOutlineSafety } from 'react-icons/ai';


const sidebar = (id) => {
	const paciente = `/PacienteHisto/${id.id}`;
	const Odontograma = `/PacienteHistoOdonto/${id.id}`;
	const evolucion = `/PacienteHistoEvolucion/${id.id}`;
	const imagenes = `/PacienteHistoImagenes/${id.id}`;
	const receta = `/PacienteHistoReceta/${id.id}`;
	const consentimiento = `/PacienteHistoConse/${id.id}`;

	return (

		<div className="sidebar-contenido">

			<ul className="lista">

				<br></br>
				<img src={LogoLogin} alt="Imagen del login" className="logo" />
				<br></br><br></br>
				<li><NavLink to={paciente} exact className="py-2 w-100 d-inline-block px-2" activeClassname="active"><AiOutlineUser className="me-2" />Paciente</NavLink></li>
				<li className="chiloLi"><Menu id={id.id}/></li>
				<li><NavLink to={Odontograma} exact className="py-2 w-100 d-inline-block px-2" activeClassname="active"><AiOutlineReconciliation className="me-2" />Odontograma</NavLink></li>
				<li><NavLink to={evolucion} exact className="py-2 w-100 d-inline-block px-2" activeClassname="active"><AiOutlineSmile className="me-2" />Evolucion</NavLink></li>
				<li><NavLink to={imagenes}exact className="py-2 w-100 d-inline-block px-2" activeClassname="active"><AiOutlinePicture className="me-2" />Imagenes</NavLink></li>
				<li><NavLink to={receta} exact className="py-2 w-100 d-inline-block px-2" activeClassname="active"><AiOutlineFile className="me-2" />Receta</NavLink></li>
				<li><NavLink to={consentimiento} exact className="py-2 w-100 d-inline-block px-2" activeClassname="active"><AiOutlineSafety className="me-2" />Consentimiento</NavLink></li>

				<Boton text="Salir" />
			</ul>


		</div>


	)




};

export default sidebar;