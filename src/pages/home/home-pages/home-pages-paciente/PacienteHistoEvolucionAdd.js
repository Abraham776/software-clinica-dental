// Sánchez Plazola José Abraham
// 16/03/2022
// Vista e inputs del historial de evolución del paciente

import React from "react";
import { Button, Col, Form, FormGroup, Input, Label } from "reactstrap";
import Sidebar from "../../componentes/sidebarP";
import "../../home.scss";

const PacienteHistoEvolucionAdd = () => {
	return (
		<div className="home-contenido">
			<Sidebar />
			<div className="form-inputs">
				<Form inline>
					<FormGroup row>
						<Col sm={6}>
							<Label for="fecha">Fecha</Label>
							<Input type="date" name="fecha" id="fechaField"/>
							<Label for="tratamiento">Tratamiento</Label>
							<Input type="text" name="tratamiento" id="tratamientoField"/>
							<Label for="observaciones">Observaciones</Label>
							<Input type="textarea" name="observaciones" id="observacionesField"/>
						</Col>
					</FormGroup>

					<br />
					<Button className="me-3">Añadir</Button>
					<Button className="me-3" onClick={function back() { window.location.href = "/PacienteHistoEvolucion" }}>Volver</Button>
				</Form>
			</div>
		</div>
	)
};

export default PacienteHistoEvolucionAdd;