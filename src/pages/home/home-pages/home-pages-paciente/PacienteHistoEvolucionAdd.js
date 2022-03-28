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
				if(response.status === 200){
					window.alert("Registro creado exitosamente");
				} else {
					window.alert("Ocurrió un error al crear el registro. Codigo " + response.status + "("+ response.statusText +"). "+"Contacte con el administrador");
				}
			})
			.catch(err => {
				window.alert("Ocurrió un error al crear el registro.");
			})
	}

	function validateForm(){
		var form = document.getElementById("form");
		var string = "\n";
		var filled = true;

		Array.from(form.elements).forEach(element => {
			if(element.type !== "button"){
				if(element.value == "" && element.name !== "FotoPaciente"){
					string += "-" + element.name + `\n`;
					filled = false;
				}
			}
		});

		if(!filled){
			window.alert("Por favor, rellene los siguientes campos faltantes: " + string);
			return;
		}

		save();
	}


	return (
		<div className="home-contenido">
			<Sidebar id={id}/>
			<div className="form-inputs">
			<center><h1 clasName="titulo-odo">Agregar Evolucion</h1></center>
			<br/>
				<Form inline name="form" id="form">
					<FormGroup row>
						<Col sm={6}>
							<Label for="fecha">Fecha</Label>
							<Input type="date" name="FechaRegistro" id="fechaField"/>
							<Label for="tratamiento">Tratamiento</Label>
							<Input type="text" name="Tratamiento" id="tratamientoField" minLength={5}/>
							<Label for="observaciones">Observaciones</Label>
							<Input type="textarea" name="ObservacionesRegistro" id="observacionesField" minLength={5}/>
						</Col>
					</FormGroup>

					<br />
					<Button className="me-3" onClick={validateForm}>Añadir</Button>
					<Button className="me-3" onClick={function back() { window.location.href = `/PacienteHistoEvolucion/${id}` }}>Volver</Button>
				</Form>
			</div>
		</div>
	)
};

export default PacienteHistoEvolucionAdd;