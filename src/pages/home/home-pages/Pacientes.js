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

	function confirmAction() {
		let confirmAction = window.confirm("¿Está seguro de querer borrar este registro? Esta acción es irreversible");
		return confirmAction;
	}

	const list = pacientes.map(paciente => {
		return (
			<tr>
				<td> {paciente.NombrePaciente} </td>
				<td> {paciente.CelularPaciente} </td>
				<td><Button block onClick={function routePaciente() { window.location.href = `/PacienteHisto/${paciente.idPaciente}` }}>Ingresar</Button></td>
				<td><Button block color="danger" onClick={function deletePaciente() {

					let response = confirmAction();
					if(!response){
						window.alert("Acción cancelada");
						return;
					}

					dataService.delete(paciente.idPaciente)
						.then(response => {
							console.log(response.data);
							let index = pacientes.map(dat => {
								return dat.idPaciente === paciente.idPaciente
							})
							index = index.indexOf(true);
							pacientes.splice(index, 1)
							var newData = [];
							Object.assign(newData, pacientes);
							setPacientes(newData);
							window.alert("Registro borrado exitosamente");
						})
						.catch(e => {
							console.log(e);
							window.alert("Fallo al borrar registro");
						});
				}}>Eliminar</Button></td>
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