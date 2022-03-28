import React, { useEffect, useState } from "react";
import { Button, Col, Form, FormGroup, Input, Label } from "reactstrap";
import Sidebar from "../../../componentes/sidebarP";
import LogoLogin from "../../../../../assets/img/LogoLogin.jpg";
import "../../../home.scss";
import Historial1DataService from "../../../../../services/historial3";

const NuevoHistorialOdon = () => {
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
					window.location.href=`/PacienteHistoHistoriales3/${id}`;
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
			<Sidebar />
			<div className="contenido-in-historiales">
			<Form inline name="form" id="form">
					<FormGroup row>
						<center><h1>Odontopediatría</h1></center>
						<Col sm={5}>
							<Label for="fecha">Fecha:</Label>
							<Input type="date" name="FechaOdontopediatria"
								id="fechaOdon" required />
						</Col>

						<Col sm={11}>
							<Label >Motivo de Consulta:</Label>
							<Input type="textarea" name="MotivoConsultaOdontopediatria" id="Odon1" required />
							<Label >Enfermedades Actuales:</Label>
							<Input type="textarea" name="EnfermedadesActualesOdontopedi" id="Odon2" required />
							<Label >Antecedentes Familiares:</Label>
							<Input type="textarea" name="AntecedentesFamiliaresOdontopedia" id="Odon3" required />
							<Label >Atención Odontológica:</Label>
							<Input type="textarea" name="AtencionOdontologica" id="Odon4" required />
							<Label >Matrices Perinatales-Básicas:</Label>
							<select class="form-control" name="MatricesPerinatales" id="Odon6" required>
								<option selected>-Escoga una opción-</option>
								<option>I</option>
								<option>II</option>
								<option>III</option>
							</select>
							<Label >Tipo de Alimentación:</Label>
							<Input type="textarea" name="TipoAlimentacion" id="Odon7" required />
							<Label >Observaciones Higiene Bucal:</Label>
							<Input type="textarea" name="HigieneBucal" id="Odon8" required />
							<Label >Hábitos:</Label>
							<select class="form-control" name="Habitos" id="Odon9" required>
								<option selected>-Escoga una opción-</option>
								<option>Succión digital</option>
								<option>Respirador Bucal</option>
								<option>Biberón</option>
								<option>Chupon</option>
								<option>Onicofagia</option>
								<option>Queilofagia</option>
								<option>Geofagia</option>
								<option>Enuresis</option>
							</select>
						</Col>
						<Col sm={5}>
							<Label >Peso:</Label>
							<Input type="number" name="PesoOdontopedia" id="Odon11" required />
						</Col>
						<Col sm={5}>
							<Label >Altura:</Label>
							<Input type="number" name="AlturaOdontopedia" id="Odon12" required />
						</Col>
						<Col sm={11}>
							<Label >Frecuencia Respiratoria:</Label>
							<Input type="textarea" name="FrecuenciaRespiratoria" id="Odon13" required />
							<Label >Observaciones de Faringe:</Label>
							<Input type="textarea" name="ObservacionesFaringe" id="Odon14" required />
							<Label >Plan de Tratamiento:</Label>
							<Input type="textarea" name="PlanTratamientoOdontopedia" id="Odon15" required />
							<Label >Estado General:</Label>
							<Input type="textarea" name="EstadoGeneralOdontopedia" id="Odon16" required />
							<Label >Estado Bucal:</Label>
							<Input type="textarea" name="EstadoBucalOdontopedia" id="Odon17" required />
							<Label >Pronóstico:</Label>
							<Input type="textarea" name="PronosticoOdontopedia" id="Odon18" required />
						</Col>
					</FormGroup>

					<Button onClick={save}>Guardar</Button>
					<Button onClick={function back(){ window.location.href = `/PacienteHistoHistoriales3/${id}`}} >Cancelar</Button>
				</Form>
			</div>



		</div>




	)


};



export default NuevoHistorialOdon;