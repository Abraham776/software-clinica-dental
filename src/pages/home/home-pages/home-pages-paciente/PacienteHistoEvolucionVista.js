// Sánchez Plazola José Abraham
// 16/03/2022
// Vista e inputs del historial de evolución del paciente

import React, { useEffect, useState } from "react";
import { Button, Col, Form, FormGroup, Input, Label } from "reactstrap";
import Sidebar from "../../componentes/sidebarP";
import "../../home.scss";
import EvolucionDataService from "../../../../services/evolucion";

const PacienteHistoEvolucionVista = () => {
	var id = window.location.href;
	id = id.slice(id.lastIndexOf("/") + 1);

	const [evolucion, setEvolucion] = useState([]);
	const dataService = new EvolucionDataService();

	useEffect(() => {
		dataService.get(id)
			.then(response => {
				setEvolucion(response.data);
			})
			.catch(err => {
				console.log(err);
			});
	}, []);

	function update() {
		var form = document.getElementById("form");
		var data = {Paciente_idPaciente: evolucion.Paciente_idPaciente};

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
			<Sidebar id={id}/>
			<div className="form-inputs">
			<center><h1 clasName="titulo-odo">Actualizar evolucion</h1></center>
			<br/>
				<Form inline name="form" id="form">
					<FormGroup row>
						<Col sm={6}>
							
							<Label for="fecha">Fecha</Label>
							<Input type="date" name="FechaRegistro" id="fechaField" value={evolucion.FechaRegistro} onChange={(function onChange(e){
								const FechaRegistro = e.target.value;
								setEvolucion(function(prevState){
									return {
										...prevState.evolucion,
										FechaRegistro: FechaRegistro,
										Paciente_idPaciente: evolucion.Paciente_idPaciente
									}
								})
							})}/>
							<Label for="tratamiento">Tratamiento</Label>
							<Input type="text" name="Tratamiento" id="tratamientoField" value={evolucion.Tratamiento} onChange={(function onChange(e){
								const Tratamiento = e.target.value;
								setEvolucion(function(prevState){
									return {
										...prevState.evolucion,
										Tratamiento: Tratamiento,
										Paciente_idPaciente: evolucion.Paciente_idPaciente
									}
								})
							})}/>
							<Label for="observaciones">Observaciones</Label>
							<Input type="textarea" name="ObservacionesRegistro" id="observacionesField" value={evolucion.ObservacionesRegistro} onChange={(function onChange(e){
								const ObservacionesRegistro = e.target.value;
								setEvolucion(function(prevState){
									return {
										...prevState.evolucion,
										ObservacionesRegistro: ObservacionesRegistro,
										Paciente_idPaciente: evolucion.Paciente_idPaciente
									}
								})
							})}/>
						</Col>
					</FormGroup>

					<br />
					<Button className="me-3" onClick={function back() { window.location.href = `/PacienteHistoEvolucion/${evolucion.Paciente_idPaciente}` }}>Volver</Button>
					<Button className="me-3" onClick={update}>Actualizar</Button>
				</Form>
			</div>
		</div>
	)
};

export default PacienteHistoEvolucionVista;