// Sánchez Plazola José Abraham
// 11/03/2022
// Componente para añadir doctores (usuarios) a la base de datos de la clinica

import React from "react";
import { Button, Col, Form, FormGroup, Input, Label } from "reactstrap";
import Sidebar from "../componentes/sidebar";
import "../home.scss";
import doctorDataService from "../../../services/doctor";

export const AdministracionDoctoresAdd = () => {
	const dataService = new doctorDataService();

	function save(){
		var form = document.getElementById("form");
		var data = {};

		Array.from(form.elements).forEach(element => {
			if(element.type !== "button"){
				data[element.name] = element.value;
			}
		});

		// console.log(data);

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
			<Sidebar />
			<div className="form-inputs">
				<Form inline id="form">
					<FormGroup row>
						<Col sm={6}>
							<Label for="nombre">Nombre</Label>
							<Input type="text" name="NombreDoctor" id="nombreField" />
							<Label for="usuario">Usuario</Label>
							<Input type="text" name="UsuarioDoctor" id="usuarioField" />
						</Col>
						<Col sm={6}>
							<Label for="apellido">Apellidos</Label>
							<Input type="text" name="Apellidos" id="apellidosField" />
							<Label for="password">Contraseña</Label>
							<Input type="password" name="Contraseña" id="passwordField" />
						</Col>
					</FormGroup>

					<Label for="privilegio">Privilegios</Label>
					<Input type="select" name="Estatus" id="privilegio">
						<option>Administrador</option>
						<option>Usuario basico</option>
					</Input>

					<br/>
					<Button className="me-3" onClick={save}>Añadir</Button>
					<Button className="me-3" onClick={function back(){window.location.href = "/AdministracionDoctores"}}>Volver</Button>
				</Form>
			</div>
		</div>
	)
}

export default AdministracionDoctoresAdd;