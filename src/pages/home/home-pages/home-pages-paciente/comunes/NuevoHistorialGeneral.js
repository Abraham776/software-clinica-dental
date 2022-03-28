import React, { useEffect, useState } from "react";
import { Button, Col, Form, FormGroup, Input, Label } from "reactstrap";
import Sidebar from "../../../componentes/sidebarP";
import LogoLogin from "../../../../../assets/img/LogoLogin.jpg";
import "../../../home.scss";

import Historial1DataService from "../../../../../services/historial5";


const NuevoHistorialGeneral = () => {
	var id = window.location.href;
	id = id.slice(id.lastIndexOf("/") + 1);


	const dataService = new Historial1DataService();

	function save(){
		var form = document.getElementById("form");
		var data = {Paciente_idPaciente: id};

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
					window.location.href=`/PacienteHistoHistoriales5/${id}`;
				} else {
					window.alert("Ocurrió un error al crear el registro. Codigo " + response.status + "("+ response.statusText +"). "+"Contacte con el administrador");
				}
			})
			.catch(err => {
				console.log(err);
				window.alert("Ocurrió un error al crear el registro.");
			});
	}


	return (
		<div className="home-contenido">
			<Sidebar id={id}/>
			<div className="contenido-in-historiales">
				<Form inline name="form" id="form">
					<FormGroup row>
						<center><h1 className="titulo-g">Odontología General</h1></center>
						<Col sm={5}>
							<Label for="fecha">FECHA:</Label>
							<Input type="date" name="FechaGeneralOd"
								id="fechaGen" required />
						</Col>

						<Col sm={11}>
							<Label >Motivo de la Consulta:</Label>
							<Input type="textarea" name="MotivoConsultaGeneral" id="Gen1" required />
							<Label >Antecedentes Medicos:</Label>
							<Input type="textarea" name="AntecedentesMedicos" id="Gen3" required />
							<Label >Anomalías:</Label>
							<Input type="textarea" name="AnomaliasGeneral" id="Gen4" required />
							<Label >Dolores:</Label>
							<Input type="textarea" name="DoloresGeneral" id="Gen5" required />
							<Label >Estado de Higiene Bucal:</Label>
							<Input type="textarea" name="HigieneBucalGeneral" id="Gen6" required />
							<Label >Presencia de Sarro:</Label>
							<select class="form-control" name="SarroGeneral" id="Gen7" required>
								<option selected>-Escoga una opción-</option>
								<option>Si</option>
								<option>No</option>
							</select>
							<Label >Enfermedad Periodontal:</Label>
							<select class="form-control" name="EnfermedadesPerioGeneral" id="Gen8" required>
								<option selected>-Escoga una opción-</option>
								<option>Si</option>
								<option>No</option>
							</select>
							<Label >Diagnostico Presuntivo:</Label>
							<Input type="textarea" name="Diagnostico" id="Gen9" required />
							<Label >Plan de Tratamiento:</Label>
							<Input type="textarea" name="TratamientoGeneral" id="Gen10" required />
							<Label >Observaciones:</Label>
							<Input type="textarea" name="ObservacionesGenerales" id="Gen11" required />
							<Label >Pronóstico:</Label>
							<Input type="textarea" name="PronosticoGeneral" id="Gen12" required />
						</Col>
					</FormGroup>

					<Button onClick={save}>Guardar</Button>
					<Button onClick={function back(){ window.location.href = `/PacienteHistoHistoriales5/${id}` }}>Cancelar</Button>
				</Form>
			</div>



		</div>




	)


};



export default NuevoHistorialGeneral;