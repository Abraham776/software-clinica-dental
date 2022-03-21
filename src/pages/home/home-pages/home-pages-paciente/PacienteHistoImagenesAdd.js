// Sánchez Plazola José Abraham
// 16/03/2022
// Vista de las imagenes del paciente
import React from "react";
import { Button, Col, Form, FormGroup, Input, Label } from "reactstrap";
import Sidebar from "../../componentes/sidebarP";
import "../../home.scss";

const PacienteHistoImagenesAdd = () => {
	var id = window.location.href;
	id = id.slice(id.lastIndexOf("/") + 1);
	return (
		<div className="home-contenido">
			<Sidebar id={id}/>
			<div className="img-paciente">
				<Form>
					<FormGroup>
						<Col sm={6}>
							<Label for="ruta">Imagen</Label>
							<Input type="file" name="ruta" id="rutaField"/>
						</Col>
					</FormGroup>
				</Form>
				<br/>
				<Button className="me-3">Añadir</Button>
				<Button className="me-3" onClick={function back() { window.location.href = `/PacienteHistoImagenes/${id}` }}>Volver</Button>
			</div>
		</div>
	)
};

export default PacienteHistoImagenesAdd;