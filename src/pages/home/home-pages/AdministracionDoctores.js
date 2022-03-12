// Sánchez Plazola José Abraham
// 11/03/2022
// Componente para visualizar los doctores de la clinica

import React from "react";
import { Button, Table } from "reactstrap";
import Sidebar from "../componentes/sidebar";
import "../home.scss";

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
							<th> Telefono </th>
							<th> </th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<th> <img alt="imagen" /> </th>
							<td> pedrito </td>
							<td> 6691134890 </td>
							<td><Button block color="danger">Eliminar</Button></td>
						</tr>
					</tbody>
				</Table>

				<Button onClick={function routePaciente() { window.location.href = "/AdministracionDoctoresAdd" }}>Añadir nuevo doctor</Button>
			</div>
		</div>
	)
}

export default AdministracionDoctores;