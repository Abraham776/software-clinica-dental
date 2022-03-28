import React, { useEffect, useState } from "react";
import { Button, Col, Form, FormGroup, Input, Label } from "reactstrap";
import Sidebar from "../../../componentes/sidebarP";
import LogoLogin from "../../../../../assets/img/LogoLogin.jpg";
import "../../../home.scss";
import Historial1DataService from "../../../../../services/historial2";

const NuevoHistorialOrt = () => {
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
		var data = {Paciente_idPaciente: pacientes.Paciente_idPaciente};

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
						

						<Col sm={5}>
							<Label for="fecha">Fecha:</Label>
							<Input type="date" name="FechaOrtod"
								id="fechaOrt" required 
								value={pacientes.FechaOrtod}
								onChange={(function onChange(e){
                                    const FechaOrtod = e.target.value;
                                    setPacientes(function(prevState){
                                        return {
                                            ...prevState.pacientes,
                                            FechaOrtod: FechaOrtod,
                                        }
                                    })
                                })}  
								
								/>
						</Col>

						<Col sm={11}>
							<Label >Enfermedades Crónicas:</Label>
							<Input type="textarea" name="EnfermedadesCronicas" id="Ort1" required 
							value={pacientes.EnfermedadesCronicas}
							
							onChange={(function onChange(e){
								const EnfermedadesCronicas = e.target.value;
								setPacientes(function(prevState){
									return {
										...prevState.pacientes,
										EnfermedadesCronicas: EnfermedadesCronicas,
									}
								})
							})} 
							/>
							<Label >Alteraciones Congénitas:</Label>
							<Input type="textarea" name="AlteracionesCongenitas" id="Ort2" required 
							value={pacientes.AlteracionesCongenitas}
							
							onChange={(function onChange(e){
								const AlteracionesCongenitas = e.target.value;
								setPacientes(function(prevState){
									return {
										...prevState.pacientes,
										AlteracionesCongenitas: AlteracionesCongenitas,
									}
								})
							})} 
							
							/>
							<Label >Intervenciones Quirúrgicas:</Label>
							<Input type="textarea" name="IntervecionesQuirurgicas" id="Ort3" required 
							
							value={pacientes.IntervecionesQuirurgicas}
							onChange={(function onChange(e){
								const IntervecionesQuirurgicas= e.target.value;
								setPacientes(function(prevState){
									return {
										...prevState.pacientes,
										IntervecionesQuirurgicas: IntervecionesQuirurgicas,
									}
								})
							})} 
							
							
							/>
							<Label >Tratamiento Previo:</Label>
							<Input type="textarea" name="TratamientoPrevio" id="Ort4" required 
							
							value={pacientes.TratamientoPrevio}
							onChange={(function onChange(e){
								const TratamientoPrevio= e.target.value;
								setPacientes(function(prevState){
									return {
										...prevState.pacientes,
										TratamientoPrevio: TratamientoPrevio,
									}
								})
							})} 
							
							
							/>
						</Col>
						

						<Col sm={11}>
							<Label >Patrón Facial:</Label>
							<select class="form-control" name="PatronFacial" id="Ort5" required
							
							value={pacientes.PatronFacial}
							onChange={(function onChange(e){
								const PatronFacial= e.target.value;
								setPacientes(function(prevState){
									return {
										...prevState.pacientes,
										PatronFacial: PatronFacial,
									}
								})
							})} 
							
							
							
							>
								<option selected>-Escoga una opción-</option>
								<option>Mesofacial</option>
								<option>Dólico Facial</option>
								<option>Braquifacial</option>
							</select>
							<Label >Perfil:</Label>
							<select class="form-control" name="Perfil" id="Ort6" required
							
							
							value={pacientes.Perfil}
							onChange={(function onChange(e){
								const Perfil= e.target.value;
								setPacientes(function(prevState){
									return {
										...prevState.pacientes,
										Perfil: Perfil,
									}
								})
							})} 
							
							
							
							
							
							
							>
								<option selected>-Escoga una opción-</option>
								<option>Recto</option>
								<option>Cóncavo</option>
								<option>Convexo</option>
							</select>
							<Label >Asimetría:</Label>
							<select class="form-control" name="Asimetria" id="Ort7" required
							
							
							value={pacientes.Asimetria}
							
							onChange={(function onChange(e){
								const Asimetria= e.target.value;
								setPacientes(function(prevState){
									return {
										...prevState.pacientes,
										Asimetria: Asimetria,
									}
								})
							})} 
							>
								<option selected>-Escoga una opción-</option>
								<option>Mandíbula derecha</option>
								<option>Mandíbula izquierda</option>
								<option>otras</option>
							</select>
							<Label >Altura Facila:</Label>
							<Input type="number" name="AlturaFacial" id="Ort4" required 
							value={pacientes.AlturaFacial}
							
							onChange={(function onChange(e){
								const AlturaFacial= e.target.value;
								setPacientes(function(prevState){
									return {
										...prevState.pacientes,
										AlturaFacial: AlturaFacial,
									}
								})
							})} 
							
							/>
							<Label >Ancho Facial:</Label>
							<Input type="number" name="AnchoFacial" id="Ort4" required 
							
							value={pacientes.AnchoFacial}
							onChange={(function onChange(e){
								const AnchoFacial= e.target.value;
								setPacientes(function(prevState){
									return {
										...prevState.pacientes,
										AnchoFacial: AnchoFacial,
									}
								})
							})} 
							
							
							/>
							<Label >Perfil Maxilar:</Label>
							<select class="form-control" name="PerfilMaxilar" id="Ort10" required
							
							value={pacientes.PerfilMaxilar}
							
							onChange={(function onChange(e){
								const PerfilMaxilar= e.target.value;
								setPacientes(function(prevState){
									return {
										...prevState.pacientes,
										PerfilMaxilar: PerfilMaxilar,
									}
								})
							})} 
							
							
							
							
							>
								<option selected>-Escoga una opción-</option>
								<option>Ortognático</option>
								<option>Prognático</option>
								<option>Retrognático</option>
							</select>
							<Label >Perfil Mandibular:</Label>
							<select class="form-control" name="PerfilMandibular" id="Ort11" required
							
							value={pacientes.PerfilMandibular}
							onChange={(function onChange(e){
								const PerfilMandibular= e.target.value;
								setPacientes(function(prevState){
									return {
										...prevState.pacientes,
										PerfilMandibular: PerfilMandibular,
									}
								})
							})} 
							
							>
								<option selected>-Escoga una opción-</option>
								<option>Ortognático</option>
								<option>Prognático</option>
								<option>Retrognático</option>
							</select>
							<Label >Surco Labio-Mentón:</Label>
							<select class="form-control" name="SurcoLabioMenton" id="Ort12" required
							
							
							value={pacientes.SurcoLabioMenton}
							onChange={(function onChange(e){
								const SurcoLabioMenton= e.target.value;
								setPacientes(function(prevState){
									return {
										...prevState.pacientes,
										SurcoLabioMenton: SurcoLabioMenton,
									}
								})
							})} 
							
							
							
							
							>
								<option selected>-Escoga una opción-</option>
								<option>Normal</option>
								<option>Marcado</option>
								<option>Borrado</option>
							</select>
							<Label >Labios en Reposo:</Label>
							<select class="form-control" name="LabiosReposo" id="Ort13" required
							
							value={pacientes.LabiosReposo}
							onChange={(function onChange(e){
								const LabiosReposo= e.target.value;
								setPacientes(function(prevState){
									return {
										...prevState.pacientes,
										LabiosReposo: LabiosReposo,
									}
								})
							})} 
							
							
							
							>
								<option selected>-Escoga una opción-</option>
								<option>Competentes</option>
								<option>Incompetentes</option>
							</select>
							<Label >Perfil Labial:</Label>
							<select class="form-control" name="PerfilLabial" id="Ort14" required
							value={pacientes.PerfilLabial}
							onChange={(function onChange(e){
								const PerfilLabial= e.target.value;
								setPacientes(function(prevState){
									return {
										...prevState.pacientes,
										PerfilLabial: PerfilLabial,
									}
								})
							})} 
							
							>
								<option selected>-Escoga una opción-</option>
								<option>Prostusivo Superior</option>
								<option>Prostusivo Inferior</option>
								<option>Retrusivo Superior</option>
								<option>Retrusivo Inferior</option>
								<option>Normal</option>
							</select>
						</Col>

						

						<Col sm={11}>
							<Label >Respiración:</Label>
							<select class="form-control" name="Respiracion" id="Ort15" required
							value={pacientes.Respiracion}
							onChange={(function onChange(e){
								const Respiracion= e.target.value;
								setPacientes(function(prevState){
									return {
										...prevState.pacientes,
										Respiracion: Respiracion,
									}
								})
							})} 
							>
								<option selected>-Escoga una opción-</option>
								<option>Bucal</option>
								<option>Nasal</option>
								<option>Mixta</option>
							</select>
							<Label >Actividad Comisural:</Label>
							<select class="form-control" name="ActividadComisural" id="Ort16" required
							
							value={pacientes.ActividadComisural}
							
							onChange={(function onChange(e){
								const ActividadComisural= e.target.value;
								setPacientes(function(prevState){
									return {
										...prevState.pacientes,
										ActividadComisural: ActividadComisural,
									}
								})
							})} 
							
							
							
							
							
							>
								<option selected>-Escoga una opción-</option>
								<option>Normal</option>
								<option>Contracción</option>
							</select>
							<Label >Actividad Lingual:</Label>
							<select class="form-control" name="ActividadLingual" id="Ort17" required
							value={pacientes.ActividadLingual}
							
							onChange={(function onChange(e){
								const ActividadLingual= e.target.value;
								setPacientes(function(prevState){
									return {
										...prevState.pacientes,
										ActividadLingual: ActividadLingual,
									}
								})
							})} 
							
							
							>
								<option selected>-Escoga una opción-</option>
								<option>Normal</option>
								<option>Interposición Anterior</option>
								<option>Interposición lateral</option>
							</select>
							<Label >Labio Superior:</Label>
							<select class="form-control" name="LabioSuperior" id="Ort18" required
							
							value={pacientes.LabioSuperior}
							onChange={(function onChange(e){
								const LabioSuperior= e.target.value;
								setPacientes(function(prevState){
									return {
										...prevState.pacientes,
										LabioSuperior: LabioSuperior,
									}
								})
							})} 
							
							
							
							>
								<option selected>-Escoga una opción-</option>
								<option>Normal</option>
								<option>Hipoactivo</option>
								<option>Hiperactivo</option>
							</select>
							<Label >Labio Inferior:</Label>
							<select class="form-control" name="LabioInferior" id="Ort19" required
							
							
							value={pacientes.LabioInferior}
							
							onChange={(function onChange(e){
								const LabioInferior= e.target.value;
								setPacientes(function(prevState){
									return {
										...prevState.pacientes,
										LabioInferior: LabioInferior,
									}
								})
							})}
							
							
							
							>
								<option selected>-Escoga una opción-</option>
								<option>Normal</option>
								<option>Hipoactivo</option>
								<option>Hiperactivo</option>
							</select>
							<Label >Masetero:</Label>
							<select class="form-control" name="Masetero" id="Ort20" required
							
							value={pacientes.Masetero}
							onChange={(function onChange(e){
								const Masetero= e.target.value;
								setPacientes(function(prevState){
									return {
										...prevState.pacientes,
										Masetero: Masetero,
									}
								})
							})}
							
							
							>
								<option selected>-Escoga una opción-</option>
								<option>Normal</option>
								<option>Hipoactivo</option>
								<option>Hiperactivo</option>
							</select>
							<Label >Mentoniano:</Label>
							<select class="form-control" name="Mentoniano" id="Ort21" required
							
							value={pacientes.Mentoniano}
							onChange={(function onChange(e){
								const Mentoniano= e.target.value;
								setPacientes(function(prevState){
									return {
										...prevState.pacientes,
										Mentoniano: Mentoniano,
									}
								})
							})}
							
							>
								<option selected>-Escoga una opción-</option>
								<option>Normal</option>
								<option>Hipoactivo</option>
								<option>Hiperactivo</option>
							</select>
							<Label >Habitos de Succión:</Label>
							<select class="form-control" name="HabitosDeSuccion" id="Ort22" required
							
							value={pacientes.HabitosDeSuccion}
							onChange={(function onChange(e){
								const HabitosDeSuccion= e.target.value;
								setPacientes(function(prevState){
									return {
										...prevState.pacientes,
										HabitosDeSuccion: HabitosDeSuccion,
									}
								})
							})}
							
							>
								<option selected>-Escoga una opción-</option>
								<option>Dedos</option>
								<option>Lengua</option>
								<option>Labios</option>
								<option>Onicofagia</option>
							</select>
							<Label >Análisis Esqueletal:</Label>
							<Input type="textarea" name="AnalisisEsqueletal" id="Ort23" required 
							
							value={pacientes.AnalisisEsqueletal}
							onChange={(function onChange(e){
								const AnalisisEsqueletal= e.target.value;
								setPacientes(function(prevState){
									return {
										...prevState.pacientes,
										AnalisisEsqueletal: AnalisisEsqueletal,
									}
								})
							})}
							
							
							/>
							<Label >Plan de Tratamiento:</Label>
							<Input type="textarea" name="PlanDeTratamientoOrtod" id="Ort24" required 
							
							value={pacientes.PlanDeTratamientoOrtod}
							onChange={(function onChange(e){
								const PlanDeTratamientoOrtod= e.target.value;
								setPacientes(function(prevState){
									return {
										...prevState.pacientes,
										PlanDeTratamientoOrtod: PlanDeTratamientoOrtod,
									}
								})
							})}
							/>
							<Label >Técnica y Aparatología a emplear:</Label>
							<Input type="textarea" name="TecnicaYApara" id="Ort25" required 
							
							value={pacientes.TecnicaYApara}
							onChange={(function onChange(e){
								const TecnicaYApara= e.target.value;
								setPacientes(function(prevState){
									return {
										...prevState.pacientes,
										TecnicaYApara: TecnicaYApara,
									}
								})
							})}
							/>
							<Label >Tiempo Estimado del tratamiento:</Label>
							<Input type="textarea" name="TiempoEstimadoTratamiento" id="Ort26" required 
							
							value={pacientes.TiempoEstimadoTratamiento}
							onChange={(function onChange(e){
								const TiempoEstimadoTratamiento= e.target.value;
								setPacientes(function(prevState){
									return {
										...prevState.pacientes,
										TiempoEstimadoTratamiento: TiempoEstimadoTratamiento,
									}
								})
							})}
							
							/>
							<Label >Pronóstico:</Label>
							<Input type="textarea" name="PronosticoOrtod" id="Ort27" required 
							

							value={pacientes.PronosticoOrtod}
							onChange={(function onChange(e){
								const PronosticoOrtod= e.target.value;
								setPacientes(function(prevState){
									return {
										...prevState.pacientes,
										PronosticoOrtod: PronosticoOrtod,
									}
								})
							})}
							/>

						</Col>


					</FormGroup>

					<Button onClick={update}>Modificar</Button>
					<Button onClick={function back() {window.location.href=`/PacienteHistoHistoriales2/${pacientes.Paciente_idPaciente}`}}>Cancelar</Button>
				</Form>
			</div>



		</div>




	)


};



export default NuevoHistorialOrt;