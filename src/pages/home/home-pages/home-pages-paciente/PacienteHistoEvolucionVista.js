// Sánchez Plazola José Abraham
// 16/03/2022
// Vista e inputs del historial de evolución del paciente

import React from "react";
import { Button, Col, Form, FormGroup, Input, Label } from "reactstrap";
import Sidebar from "../../componentes/sidebarP";
import "../../home.scss";

const PacienteHistoEvolucionVista = () => {
	return (
		<div className="home-contenido">
			<Sidebar />
			<div className="form-inputs">
				<Form inline>
					<FormGroup row>
						<Col sm={6}>
							<Label for="fecha">Fecha</Label>
							<Input type="date" name="fecha" id="fechaField" disabled/>
							<Label for="tratamiento">Tratamiento</Label>
							<Input type="text" name="tratamiento" id="tratamientoField" disabled/>
							<Label for="observaciones">Observaciones</Label>
							<Input type="textarea" name="observaciones" id="observacionesField" disabled/>
						</Col>
					</FormGroup>

					<br />
					<Button className="me-3" onClick={function back() { window.location.href = "/PacienteHistoEvolucion" }}>Volver</Button>
				</Form>
			</div>
		</div>
	)
};

export default PacienteHistoEvolucionVista;