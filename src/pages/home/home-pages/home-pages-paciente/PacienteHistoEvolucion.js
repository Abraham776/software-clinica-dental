// Sánchez Plazola José Abraham
// 16/03/2022
// Vista e inputs del historial de evolución del paciente

import React from "react";
import { Button, Table } from "reactstrap";
import Sidebar from "../../componentes/sidebarP";
import "../../home.scss";

const PacienteHistoEvolucion = () => {
	var id = window.location.href;
	id = id.slice(id.lastIndexOf("/") + 1);
	return (
		<div className="home-contenido">
			<Sidebar id={id}/>
			<div className="form-inputs">
				<Table bordered hover responsive striped>
					<thead>
						<tr>
							<th> Fecha </th>
							<th> Tratamiento </th>
							<th> </th>
							<th> </th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td> 05/02/2022 </td>
							<td> Extracción </td>
							<td><Button block onClick={function routePaciente() { window.location.href = "/PacienteHistoEvolucionVista" }}>Editar</Button></td>
							<td><Button block color="danger">Eliminar</Button></td>
						</tr>
					</tbody>
				</Table>
				<Button onClick={function routePaciente() { window.location.href = "/PacienteHistoEvolucionAdd" }}>Añadir nuevo registro</Button>
			</div>
		</div>
	)
};

export default PacienteHistoEvolucion;