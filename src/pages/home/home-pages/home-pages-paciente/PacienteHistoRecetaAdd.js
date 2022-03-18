// Sánchez Plazola José Abraham
// 17/03/2022
// Inputs de las recetas del paciente
import React from "react";
import { Button, Col, Form, FormGroup, Input, Label} from "reactstrap";
import Sidebar from "../../componentes/sidebarP";
import "../../home.scss";

const PacienteHistoRecetaAdd = () => {
	return (
		<div className="home-contenido">
			<Sidebar />
			<div className="form-inputs">
				<Form>
					<FormGroup>
						<Col sm={6}>
							<Label for="fecha">Fecha</Label>
							<Input type="date" name="fecha" id="fechaField" />
						</Col>
						<Label for="receta">Receta</Label>
						<Input type="textarea" name="receta" id="recetaField" />
					</FormGroup>
				</Form>
				<br />
				<Button className="me-3">Añadir</Button>
				<Button className="me-3" onClick={function back() { window.location.href = "/PacienteHistoReceta" }}>Volver</Button>
			</div>
		</div>
	)
};

export default PacienteHistoRecetaAdd;