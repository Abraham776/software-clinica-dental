import React, { useEffect, useState } from "react";
import { Button, Col, Form, FormGroup, Input, Label } from "reactstrap";
import Sidebar from "../../../componentes/sidebarP";
import LogoLogin from "../../../../../assets/img/LogoLogin.jpg";
import "../../../home.scss";
import Historial1DataService from "../../../../../services/historial5";
const NuevoHistorialGeneral = () => {
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
						<center><h1 className="titulo-g">Odontología General</h1></center>
						<Col sm={5}>
							<Label for="fecha">FECHA:</Label>
							<Input type="date" name="FechaGeneralOd"
								id="fechaGen" required 
								
								value={pacientes.FechaGeneralOd}
								onChange={(function onChange(e){
									const FechaGeneralOd = e.target.value;
									setPacientes(function(prevState){
										return {
											...prevState.pacientes,
											FechaGeneralOd: FechaGeneralOd,
										}
									})
								})} 
								
								
								
								/>
						</Col>

						<Col sm={11}>
							<Label >Motivo de la Consulta:</Label>
							<Input type="textarea" name="MotivoConsultaGeneral" id="Gen1" required 
							
							value={pacientes.MotivoConsultaGeneral}
							onChange={(function onChange(e){
								const MotivoConsultaGeneral = e.target.value;
								setPacientes(function(prevState){
									return {
										...prevState.pacientes,
										MotivoConsultaGeneral: MotivoConsultaGeneral,
									}
								})
							})} 
							
							
							
							
							/>
							<Label >Antecedentes Medicos:</Label>
							<Input type="textarea" name="AntecedentesMedicos" id="Gen3" required 
							
							value={pacientes.AntecedentesMedicos}
							onChange={(function onChange(e){
								const AntecedentesMedicos = e.target.value;
								setPacientes(function(prevState){
									return {
										...prevState.pacientes,
										AntecedentesMedicos: AntecedentesMedicos,
									}
								})
							})} 
							
							
							
							/>
							<Label >Anomalías:</Label>
							<Input type="textarea" name="AnomaliasGeneral" id="Gen4" required 
							
							value={pacientes.AnomaliasGeneral}
							onChange={(function onChange(e){
								const AnomaliasGeneral = e.target.value;
								setPacientes(function(prevState){
									return {
										...prevState.pacientes,
										AnomaliasGeneral: AnomaliasGeneral,
									}
								})
							})} 
							
							
							/>
							<Label >Dolores:</Label>
							<Input type="textarea" name="DoloresGeneral" id="Gen5" required 
							
							value={pacientes.DoloresGeneral}
							onChange={(function onChange(e){
								const DoloresGeneral = e.target.value;
								setPacientes(function(prevState){
									return {
										...prevState.pacientes,
										DoloresGeneral: DoloresGeneral,
									}
								})
							})}
							
							/>
							<Label >Estado de Higiene Bucal:</Label>
							<Input type="textarea" name="HigieneBucalGeneral" id="Gen6" required 
							value={pacientes.HigieneBucalGeneral}
							onChange={(function onChange(e){
								const HigieneBucalGeneral = e.target.value;
								setPacientes(function(prevState){
									return {
										...prevState.pacientes,
										HigieneBucalGeneral: HigieneBucalGeneral,
									}
								})
							})}
							
							
							/>
							<Label >Presencia de Sarro:</Label>
							<select class="form-control" name="SarroGeneral" id="Gen7" required
							
							value={pacientes.SarroGeneral}
							onChange={(function onChange(e){
								const SarroGeneral = e.target.value;
								setPacientes(function(prevState){
									return {
										...prevState.pacientes,
										SarroGeneral: SarroGeneral,
									}
								})
							})}
							
							
							>
								<option selected>-Escoga una opción-</option>
								<option>Si</option>
								<option>No</option>
							</select>
							<Label >Enfermedad Periodontal:</Label>
							<select class="form-control" name="EnfermedadesPerioGeneral" id="Gen8" required
							
							value={pacientes.EnfermedadesPerioGeneral}
							onChange={(function onChange(e){
								const EnfermedadesPerioGeneral = e.target.value;
								setPacientes(function(prevState){
									return {
										...prevState.pacientes,
										EnfermedadesPerioGeneral: EnfermedadesPerioGeneral,
									}
								})
							})}
							
							
							>
								<option selected>-Escoga una opción-</option>
								<option>Si</option>
								<option>No</option>
							</select>
							<Label >Diagnostico Presuntivo:</Label>
							<Input type="textarea" name="Diagnostico" id="Gen9" required 
							value={pacientes.Diagnostico}
							onChange={(function onChange(e){
								const Diagnostico = e.target.value;
								setPacientes(function(prevState){
									return {
										...prevState.pacientes,
										Diagnostico: Diagnostico,
									}
								})
							})}
							
							/>
							<Label >Plan de Tratamiento:</Label>
							<Input type="textarea" name="TratamientoGeneral" id="Gen10" required 
							value={pacientes.TratamientoGeneral}
							onChange={(function onChange(e){
								const TratamientoGeneral = e.target.value;
								setPacientes(function(prevState){
									return {
										...prevState.pacientes,
										TratamientoGeneral: TratamientoGeneral,
									}
								})
							})}
							/>
							<Label >Observaciones:</Label>
							<Input type="textarea" name="ObservacionesGenerales" id="Gen11" required 
							value={pacientes.ObservacionesGenerales}
							onChange={(function onChange(e){
								const ObservacionesGenerales = e.target.value;
								setPacientes(function(prevState){
									return {
										...prevState.pacientes,
										ObservacionesGenerales: ObservacionesGenerales,
									}
								})
							})}
							
							/>
							<Label >Pronóstico:</Label>
							<Input type="textarea" name="PronosticoGeneral" id="Gen12" required 
							value={pacientes.PronosticoGeneral}
							onChange={(function onChange(e){
								const PronosticoGeneral = e.target.value;
								setPacientes(function(prevState){
									return {
										...prevState.pacientes,
										PronosticoGeneral: PronosticoGeneral,
									}
								})
							})}
							
							/>
						</Col>
					</FormGroup>

					<Button onClick={update}>Modificar</Button>
					<Button onClick={function back(){ window.location.href = `/PacienteHistoHistoriales5/${pacientes.Paciente_idPaciente}` }}>Cancelar</Button>
				</Form>
			</div>



		</div>




	)


};



export default NuevoHistorialGeneral;