// Sánchez Plazola José Abraham
// 18/03/2022
// Vista para agendar citas
import React, { useEffect, useState } from "react";
import { Button, Col, Form, FormGroup, Input, Label } from "reactstrap";
import Sidebar from "../componentes/sidebar";
import "../home.scss";
import citasDataService from "../../../services/citas";
import pacientesDataService from "../../../services/pacientes";

const AgendaCita = () => {
	const [pacientes, setPacientes] = useState([]);
	const citaDataService = new citasDataService();
	const pacienteDataService = new pacientesDataService();

	useEffect(() => {
		pacienteDataService.getAll()
			.then(response => {
				setPacientes(response.data);
			})
			.catch(err => {
				console.log(err);
			})
	}, []);

	function save(){
		var form = document.getElementById("form");
		var data = {};

		Array.from(form.elements).forEach(element => {
			if(element.type !== "button"){
				data[element.name] = element.value;
			}
		});

		// console.log(data);

		citaDataService.create(data)
			.then(response => {
				console.log(response);
			})
			.catch(err => {
				console.log(err);
			})
	}

	const list = pacientes.map(paciente => {
		return (
			<option>{paciente.NombrePaciente}</option>
		)
	});

	return (
		<div className="home-contenido">
			<Sidebar />
			<div className="form-inputs">
				<Form id="form">
					<FormGroup row>
						<Col sm={6}>
							<Label for="anotacion">Anotaciones</Label>
							<Input type="textarea" name="AnotaciónCitas" id="anotacionField" />
						</Col>
						<Col sm={6}>
							<Label for="fecha">Fecha de la cita</Label>
							<Input type="date" name="FechaCitas" id="fechaField" />
						</Col>
						<Label for="paciente">Paciente</Label>
						<Input type="select" name="NombreDelPacienteCitas" id="pacienteField" onChange={(function onChange(e){
								const NombreDelPacienteCitas = e.target.value;
								setPacientes(function(prevState){
									return {
										...prevState.pacientes,
										NombrePaciente: NombreDelPacienteCitas,
									}
								})
							})}>
							{list}
						</Input>
					</FormGroup>

					<Button className="me-3" onClick={save}>Agendar</Button>
				</Form>
			</div>
		</div>
	)
};

export default AgendaCita;