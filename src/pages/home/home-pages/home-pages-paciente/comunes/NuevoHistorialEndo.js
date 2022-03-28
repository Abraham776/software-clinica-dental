import React, { useEffect, useState } from "react";
import { Button, Col, Form, FormGroup, Input, Label } from "reactstrap";
import Sidebar from "../../../componentes/sidebarP";
import LogoLogin from "../../../../../assets/img/LogoLogin.jpg";
import "../../../home.scss";
import Historial1DataService from "../../../../../services/historial4";

const NuevoHistorialEndo = () => {
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
					window.location.href=`/PacienteHistoHistoriales4/${id}`;
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
						<center><h1>Endodoncia</h1></center>
						<Col sm={5}>
							<Label for="fecha">Fecha:</Label>
							<Input type="date" name="FechaEdo"
								id="fechaOrt" required />
						</Col>

						<Col sm={11}>
							<Label >Motivo de la consulta:</Label>
							<Input type="textarea" name="MotivoEdo" id="Endo1" required />
							<Label >Gingivitis:</Label>
							<select class="form-control" name="Gingivitis" id="Endo4" required>
								<option selected>-Escoga una opción-</option>
								<option>Si</option>
								<option>No</option>
							</select>
							<Label >Dolor Presente:</Label>
							<select class="form-control" name="DolorEdo" id="Endo5" required>
								<option selected>-Escoga una opción-</option>
								<option>Si</option>
								<option>No</option>
							</select>
							<Label >Inflamación Presente:</Label>
							<select class="form-control" name="InflamacionEdo" id="Endo6" required>
								<option selected>-Escoga una opción-</option>
								<option>Si</option>
								<option>No</option>
							</select>
							<Label >Dolor a la Percusión:</Label>
							<select class="form-control" name="DolorPercusionEdo" id="Endo7" required>
								<option selected>-Escoga una opción-</option>
								<option>Horizontal</option>
								<option>Vertical</option>
							</select>
							<Label >Dolor a la Palpación:</Label>
							<select class="form-control" name="DolorPalpacion" id="Endo8" required>
								<option selected>-Escoga una opción-</option>
								<option>Vestibular</option>
								<option>Lingual/Palatino</option>
							</select>
							<Label >Bolsas:</Label>
							<select class="form-control" name="Bolsas" id="Endo9" required>
								<option selected>-Escoga una opción-</option>
								<option>Si</option>
								<option>No</option>
							</select>
							<Label>Diagnóstico Pulpar de Presunción:</Label>
							<select class="form-control" name="DiagnosticoPulparDePresuncion" id="Endo10" required>
								<option selected>-Escoga una opción-</option>
								<option>Pulpitis Reversible</option>
								<option>Pulpitis Irreversible</option>
								<option>Pólipo Pulpar</option>
								<option>Asintomática</option>
								<option>Sintomática</option>
								<option>Previamente Tratado</option>
								<option>Pulpa Necrótica</option>
							</select>
							<Label >Diagnóstico Periapical:</Label>
							<select class="form-control" name="DiagnosticoPeriapical" id="Endo11" required>
								<option selected>-Escoga una opción-</option>
								<option>Sin datos patológicos</option>
								<option>Periodontitis Apical Aguda(Sintomática)</option>
								<option>Periodontitis Apical Crónica(Asintomática)</option>
								<option>Absceso Apical Agudo(Sin Fistula)</option>
								<option>Absceso Apical Cónico(Con Fistula)</option>
								<option>Absceso Fénix</option>
								<option>Celulitis Facial Odontógena</option>
								<option>Quiste/Granuloma</option>
								<option>Osteítis Condensante</option>
							</select>
							<Label >Diagnóstico Definitivo:</Label>
							<select class="form-control" name="DiagnosticoDefinitivo" id="Endo12" required>
								<option selected>-Escoga una opción-</option>
								<option>Pulpitis Reversible</option>
								<option>Pulpa Necrótica</option>
							</select>
							<Label >Tratamiento Indicado:</Label>
							<Input type="textarea" name="TratamientoEdo" id="Endo13" required />
							<Label >Restauración Post-Endodóntica Indicada:</Label>
							<select class="form-control" name="RestauracionPost" id="Endo14" required>
								<option selected>-Escoga una opción-</option>
								<option>Poste</option>
								<option>Amalgama/Resina</option>
								<option>Corona</option>
							</select>
							<Label >Pronóstico:</Label>
							<Input type="textarea" name="Pronostico" id="Endo15" required />
						</Col>
					</FormGroup>

					<Button onClick={save}>Guardar</Button>
					<Button onClick={function back() { window.location.href = `/PacienteHistoHistoriales4/${id}`}}>Cancelar</Button>
				</Form>
			</div>
		</div>
	)


};



export default NuevoHistorialEndo;