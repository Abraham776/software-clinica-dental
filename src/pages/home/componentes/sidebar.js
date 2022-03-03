import React from "react";
import { NavLink} from "react-router-dom";
import "./sidebar.scss";
import LogoLogin from "../../../assets/img/LogoLogin.jpg";
import Boton from "./BotonH";
import  {FcHome, FcSurvey,FcBusinesswoman,FcCalendar,FcTodoList,FcButtingIn}  from 'react-icons/fc';



const sidebar = () => {

    function salirh(){
        window.location.href="/";
    };

    return(
        
        <div className="sidebar-contenido">

            
         <ul className="lista">

                <br></br>
            <img src={LogoLogin} alt="Imagen del login" className="logo"/>
                <br></br><br></br>
            <li><NavLink   to="/home"   exact className="text-dark rounded py-2 w-100 d-inline-block px-2"   activeClassname="active"><FcHome className="me-2"/>Inicio</NavLink></li>
            <li><NavLink   to="/historiaClinica"  exact className="text-dark rounded py-2 w-100 d-inline-block px-2"  activeClassname="active"><FcSurvey className="me-2"/>Crear Historial</NavLink></li>
            <li><NavLink   to="/pacientes"  exact className="text-dark rounded py-2 w-100 d-inline-block px-2"   activeClassname="active"><FcBusinesswoman className="me-2"/>Pacientes</NavLink></li>
            <li><NavLink   to="/agendarCita"  exact className="text-dark rounded py-2 w-100 d-inline-block px-2"    activeClassname="active"><FcCalendar className="me-2"/>Agendar Cita</NavLink></li>
            <li><NavLink   to="/administracion"  exact className="text-dark rounded py-2 w-100 d-inline-block px-2"   activeClassname="active"><FcTodoList className="me-2"/>Administracion</NavLink></li>

            <Boton text="Salir"/>
         </ul>
         

        </div>


    )




};

export default sidebar;