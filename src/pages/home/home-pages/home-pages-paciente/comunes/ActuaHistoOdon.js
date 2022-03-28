import React, { useEffect, useState } from "react";
import { Button, Col, Form, FormGroup, Input, Label } from "reactstrap";
import Sidebar from "../../../componentes/sidebarP";
import LogoLogin from "../../../../../assets/img/LogoLogin.jpg";
import "../../../home.scss";
import Historial1DataService from "../../../../../services/historial3";
const NuevoHistorialOdon = () => {
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
			<Sidebar />
			<div className="contenido-in-historiales">
				<Form inline name="form" id="form">
					<FormGroup row>
						<center><h1>Odontopediatría</h1></center>
						<Col sm={5}>
							<Label for="fecha">Fecha:</Label>
							<Input type="date" name="FechaOdontopediatria"
								id="fechaOdon" required 
								value={pacientes.FechaOdontopediatria}
								onChange={(function onChange(e){
									const FechaOdontopediatria = e.target.value;
									setPacientes(function(prevState){
										return {
											...prevState.pacientes,
											FechaOdontopediatria: FechaOdontopediatria,
										}
									})
								})} 
								
								
								/>
						</Col>

						<Col sm={11}>
							<Label >Motivo de Consulta:</Label>
							<Input type="textarea" name="MotivoConsultaOdontopediatria" id="Odon1" required 
							
							value={pacientes.MotivoConsultaOdontopediatria}
							onChange={(function onChange(e){
								const MotivoConsultaOdontopediatria = e.target.value;
								setPacientes(function(prevState){
									return {
										...prevState.pacientes,
										MotivoConsultaOdontopediatria: MotivoConsultaOdontopediatria,
									}
								})
							})} 
							
							
							/>
							<Label >Enfermedades Actuales:</Label>
							<Input type="textarea" name="EnfermedadesActualesOdontopedi" id="Odon2" required 
							
							value={pacientes.EnfermedadesActualesOdontopedi}
							onChange={(function onChange(e){
								const EnfermedadesActualesOdontopedi = e.target.value;
								setPacientes(function(prevState){
									return {
										...prevState.pacientes,
										EnfermedadesActualesOdontopedi: EnfermedadesActualesOdontopedi,
									}
								})
							})} 
							
							/>
							<Label >Antecedentes Familiares:</Label>
							<Input type="textarea" name="AntecedentesFamiliaresOdontopedia" id="Odon3" required 
							
							value={pacientes.AntecedentesFamiliaresOdontopedia}
							onChange={(function onChange(e){
								const AntecedentesFamiliaresOdontopedia = e.target.value;
								setPacientes(function(prevState){
									return {
										...prevState.pacientes,
										AntecedentesFamiliaresOdontopedia: AntecedentesFamiliaresOdontopedia,
									}
								})
							})} 
							
							
							
							/>
							<Label >Atención Odontológica:</Label>
							<Input type="textarea" name="AtencionOdontologica" id="Odon4" required 
							
							value={pacientes.AtencionOdontologica}
							onChange={(function onChange(e){
								const AtencionOdontologica = e.target.value;
								setPacientes(function(prevState){
									return {
										...prevState.pacientes,
										AtencionOdontologica: AtencionOdontologica,
									}
								})
							})} 
							
							
							
							/>
							<Label >Matrices Perinatales-Básicas:</Label>
							<select class="form-control" name="MatricesPerinatales" id="Odon6" required
							
							value={pacientes.MatricesPerinatales}
							onChange={(function onChange(e){
								const MatricesPerinatales = e.target.value;
								setPacientes(function(prevState){
									return {
										...prevState.pacientes,
										MatricesPerinatales: MatricesPerinatales,
									}
								})
							})} 
							
							
							
							>
								<option selected>-Escoga una opción-</option>
								<option>I</option>
								<option>II</option>
								<option>III</option>
							</select>
							<Label >Tipo de Alimentación:</Label>
							<Input type="textarea" name="TipoAlimentacion" id="Odon7" required 
							value={pacientes.TipoAlimentacion}
							onChange={(function onChange(e){
								const TipoAlimentacion = e.target.value;
								setPacientes(function(prevState){
									return {
										...prevState.pacientes,
										TipoAlimentacion: TipoAlimentacion,
									}
								})
							})} 
							
							/>
							<Label >Observaciones Higiene Bucal:</Label>
							<Input type="textarea" name="HigieneBucal" id="Odon8" required 
							
							
							
							value={pacientes.HigieneBucal}
							onChange={(function onChange(e){
								const HigieneBucal = e.target.value;
								setPacientes(function(prevState){
									return {
										...prevState.pacientes,
										HigieneBucal: HigieneBucal,
									}
								})
							})} 
							
							
							
							
							/>
							<Label >Hábitos:</Label>
							<select class="form-control" name="Habitos" id="Odon9" required
							
							
							
							
							value={pacientes.Habitos}
							onChange={(function onChange(e){
								const Habitos = e.target.value;
								setPacientes(function(prevState){
									return {
										...prevState.pacientes,
										Habitos: Habitos,
									}
								})
							})} 
							
							
							
							
							
							>
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
							<Input type="number" name="PesoOdontopedia" id="Odon11" required 
							value={pacientes.PesoOdontopedia}
							onChange={(function onChange(e){
								const PesoOdontopedia = e.target.value;
								setPacientes(function(prevState){
									return {
										...prevState.pacientes,
										PesoOdontopedia: PesoOdontopedia,
									}
								})
							})} 
							/>
						</Col>
						<Col sm={5}>
							<Label >Altura:</Label>
							<Input type="number" name="AlturaOdontopedia" id="Odon12" required 
							
							value={pacientes.AlturaOdontopedia}
							onChange={(function onChange(e){
								const AlturaOdontopedia = e.target.value;
								setPacientes(function(prevState){
									return {
										...prevState.pacientes,
										AlturaOdontopedia: AlturaOdontopedia,
									}
								})
							})}



							/>
						</Col>
						<Col sm={11}>
							<Label >Frecuencia Respiratoria:</Label>
							<Input type="textarea" name="FrecuenciaRespiratoria" id="Odon13" required 
							
							value={pacientes.FrecuenciaRespiratoria}
							onChange={(function onChange(e){
								const FrecuenciaRespiratoria = e.target.value;
								setPacientes(function(prevState){
									return {
										...prevState.pacientes,
										FrecuenciaRespiratoria: FrecuenciaRespiratoria,
									}
								})
							})}
							
							/>
							<Label >Observaciones de Faringe:</Label>
							<Input type="textarea" name="ObservacionesFaringe" id="Odon14" required 
							
							value={pacientes.ObservacionesFaringe}
							onChange={(function onChange(e){
								const ObservacionesFaringe = e.target.value;
								setPacientes(function(prevState){
									return {
										...prevState.pacientes,
										ObservacionesFaringe: ObservacionesFaringe,
									}
								})
							})}
							
							
							/>
							<Label >Plan de Tratamiento:</Label>
							<Input type="textarea" name="PlanTratamientoOdontopedia" id="Odon15" required 
							
							
							value={pacientes.PlanTratamientoOdontopedia}
							onChange={(function onChange(e){
								const PlanTratamientoOdontopedia = e.target.value;
								setPacientes(function(prevState){
									return {
										...prevState.pacientes,
										PlanTratamientoOdontopedia: PlanTratamientoOdontopedia,
									}
								})
							})}
							
							
							/>
							<Label >Estado General:</Label>
							<Input type="textarea" name="EstadoGeneralOdontopedia" id="Odon16" required 
							value={pacientes.EstadoGeneralOdontopedia}
							onChange={(function onChange(e){
								const EstadoGeneralOdontopedia = e.target.value;
								setPacientes(function(prevState){
									return {
										...prevState.pacientes,
										EstadoGeneralOdontopedia: EstadoGeneralOdontopedia,
									}
								})
							})}
							
							
							/>
							<Label >Estado Bucal:</Label>
							<Input type="textarea" name="EstadoBucalOdontopedia" id="Odon17" required 
							value={pacientes.EstadoBucalOdontopedia}
							onChange={(function onChange(e){
								const EstadoBucalOdontopedia = e.target.value;
								setPacientes(function(prevState){
									return {
										...prevState.pacientes,
										EstadoBucalOdontopedia: EstadoBucalOdontopedia,
									}
								})
							})}
							
							
							/>
							<Label >Pronóstico:</Label>
							<Input type="textarea" name="PronosticoOdontopedia" id="Odon18" required 
							
							value={pacientes.PronosticoOdontopedia}
							onChange={(function onChange(e){
								const PronosticoOdontopedia = e.target.value;
								setPacientes(function(prevState){
									return {
										...prevState.pacientes,
										PronosticoOdontopedia: PronosticoOdontopedia,
									}
								})
							})}
							/>
						</Col>
					</FormGroup>

					<Button onClick={update}>Guardar</Button>
					<Button onClick={function back(){ window.location.href = `/PacienteHistoHistoriales3/${pacientes.Paciente_idPaciente}`}} >Cancelar</Button>
				</Form>
			</div>



		</div>




	)


};



export default NuevoHistorialOdon;