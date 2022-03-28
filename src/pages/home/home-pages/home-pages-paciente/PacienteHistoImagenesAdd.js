// Sánchez Plazola José Abraham
// 16/03/2022
// Vista de las imagenes del paciente
import React from "react";
import { Button, Col, Form, FormGroup, Input, Label } from "reactstrap";
import Sidebar from "../../componentes/sidebarP";
import "../../home.scss";
import ImagenesDataService from "../../../../services/imagenes";

const PacienteHistoImagenesAdd = () => {
	var id = window.location.href;
	id = id.slice(id.lastIndexOf("/") + 1);


	const dataService = new ImagenesDataService();

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
				if(response.status === 200){
					window.alert("Registro creado exitosamente");
				} else {
					window.alert("Ocurrió un error al crear el registro. Codigo " + response.status + "("+ response.statusText +"). "+"Contacte con el administrador");
				}
			})
			.catch(err => {
				console.log(err);
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
			<div className="img-paciente">
			<center><h1 className="ima-loggg">Añadir Imagen</h1></center>
			<br></br>
				
				<Form inline name="form" id="form">
					<FormGroup row>
						<Col sm={6}>
							<Label for="ruta">Imagen</Label>
							<Input type="file" name="ImagenesDiagro" id="ImagenesDiagroField"/>
						</Col>
					</FormGroup>
				</Form>
				<br/>
				<Button className="me-3" onClick={validateForm}>Añadir</Button>
				<Button className="me-3" onClick={function back() { window.location.href = `/PacienteHistoImagenes/${id}` }}>Volver</Button>
			</div>
		</div>
	)
};

export default PacienteHistoImagenesAdd;