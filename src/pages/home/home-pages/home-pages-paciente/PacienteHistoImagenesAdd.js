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
			})
			.catch(err => {
				console.log(err);
			})
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
				<Button className="me-3" onClick={save}>Añadir</Button>
				<Button className="me-3" onClick={function back() { window.location.href = `/PacienteHistoImagenes/${id}` }}>Volver</Button>
			</div>
		</div>
	)
};

export default PacienteHistoImagenesAdd;