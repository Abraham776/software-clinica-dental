// Sánchez Plazola José Abraham
// 16/03/2022
// Vista e inputs del historial de evolución del paciente

import React from "react";
import { Button, Col, Form, FormGroup, Input, Label } from "reactstrap";
import Sidebar from "../../componentes/sidebarP";
import "../../home.scss";
import EvolucionDataService from "../../../../services/evolucion";
const PacienteHistoEvolucionAdd = () => {
	var id = window.location.href;
	id = id.slice(id.lastIndexOf("/") + 1);

	const dataService = new EvolucionDataService();

	function save(){
		var form = document.getElementById("form");
		var data = { Paciente_idPaciente: id};
		// console.log(data);
		Array.from(form.elements).forEach(element => {
			if(element.type !== "button"){
				data[element.name] = element.value;
			}
		});

		console.log(data);

		dataService.create(data)
			.then(response => {
				console.log(response);
			})
			.catch(err => {
				console.log(err);
			})
	}
	return (
		<div className="home-contenido">
			<Sidebar id={id}/>
			<div className="form-inputs">
				<Form inline name="form" id="form">
					<FormGroup row>
						<Col sm={6}>
							<Label for="fecha">Fecha</Label>
							<Input type="date" name="FechaRegistro" id="fechaField"/>
							<Label for="tratamiento">Tratamiento</Label>
							<Input type="text" name="Tratamiento" id="tratamientoField"/>
							<Label for="observaciones">Observaciones</Label>
							<Input type="textarea" name="ObservacionesRegistro" id="observacionesField"/>
						</Col>
					</FormGroup>

					<br />
					<Button className="me-3" onClick={save}>Añadir</Button>
					<Button className="me-3" onClick={function back() { window.location.href = `/PacienteHistoEvolucion/${id}` }}>Volver</Button>
				</Form>
			</div>
		</div>
	)
};

export default PacienteHistoEvolucionAdd;