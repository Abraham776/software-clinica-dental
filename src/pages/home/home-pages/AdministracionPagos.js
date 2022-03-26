import React, { useEffect, useState } from "react";
import { Button, Table } from "reactstrap";
import Sidebar from "../componentes/sidebar";
import "../home.scss";
import doctorDataService from "../../../services/doctor";

const AdministracionDoctores = () => {
	
	return (
		<div className="home-contenido">
			<Sidebar />
			<div className="form-inputs">
				<Table bordered hover responsive striped>
					<thead>
						<tr>
							<th> Foto </th>
							<th> Nombre </th>
							<th> </th>
						</tr>
					</thead>
					<tbody>
						
					</tbody>
				</Table>

				<Button className="me-3" onClick={function routePaciente() { window.location.href = "/AdministracionDoctoresAdd" }}>Añadir nuevo doctor</Button>
				<Button className="me-3" onClick={function back() { window.location.href = "/Administracion" }}>Volver</Button>
			</div>
		</div>
	)
}

export default AdministracionDoctores;