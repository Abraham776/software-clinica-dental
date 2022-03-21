// Sánchez Plazola José Abraham,
// 11/03/2022
// Añadida vista de tabla

import React, { useEffect, useState } from "react";
import Sidebar from "../componentes/sidebar";
import "../home.scss";
import { Button, Table } from "reactstrap";
import PacientesDataService from "../../../services/pacientes";

const Paciente = () => {
	const [pacientes, setPacientes] = useState([]);

	const dataService = new PacientesDataService();

	useEffect(() => {
		dataService.getAll()
			.then(response => {
				setPacientes(response.data);
			})
			.catch(err => {
				console.log(err);
			});
	}, []);

	const list = pacientes.map(paciente => {
		return (
			<tr>
				<td> {paciente.NombrePaciente} </td>
				<td> {paciente.CelularPaciente} </td>
				<td><Button block onClick={function routePaciente() { window.location.href = `/PacienteHisto/${paciente.idPaciente}` }}>Ingresar</Button></td>
				<td><Button block color="danger">Eliminar</Button></td>
			</tr>
		)
	})

	return (
		<div className="home-contenido">
			<Sidebar />
			<div className="form-inputs">
				<Table bordered hover responsive striped>
					<thead>
						<tr>
							<th> Nombre </th>
							<th> Telefono </th>
							<th> </th>
							<th> </th>
						</tr>
					</thead>
					<tbody>
						{list}
					</tbody>
				</Table>
			</div>
		</div>
	)
};

export default Paciente;