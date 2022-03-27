// Sánchez Plazola José Abraham
// 11/03/2022 
// Añadidos inputs

import React from "react";
import { Button, Col, Form, FormGroup, Input, Label } from "reactstrap";
import Sidebar from "../componentes/sidebar";
import "../home.scss";
import PacientesDataService from "../../../services/pacientes";

const HistoriaClinica = () => {
	const dataService = new PacientesDataService();

	function save(){
		var form = document.getElementById("form");
		var data = {};

		Array.from(form.elements).forEach(element => {
			if(element.type !== "button"){
				data[element.name] = element.value;
			}
		});

		//console.log(data);

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
			});
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
			<Sidebar />
			<div className="form-inputs">
				<Form inline name="form" id="form">
					<FormGroup row>
						<Col sm={4}>
							<Label for="nombre">Nombre Completo</Label>
							<Input type="text" name="NombrePaciente" id="nombreField" pattern="([a-zA-Z]+( [a-zA-Z]+)+)"/>

							<Label for="estado-civil">Estado Civil</Label>
							<Input type="select" name="EstadoCivilPaciente" id="estado-civilField">
								<option>Soltero</option>
								<option>Casado</option>
								<option>Viudo</option>
								<option>Divorciado</option>
								<option>Concubinato</option>
							</Input>

							<Label for="ciudad">Ciudad</Label>
							<Input type="text" name="CiudadPaciente" id="ciudadField"  pattern="^([a-zA-Z\u0080-\u024F]+(?:. |-| |'))*[a-zA-Z\u0080-\u024F]*$"/>

							<Label for="celular">Celular</Label>
							<Input type="tel" name="CelularPaciente" id="celularField" pattern="[0-9]{10}"/>

							<Label for="Procedencia">Procedencia</Label>
							<Input type="text" name="Procedencia" id="procedenciaField" pattern="^([a-zA-Z\u0080-\u024F]+(?:. |-| |'))*[a-zA-Z\u0080-\u024F]*$"/>
						</Col>

						<Col sm={4}>
							<Label for="edad">Edad</Label>
							<Input type="number" name="Edad" id="edadField" min={1}/>

							<Label for="lugar-nacimiento">Lugar de nacimiento</Label>
							<Input type="text" name="LugarNacimientoPaciente" id="lugar-nacimientoField" pattern="^([a-zA-Z\u0080-\u024F]+(?:. |-| |'))*[a-zA-Z\u0080-\u024F]*$"/>

							<Label for="direccion">Dirección</Label>
							<Input type="text" name="DireccionPaciente" id="direccionField" pattern="^[#.0-9a-zA-Z\u0080-\u024F\s,-]+$"/>

							<Label for="correo">Correo</Label>
							<Input type="email" name="CorreoPaciente" id="correoField" />

							<Label for="ocupacion">Ocupacion</Label>
							<Input type="text" name="OcupacionPaciente" id="ocupacion-field" pattern="^[#.0-9a-zA-Z\u0080-\u024F\s,-]+$"/>
						</Col>

						<Col sm={4}>
							<Label for="sexo">Sexo</Label>
							<Input type="select" name="Sexo" id="sexoField">
								<option>Masculino</option>
								<option>Femenino</option>
								<option>Otro</option>
							</Input>

							<Label for="fecha-nacimiento">Fecha de nacimiento</Label>
							<Input type="date" name="FechaNacimientoPaciente" id="fecha-nacimientoField" />

							<Label for="codigo-postal">Codigo Postal</Label>
							<Input type="number" name="CodigoPostalPaciente" id="codigo-postalField" min={5}/>

							<Label for="telefono-fijo">Telefono fijo</Label>
							<Input type="text" name="TelefonoFijoPaciente" id="telefono-fijoField" min={7}/>

						</Col>

						<Label for="alergias">Alergias</Label>
						<Input type="textarea" name="AlergiaMedicamentoPaciente" id="alergiasField" />

						<Label for="imagen">Imagen</Label>
						<Input type="file" name="FotoPaciente" id="imagenField" accept="image/*"/>
					</FormGroup>

					<Button onClick={validateForm}>Ingresar</Button>
				</Form>
			</div>

		</div>
	)
};

export default HistoriaClinica;