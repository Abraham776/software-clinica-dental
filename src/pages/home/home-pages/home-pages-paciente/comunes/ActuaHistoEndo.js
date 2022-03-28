import React, { useEffect, useState } from "react";
import { Button, Col, Form, FormGroup, Input, Label } from "reactstrap";
import Sidebar from "../../../componentes/sidebarP";
import LogoLogin from "../../../../../assets/img/LogoLogin.jpg";
import "../../../home.scss";
import Historial1DataService from "../../../../../services/historial4";

const NuevoHistorialEndo = () => {
	var id = window.location.href;
	id = id.slice(id.lastIndexOf("/") + 1);


	const [pacientes, setPacientes] = useState([]);
	const dataService = new Historial1DataService();

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

            dataService.get(id)
            .then(response => {
                setPacientes(response.data);
            })
            .catch(err => {
                console.log(err);
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
								id="fechaOrt" required 
								
								value={pacientes.FechaEdo}
								onChange={(function onChange(e){
									const FechaEdo = e.target.value;
									setPacientes(function(prevState){
										return {
											...prevState.pacientes,
											FechaEdo: FechaEdo,
										}
									})
								})}
								
								
								/>
						</Col>

						<Col sm={11}>
							<Label >Motivo de la consulta:</Label>
							<Input type="textarea" name="MotivoEdo" id="Endo1" required 
							value={pacientes.MotivoEdo}
							onChange={(function onChange(e){
								const MotivoEdo = e.target.value;
								setPacientes(function(prevState){
									return {
										...prevState.pacientes,
										MotivoEdo: MotivoEdo,
									}
								})
							})}  
							
							/>
							<Label >Gingivitis:</Label>
							<select class="form-control" name="Gingivitis" id="Endo4" required
							value={pacientes.Gingivitis}
							onChange={(function onChange(e){
								const Gingivitis = e.target.value;
								setPacientes(function(prevState){
									return {
										...prevState.pacientes,
										Gingivitis: Gingivitis,
									}
								})
							})}
							
							>
								<option selected>-Escoga una opción-</option>
								<option>Si</option>
								<option>No</option>
							</select>
							<Label >Dolor Presente:</Label>
							<select class="form-control" name="DolorEdo" id="Endo5" required
							
							value={pacientes.DolorEdo}
							
							onChange={(function onChange(e){
								const DolorEdo = e.target.value;
								setPacientes(function(prevState){
									return {
										...DolorEdo.pacientes,
										DolorEdo: DolorEdo,
									}
								})
							})}
							
							>
								<option selected>-Escoga una opción-</option>
								<option>Si</option>
								<option>No</option>
							</select>
							<Label >Inflamación Presente:</Label>
							<select class="form-control" name="InflamacionEdo" id="Endo6" required
							
							value={pacientes.InflamacionEdo}
							
							onChange={(function onChange(e){
								const InflamacionEdo = e.target.value;
								setPacientes(function(prevState){
									return {
										...InflamacionEdo.pacientes,
										InflamacionEdo: InflamacionEdo,
									}
								})
							})}
							
							>
								<option selected>-Escoga una opción-</option>
								<option>Si</option>
								<option>No</option>
							</select>
							<Label >Dolor a la Percusión:</Label>
							<select class="form-control" name="DolorPercusionEdo" id="Endo7" required
							
							value={pacientes.DolorPercusionEdo}
							
							onChange={(function onChange(e){
								const DolorPercusionEdo = e.target.value;
								setPacientes(function(prevState){
									return {
										...DolorPercusionEdo.pacientes,
										DolorPercusionEdo: DolorPercusionEdo,
									}
								})
							})}
							
							>
								<option selected>-Escoga una opción-</option>
								<option>Horizontal</option>
								<option>Vertical</option>
							</select>
							<Label >Dolor a la Palpación:</Label>
							<select class="form-control" name="DolorPalpacion" id="Endo8" required
							


							value={pacientes.DolorPalpacion}
							onChange={(function onChange(e){
								const DolorPalpacion = e.target.value;
								setPacientes(function(prevState){
									return {
										...DolorPalpacion.pacientes,
										DolorPalpacion: DolorPalpacion,
									}
								})
							})}
							
							>
								<option selected>-Escoga una opción-</option>
								<option>Vestibular</option>
								<option>Lingual/Palatino</option>
							</select>
							<Label >Bolsas:</Label>
							<select class="form-control" name="Bolsas" id="Endo9" required
							
							value={pacientes.Bolsas}
							onChange={(function onChange(e){
								const Bolsas = e.target.value;
								setPacientes(function(prevState){
									return {
										...Bolsas.pacientes,
										Bolsas: Bolsas,
									}
								})
							})}
							
							>
								<option selected>-Escoga una opción-</option>
								<option>Si</option>
								<option>No</option>
							</select>
							<Label>Diagnóstico Pulpar de Presunción:</Label>
							<select class="form-control" name="DiagnosticoPulparDePresuncion" id="Endo10" required
							
							value={pacientes.DiagnosticoPulparDePresuncion}
							onChange={(function onChange(e){
								const DiagnosticoPulparDePresuncion = e.target.value;
								setPacientes(function(prevState){
									return {
										...DiagnosticoPulparDePresuncion.pacientes,
										DiagnosticoPulparDePresuncion: DiagnosticoPulparDePresuncion,
									}
								})
							})}
							
							>
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
							<select class="form-control" name="DiagnosticoPeriapical" id="Endo11" required
							value={pacientes.DiagnosticoPeriapical}
							onChange={(function onChange(e){
								const DiagnosticoPeriapical = e.target.value;
								setPacientes(function(prevState){
									return {
										...DiagnosticoPeriapical.pacientes,
										DiagnosticoPeriapical: DiagnosticoPeriapical,
									}
								})
							})}
							
							>
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
							<select class="form-control" name="DiagnosticoDefinitivo" id="Endo12" required
							value={pacientes.DiagnosticoDefinitivo}
							onChange={(function onChange(e){
								const DiagnosticoDefinitivo = e.target.value;
								setPacientes(function(prevState){
									return {
										...DiagnosticoDefinitivo.pacientes,
										DiagnosticoDefinitivo: DiagnosticoDefinitivo,
									}
								})
							})}
							
							>
								<option selected>-Escoga una opción-</option>
								<option>Pulpitis Reversible</option>
								<option>Pulpa Necrótica</option>
							</select>
							<Label >Tratamiento Indicado:</Label>
							<Input type="textarea" name="TratamientoEdo" id="Endo13" required 
							
							value={pacientes.TratamientoEdo}
							
							onChange={(function onChange(e){
								const TratamientoEdo = e.target.value;
								setPacientes(function(prevState){
									return {
										...TratamientoEdo.pacientes,
										TratamientoEdo: TratamientoEdo,
									}
								})
							})}
							
							
							/>
							<Label >Restauración Post-Endodóntica Indicada:</Label>
							<select class="form-control" name="RestauracionPost" id="Endo14" required
							value={pacientes.RestauracionPost}
							onChange={(function onChange(e){
								const RestauracionPost = e.target.value;
								setPacientes(function(prevState){
									return {
										...RestauracionPost.pacientes,
										RestauracionPost: RestauracionPost,
									}
								})
							})}
							
							
							>
								<option selected>-Escoga una opción-</option>
								<option>Poste</option>
								<option>Amalgama/Resina</option>
								<option>Corona</option>
							</select>
							<Label >Pronóstico:</Label>
							<Input type="textarea" name="Pronostico" id="Endo15" required 
							
							value={pacientes.Pronostico}
							onChange={(function onChange(e){
								const Pronostico = e.target.value;
								setPacientes(function(prevState){
									return {
										...Pronostico.pacientes,
										Pronostico: Pronostico,
									}
								})
							})}
							
							
							/>
						</Col>
					</FormGroup>

					<Button onClick={update}>Modificar</Button>
					<Button onClick={function back() {window.location.href=`/PacienteHistoHistoriales4/${pacientes.Paciente_idPaciente}`}}>Cancelar</Button>
				</Form>
			</div>
		</div>
	)


};



export default NuevoHistorialEndo;