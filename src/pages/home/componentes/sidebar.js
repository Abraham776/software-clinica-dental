import React from "react";
import { NavLink } from "react-router-dom";
import "./sidebar.scss";
import LogoLogin from "../../../assets/img/LogoLogin.jpg";
import Boton from "./BotonH";
import { AiOutlineUsergroupAdd, AiOutlineUser, AiOutlineHome, AiOutlineContacts, AiOutlineRise } from 'react-icons/ai';



const sidebar = () => {



	return (

		<div className="sidebar-contenido">


			<ul className="lista">

				<br></br>
				<img src={LogoLogin} alt="Imagen del login" className="logo" />
				<br></br><br></br>
				<li><NavLink to="/home" exact className="py-2 w-100 d-inline-block px-2" activeClassname="active"><AiOutlineHome className="me-2" />Inicio</NavLink></li>
				<li><NavLink to="/historiaClinica" exact className="py-2 w-100 d-inline-block px-2" activeClassname="active"><AiOutlineUsergroupAdd className="me-2" />Agregar Paciente</NavLink></li>
				<li><NavLink to="/pacientes" exact className="py-2 w-100 d-inline-block px-2" activeClassname="active"><AiOutlineUser className="me-2" />Pacientes</NavLink></li>
				<li><NavLink to="/agendarCita" exact className="py-2 w-100 d-inline-block px-2" activeClassname="active"><AiOutlineContacts className="me-2" />Agendar Cita</NavLink></li>
				<li><NavLink to="/administracion" exact className="py-2 w-100 d-inline-block px-2" activeClassname="active"><AiOutlineRise className="me-2" />Administracion</NavLink></li>

				<Boton text="Salir" />
			</ul>


		</div>


	)




};

export default sidebar;