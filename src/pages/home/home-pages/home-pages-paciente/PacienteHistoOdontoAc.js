import React from "react";
import Sidebar from "../../componentes/sidebarP";
import "../../home.scss";

const PacienteHistoOdontoAc = () => {
	var id = window.location.href;
	id = id.slice(id.lastIndexOf("/") + 1);
	return (
		<div className="home-contenido">
			<Sidebar id={id}/>
			<div className="contenido-in">
				odontograma Actual
			</div>
		</div>
	)
};

export default PacienteHistoOdontoAc;