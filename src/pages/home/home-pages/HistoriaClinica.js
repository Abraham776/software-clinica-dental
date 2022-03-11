// Sánchez Plazola José Abraham
// 11/03/2022 
// Añadidos inputs

import React from "react";
import { Button, Col, Form, FormGroup, Input, Label } from "reactstrap";
import Sidebar from "../componentes/sidebar";
import "../home.scss";

const HistoriaClinica = () => {
	return (
		<div className="home-contenido">
			<Sidebar />

			<div className="form-inputs">
				<Form inline>
					<FormGroup row>
						<Col sm={4}>
							<Label for="nombre">Nombre Completo</Label>
							<Input type="text" name="nombre" id="nombreField" />

							<Label for="estado-civil">Estado Civil</Label>
							<Input type="select" name="estado-civil" id="estado-civilField">
								<option>Soltero</option>
								<option>Casado</option>
								<option>Viudo</option>
								<option>Divorciado</option>
								<option>Concubinato</option>
							</Input>

							<Label for="ciudad">Ciudad</Label>
							<Input type="text" name="ciudad" id="ciudadField"/>

							<Label for="celular">Celular</Label>
							<Input type="tel" name="celular" id="celularField"/>

							<Label for="Procedencia">Procedencia</Label>
							<Input type="text" name="procedencia" id="procedenciaField"/>
						</Col>

						<Col sm={4}>
							<Label for="edad">Edad</Label>
							<Input type="number" name="edad" id="edadField"/>

							<Label for="lugar-nacimiento">Lugar de nacimiento</Label>
							<Input type="text" name="lugar-nacimiento" id="lugar-nacimientoField"/>	

							<Label for="direccion">Dirección</Label>
							<Input type="text" name="direccion" id="direccionField"/>

							<Label for="correo">Correo</Label>
							<Input type="email" name="correo" id="correoField"/>

							<Label for="ocupacion">Ocupacion</Label>
							<Input type="text" name="ocupacion" id="ocupacion-field"/>
						</Col>

						<Col sm={4}>
							<Label for="sexo">Sexo</Label>
							<Input type="select" name="sexo" id="sexoField">
								<option>Masculino</option>
								<option>Femenino</option>
								<option>Otro</option>
							</Input>

							<Label for="fecha-nacimiento">Fecha de nacimiento</Label>
							<Input type="date" name="fecha-nacimiento" id="fecha-nacimientoField"/>

							<Label for="codigo-postal">Codigo Postal</Label>
							<Input type="text" name="codigo-postal" id="codigo-postalField"/>
							
							<Label for="telefono-fijo">Telefono fijo</Label>
							<Input type="text" name="telefono-fijo" id="telefono-fijoField"/>

							<Label for="telefono-paciente">Telefono de un paciente</Label>
							<Input type="text" name="telefono-paciente" id="telefono-pacienteField"/>
						</Col>

						<Label for="alergias">Alergias</Label>
						<Input type="textarea" name="alergias" id="alergiasField"/>

						<Label for="imagen">Imagen</Label>
						<Input type="file" name="imagen" id="imagenField"/>
					</FormGroup>

					<Button>Ingresar</Button>
				</Form>
			</div>

		</div>
	)
};

export default HistoriaClinica;