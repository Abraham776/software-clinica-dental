// Sánchez Plazola José Abraham
// 17/03/2022
// Vista de las recetas del paciente
import React from "react";
import { Button, Table } from "reactstrap";
import Sidebar from "../../componentes/sidebarP";
import "../../home.scss";

const PacienteHistoReceta = () => {
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
							<th> Receta </th>
							<th> </th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td> 05/02/2022 </td>
							<td> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vitae augue at mi mollis efficitur quis vel turpis. Etiam interdum augue eget mattis maximus. Quisque euismod lectus mauris, ut facilisis augue accumsan eu. </td>
							<td><Button block color="danger">Eliminar</Button></td>
						</tr>
					</tbody>
				</Table>
				<Button onClick={function routePaciente() { window.location.href = `/PacienteHistoRecetaAdd/${id}` }}>Añadir nueva receta</Button>
			</div>
		</div>
	)
};

export default PacienteHistoReceta;