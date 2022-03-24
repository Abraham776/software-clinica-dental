// Sánchez Plazola José Abraham
// 11/03/2022
// Componente para visualizar tratamientos de la base de datos de la clinica

import React, { useEffect, useState } from "react";
import { Button, Table } from "reactstrap";
import Sidebar from "../componentes/sidebar";
import "../home.scss";
import tratamientoDataService from "../../../services/tratamiento";

const AdministracionTratamientos = () => {
	const [tratamientos, setTratamientos] = useState([]);
	const dataService = new tratamientoDataService();

	useEffect(() => {
		dataService.getAll()
			.then(response => {
				setTratamientos(response.data);
			})
			.catch(err => {
				console.log(err);
			});
	}, []);

	function confirmAction() {
		let confirmAction = window.confirm("¿Está seguro de querer borrar este registro? Esta acción es irreversible");
		return confirmAction;
	}

	const list = tratamientos.map(tratamiento => {
		return (
			<tr>
				<td> {tratamiento.NombreTratamiento} </td>
				<td> {tratamiento.PrecioTratamiento} </td>
				<td> <Button block onClick={function (){window.location.href = `/AdministracionTratamientosVista/${tratamiento.idTratamientos}`}}>Editar</Button></td>
				<td><Button block color="danger" onClick={function deleteTratamiento() {
					let response = confirmAction();
					if (!response) {
						window.alert("Acción cancelada");
						return;
					}

					dataService.delete(tratamiento.idTratamientos)
						.then(response => {
							console.log(response.data);
							const index = tratamientos.map(dat => {
								return dat.idTratamientos === tratamiento.idtratamientos
							})
							tratamientos.splice(index, 1)
							var newData = [];
							Object.assign(newData, tratamientos);
							setTratamientos(newData);
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
							<th> Precio </th>
							<th> </th>
							<th> </th>
						</tr>
					</thead>
					<tbody>
						{list}
					</tbody>
				</Table>
				<Button className="me-3" onClick={function routePaciente() { window.location.href = "/AdministracionTratamientosAdd" }}>Añadir nuevo tratamiento</Button>
				<Button className="me-3" onClick={function back(){window.location.href = "/Administracion"}}>Volver</Button>
			</div>
		</div>
	)
}

export default AdministracionTratamientos;