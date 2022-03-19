// Sánchez Plazola José Abraham
// 18/03/2022
// Vista para agendar citas
import React from "react";
import { Button, Col, Form, FormGroup, Input, Label } from "reactstrap";
import Sidebar from "../componentes/sidebar";
import "../home.scss";

const AgendaCita = () => {
	return (
		<div className="home-contenido">
			<Sidebar />
			<div className="form-inputs">
				<Form>
					<FormGroup row>
						<Col sm={6}>
							<Label for="anotacion">Anotaciones</Label>
							<Input type="textarea" name="anotacion" id="anotacionField" />
						</Col>
						<Col sm={6}>
							<Label for="fecha">Fecha de la cita</Label>
							<Input type="date" name="fecha" id="fechaField" />
						</Col>
						<Label for="paciente">Paciente</Label>
						<Input type="select" name="paciente" id="pacienteField">
							<option>Pedrito</option>
							<option>Juanito</option>
						</Input>
					</FormGroup>

					<Button className="me-3">Agendar</Button>
				</Form>
			</div>
		</div>
	)
};

export default AgendaCita;