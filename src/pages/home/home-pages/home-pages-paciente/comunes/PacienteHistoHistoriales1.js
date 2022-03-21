import React from "react";
import { Button, Col, Form, FormGroup, Input, Label } from "reactstrap";
import Sidebar from "../../../componentes/sidebarP";
import "../../../home.scss";

const PacienteHistoHistoriales1 = () => {
	var id = window.location.href;
	id = id.slice(id.lastIndexOf("/") + 1);
	return (
		<div className="home-contenido">
			<Sidebar id={id}/>
			<div className="contenido-in-historiales">
				Historiales 1
			</div>
		</div>
	)
};




export default PacienteHistoHistoriales1;