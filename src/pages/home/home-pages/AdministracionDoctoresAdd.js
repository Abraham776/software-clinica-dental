// Sánchez Plazola José Abraham
// 11/03/2022
// Componente para añadir doctores (usuarios) a la base de datos de la clinica

import React from "react";
import { Button, Col, Form, FormGroup, Input, Label } from "reactstrap";
import Sidebar from "../componentes/sidebar";
import "../home.scss";

export const AdministracionDoctoresAdd = () => {
	return (
		<div className="home-contenido">
			<Sidebar />
			<div className="form-inputs">
				<Form inline>
					<FormGroup row>
						<Col sm={6}>
							<Label for="nombre">Nombre</Label>
							<Input type="text" name="nombre" id="nombreField" />
							<Label for="usuario">Usuario</Label>
							<Input type="text" name="usuario" id="usuarioField" />
						</Col>
						<Col sm={6}>
							<Label for="apellido">Apellidos</Label>
							<Input type="text" name="apellidos" id="apellidosField" />
							<Label for="password">Contraseña</Label>
							<Input type="password" name="password" id="passwordField" />
						</Col>
					</FormGroup>

					<Label for="privilegio">Privilegios</Label>
					<Input type="select" name="privilegio" id="privilegio">
						<option>Administrador</option>
						<option>Usuario basico</option>
					</Input>

					<br/>
					<Button className="me-3">Añadir</Button>
					<Button className="me-3" onClick={function back(){window.location.href = "/AdministracionDoctores"}}>Volver</Button>
				</Form>
			</div>
		</div>
	)
}

export default AdministracionDoctoresAdd;