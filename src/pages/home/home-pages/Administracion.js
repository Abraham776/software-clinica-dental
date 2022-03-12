import React from "react";
import { Button } from "reactstrap";
import Sidebar from "../componentes/sidebar";
import "../home.scss";

const Administracion = () => {
	return (
		<div className="home-contenido">
			<Sidebar />
			<div className="form-inputs">
				<Button block size="lg" onClick={function change(){window.location.href = "./administraciontratamientos";}}>Tratamientos</Button>
				<br/>
				<Button block size="lg" onClick={function change(){window.location.href = "./AdministracionDoctores";}}>Doctores</Button>
			</div>
		</div>
	)
};

export default Administracion;