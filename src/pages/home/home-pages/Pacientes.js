// Sánchez Plazola José Abraham,
// 11/03/2022
// Añadida vista de tabla

import React from "react";
import Sidebar from "../componentes/sidebar";
import "../home.scss";
import { Button, Table } from "reactstrap";

const Paciente = () => {
	return (
		<div className="home-contenido">
			<Sidebar />
			<div className="form-inputs">
				<Table bordered hover responsive striped>
					<thead>
						<tr>
							<th> Foto </th>
							<th> Nombre </th>
							<th> Telefono </th>
							<th> </th>
							<th> </th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<th> <img alt="imagen"/> </th>
							<td> pedrito </td>
							<td> 6691134890 </td>
							<td><Button block onClick={function routePaciente(){window.location.href = "/PacienteHisto"}}>Ingresar</Button></td>
							<td><Button block color="danger">Eliminar</Button></td>
						</tr>
					</tbody>
				</Table>
			</div>
		</div>
	)
};

export default Paciente;