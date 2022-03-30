// Sánchez Plazola José Abraham
// 11/03/2022
// Componente para visualizar los doctores de la clinica

import React, { useEffect, useState } from "react";
import { Button, Table } from "reactstrap";
import Sidebar from "../componentes/sidebar";
import "../home.scss";
import doctorDataService from "../../../services/doctor";

const AdministracionDoctores = () => {
	const [doctores, setDoctores] = useState([]);
	const dataService = new doctorDataService();

	useEffect(() => {
		dataService.getAll()
			.then(response => {
				setDoctores(response.data);
			})
			.catch(err => {
				console.log(err);
			});
	}, []);

	function confirmAction() {
		let confirmAction = window.confirm("¿Está seguro de querer borrar este registro? Esta acción es irreversible");
		return confirmAction;
	}

	const list = doctores.map(doctor => {
		return (
			<tr>
				<td> {doctor.NombreDoctor} </td>
				<td> {doctor.Estatus} </td>
				<td><Button block color="danger" onClick={function deletePaciente() {
					let response = confirmAction();
					if (!response) {
						window.alert("Acción cancelada");
						return;
					}
					console.log(doctor.idDoctor)
					doctorDataService.delete(doctor.idDoctor)
						.then(response => {
							console.log(response.data);
							let index = doctores.map(dat => {
								return dat.idDoctor === doctor.idDoctor
							})
							index = index.indexOf(true);
							doctores.splice(index, 1)
							var newData = [];
							Object.assign(newData, doctores);
							setDoctores(newData);
							window.alert("Registro borrado exitosamente");
						})
						.catch(e => {
							console.log(e);
							window.alert("Fallo al borrar registro");
						});
				}}> Eliminar</Button></td>
			</tr >
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
							<th> Status </th>
							<th> </th>
						</tr>
					</thead>
					<tbody>
						{list}
					</tbody>
				</Table>

				<Button className="me-3" onClick={function routePaciente() { window.location.href = "/AdministracionDoctoresAdd" }}>Añadir nuevo doctor</Button>
				<Button className="me-3" onClick={function back() { window.location.href = "/Administracion" }}>Volver</Button>
			</div>
		</div>
	)
}

export default AdministracionDoctores;