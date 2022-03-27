// Sánchez Plazola José Abraham
// 16/03/2022
// Vista e inputs del historial de evolución del paciente

import React, { useEffect, useState } from "react";
import { Button, Table } from "reactstrap";
import Sidebar from "../../componentes/sidebarP";
import "../../home.scss";
import EvolucionDataService from "../../../../services/evolucion";


const PacienteHistoEvolucion = () => {
	var id = window.location.href;
	id = id.slice(id.lastIndexOf("/") + 1);
	const [evolucion, setEvolucion] = useState([]);

	const dataService = new EvolucionDataService();

	useEffect(() => {
		dataService.getAll(id)
			.then(response => {
				setEvolucion(response.data);
			})
			.catch(err => {
				console.log(err);
			});
	}, []);

	function confirmAction() {
		let confirmAction = window.confirm("¿Está seguro de querer borrar este registro? Esta acción es irreversible");
		return confirmAction;
	}
	const list = evolucion.map(registroevolucion => {
		return (
			<tr>
				<td> {registroevolucion.idRegistroEvolucion} </td>
				<td> {registroevolucion.ObservacionesRegistro} </td>
				<td><Button block onClick={function routePaciente() { window.location.href = `/PacienteHistoEvolucionVista/${registroevolucion.idRegistroEvolucion}` }}>Ingresar</Button></td>
				<td><Button block color="danger" onClick={function deletePaciente() {

					let response = confirmAction();
					if(!response){
						window.alert("Acción cancelada");
						return;
					}

					dataService.delete(registroevolucion.idRegistroEvolucion)
						.then(response => {
							console.log(response.data);

							
							let index = evolucion.map(dat => {
								return dat.idRegistroEvolucion === registroevolucion.idRegistroEvolucion
							})
							index = index.indexOf(true);
							evolucion.splice(index, 1)
							var newData = [];
							Object.assign(newData, evolucion);
							
							setEvolucion(newData);
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
			<Sidebar id={id}/>
			
			<div className="form-inputs">
				<center><h1>Evolucion del paciente</h1></center>
			<br/>
				<Table bordered hover responsive striped>
					<thead>
						<tr>
							<th> Fecha </th>
							<th> Observacion </th>
							<th> </th>
							<th> </th>
						</tr>
					</thead>
					<tbody>
						{list}
					</tbody>
				</Table>
				<Button onClick={function routePaciente() { window.location.href = ` /PacienteHistoEvolucionAdd/${id}` }}>Añadir nuevo registro</Button>
			</div>
		</div>
	)
};

export default PacienteHistoEvolucion;