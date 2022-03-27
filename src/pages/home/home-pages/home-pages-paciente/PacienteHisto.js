//	Sánchez Plazola José Abraham
// 	11/03/2022
//	Añadida vistas de inputs

import React, { useEffect, useState } from "react";
import { Button, Col, Form, FormGroup, Input, Label } from "reactstrap";
import Sidebar from "../../componentes/sidebarP";
import "../../home.scss";
import PacientesDataService from "../../../../services/pacientes";

const PacienteHisto = () => {

	var id = window.location.href;
	id = id.slice(id.lastIndexOf("/") + 1);

	const [pacientes, setPacientes] = useState([]);
	const dataService = new PacientesDataService();

	useEffect(() => {
		dataService.get(id)
			.then(response => {
				setPacientes(response.data);
			})
			.catch(err => {
				console.log(err);
			});
	}, []);

	function update() {
		var form = document.getElementById("form");
		var data = {};

		Array.from(form.elements).forEach(element => {
			if (element.type !== "button") {
				data[element.name] = element.value;
			}
		});

		dataService.update(id, data)
			.then(response => {
				if(response.status === 200){
					window.alert("Registro creado exitosamente");
				} else {
					window.alert("Ocurrió un error al crear el registro. Codigo " + response.status + "("+ response.statusText +"). "+"Contacte con el administrador");
				}
				console.log(response);
			})
			.catch(err => {
				console.log(err);
				window.alert("Ocurrió un error al crear el registro.");
			})
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

		update();
	}

	return (
		<div className="home-contenido">
			<Sidebar id={id} />
			<div className="form-inputs">
			<center><h1>Datos generales</h1></center>
			<br/>
			<Form inline name="form" id="form">
					<FormGroup row>
						<Col sm={4}>
							<Label for="nombre">Nombre Completo</Label>
							<Input type="text" name="NombrePaciente" id="nombreField" pattern="([a-zA-Z]+( [a-zA-Z]+)+)" value={pacientes.NombrePaciente} disabled/>

							<Label for="estado-civil">Estado Civil</Label>
							<Input type="select" name="EstadoCivilPaciente" id="estado-civilField" value={pacientes.EstadoCivilPaciente}>
								<option>Soltero</option>
								<option>Casado</option>
								<option>Viudo</option>
								<option>Divorciado</option>
								<option>Concubinato</option>
							</Input>

							<Label for="ciudad">Ciudad</Label>
							<Input type="text" name="CiudadPaciente" id="ciudadField"  pattern="^([a-zA-Z\u0080-\u024F]+(?:. |-| |'))*[a-zA-Z\u0080-\u024F]*$" value={pacientes.CiudadPaciente} disabled/>

							<Label for="celular">Celular</Label>
							<Input type="tel" name="CelularPaciente" id="celularField" pattern="[0-9]{10}" value={pacientes.CelularPaciente}/>

							<Label for="Procedencia">Procedencia</Label>
							<Input type="text" name="Procedencia" id="procedenciaField" pattern="^([a-zA-Z\u0080-\u024F]+(?:. |-| |'))*[a-zA-Z\u0080-\u024F]*$" value={pacientes.Procedencia} disabled/>
						</Col>

						<Col sm={4}>
							<Label for="edad">Edad</Label>
							<Input type="number" name="Edad" id="edadField" min={1} value={pacientes.Edad}/>

							<Label for="lugar-nacimiento">Lugar de nacimiento</Label>
							<Input type="text" name="LugarNacimientoPaciente" id="lugar-nacimientoField" value={pacientes.LugarNacimientoPaciente} pattern="^([a-zA-Z\u0080-\u024F]+(?:. |-| |'))*[a-zA-Z\u0080-\u024F]*$" disabled/>

							<Label for="direccion">Dirección</Label>
							<Input type="text" name="DireccionPaciente" id="direccionField" value={pacientes.DireccionPaciente} pattern="^[#.0-9a-zA-Z\u0080-\u024F\s,-]+$"/>

							<Label for="correo">Correo</Label>
							<Input type="email" name="CorreoPaciente" id="correoField" value={pacientes.CorreoPaciente}/>

							<Label for="ocupacion">Ocupacion</Label>
							<Input type="text" name="OcupacionPaciente" id="ocupacion-field" value={pacientes.OcupacionPaciente} pattern="^[#.0-9a-zA-Z\u0080-\u024F\s,-]+$"/>
						</Col>

						<Col sm={4}>
							<Label for="sexo">Sexo</Label>
							<Input type="select" name="Sexo" id="sexoField" disabled value={pacientes.Sexo}>
								<option>Masculino</option>
								<option>Femenino</option>
								<option>Otro</option>
							</Input>

							<Label for="fecha-nacimiento">Fecha de nacimiento</Label>
							<Input type="date" name="FechaNacimientoPaciente" id="fecha-nacimientoField" value={pacientes.FechaNacimientoPaciente} disabled/>

							<Label for="codigo-postal">Codigo Postal</Label>
							<Input type="number" name="CodigoPostalPaciente" id="codigo-postalField" value={pacientes.CodigoPostalPaciente} min={5}/>

							<Label for="telefono-fijo">Telefono fijo</Label>
							<Input type="text" name="TelefonoFijoPaciente" id="telefono-fijoField" value={pacientes.TelefonoFijoPaciente} min={7}/>

						</Col>

						<Label for="alergias">Alergias</Label>
						<Input type="textarea" name="AlergiaMedicamentoPaciente" id="alergiasField" value={pacientes.AlergiaMedicamentoPaciente} />

						<Label for="imagen">Imagen</Label>
						<Input type="file" name="FotoPaciente" id="imagenField" accept="image/*"/>
					</FormGroup>

					<Button onClick={validateForm}>Ingresar</Button>
				</Form>
			</div>
		</div>
	)
};

export default PacienteHisto;