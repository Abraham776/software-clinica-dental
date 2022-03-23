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
				console.log(response);
			})
			.catch(err => {
				console.log(err);
			})
	}

	return (
		<div className="home-contenido">
			<Sidebar id={id} />
			<div className="form-inputs">
				<Form inline name="form" id="form">
					<FormGroup row>
						<Col sm={4}>
							<Label for="nombre">Nombre Completo</Label>
							<Input type="text" name="NombrePaciente" id="nombreField" disabled value={pacientes.NombrePaciente}/>

							<Label for="estado-civil">Estado Civil</Label>
							<Input type="select" name="EstadoCivilPaciente" id="estado-civilField" value={pacientes.EstadoCivilPaciente} onChange={(function onChange(e){
								const EstadoCivilPaciente = e.target.value;
								setPacientes(function(prevState){
									return {
										...prevState.pacientes,
										EstadoCivilPaciente: EstadoCivilPaciente,
									}
								})
							})}>
								<option>Soltero</option>
								<option>Casado</option>
								<option>Viudo</option>
								<option>Divorciado</option>
								<option>Concubinato</option>
							</Input>

							<Label for="ciudad">Ciudad</Label>
							<Input type="text" name="CiudadPaciente" id="ciudadField" disabled value={pacientes.CiudadPaciente}/>

							<Label for="celular">Celular</Label>
							<Input type="tel" name="CelularPaciente" id="celularField" value={pacientes.CelularPaciente} onChange={(function onChange(e){
								const CelularPaciente = e.target.value;
								setPacientes(function(prevState){
									return {
										...prevState.pacientes,
										CelularPaciente: CelularPaciente,
									}
								})
							})} />

							<Label for="Procedencia">Procedencia</Label>
							<Input type="text" name="Procedencia" id="procedenciaField" disabled value={pacientes.Procedencia}/>
						</Col>

						<Col sm={4}>
							<Label for="edad">Edad</Label>
							<Input type="number" name="Edad" id="edadField" value={pacientes.Edad} onChange={(function onChange(e){
								const Edad = e.target.value;
								setPacientes(function(prevState){
									return {
										...prevState.pacientes,
										Edad: Edad,
									}
								})
							})}/>

							<Label for="lugar-nacimiento">Lugar de nacimiento</Label>
							<Input type="text" name="LugarNacimientoPaciente" id="lugar-nacimientoField" disabled value={pacientes.LugarNacimientoPaciente}/>

							<Label for="direccion">Dirección</Label>
							<Input type="text" name="DireccionPaciente" id="direccionField" value={pacientes.DireccionPaciente} onChange={(function onChange(e){
								const DireccionPaciente = e.target.value;
								setPacientes(function(prevState){
									return {
										...prevState.pacientes,
										DireccionPaciente: DireccionPaciente,
									}
								})
							})}/>

							<Label for="correo">Correo</Label>
							<Input type="email" name="CorreoPaciente" id="correoField" value={pacientes.CorreoPaciente} onChange={(function onChange(e){
								const CorreoPaciente = e.target.value;
								setPacientes(function(prevState){
									return {
										...prevState.pacientes,
										CorreoPaciente: CorreoPaciente,
									}
								})
							})}/>

							<Label for="ocupacion">Ocupacion</Label>
							<Input type="text" name="OcupacionPaciente" id="ocupacion-field" value={pacientes.OcupacionPaciente} onChange={(function onChange(e){
								const OcupacionPaciente = e.target.value;
								setPacientes(function(prevState){
									return {
										...prevState.pacientes,
										OcupacionPaciente: OcupacionPaciente,
									}
								})
							})}/>
						</Col>

						<Col sm={4}>
							<Label for="sexo">Sexo</Label>
							<Input type="select" name="Sexo" id="sexoField" disabled value={pacientes.Sexo}>
								<option>Masculino</option>
								<option>Femenino</option>
								<option>Otro</option>
							</Input>

							<Label for="fecha-nacimiento">Fecha de nacimiento</Label>
							<Input type="date" name="FechaNacimientoPaciente" id="fecha-nacimientoField" disabled value={pacientes.FechaNacimientoPaciente}/>

							<Label for="codigo-postal">Codigo Postal</Label>
							<Input type="number" name="CodigoPostalPaciente" id="codigo-postalField" value={pacientes.CodigoPostalPaciente} onChange={(function onChange(e){
								const CodigoPostalPaciente = e.target.value;
								setPacientes(function(prevState){
									return {
										...prevState.pacientes,
										CodigoPostalPaciente: CodigoPostalPaciente,
									}
								})
							})}/>

							<Label for="telefono-fijo">Telefono fijo</Label>
							<Input type="text" name="TelefonoFijoPaciente" id="telefono-fijoField" value={pacientes.TelefonoFijoPaciente} onChange={(function onChange(e){
								const TelefonoFijoPaciente = e.target.value;
								setPacientes(function(prevState){
									return {
										...prevState.pacientes,
										TelefonoFijoPaciente: TelefonoFijoPaciente,
									}
								})
							})}/>

						</Col>

						<Label for="alergias">Alergias</Label>
						<Input type="textarea" name="AlergiaMedicamentoPaciente" id="alergiasField" value={pacientes.AlergiaMedicamentoPaciente} onChange={(function onChange(e){
								const AlergiaMedicamentoPaciente = e.target.value;
								setPacientes(function(prevState){
									return {
										...prevState.pacientes,
										AlergiaMedicamentoPaciente: AlergiaMedicamentoPaciente,
									}
								})
							})}/>

						{/* <Input type="file" name="FotoPaciente" id="imagenField" value={pacientes.FotoPaciente}/> */}
					</FormGroup>

					<Button onClick={update}>Actualizar información</Button>
				</Form>
			</div>
		</div>
	)
};

export default PacienteHisto;