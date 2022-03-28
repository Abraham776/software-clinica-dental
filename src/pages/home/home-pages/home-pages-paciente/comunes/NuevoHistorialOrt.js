import React from "react";
import { Button, Col, Form, FormGroup, Input, Label } from "reactstrap";
import Sidebar from "../../../componentes/sidebarP";
import LogoLogin from "../../../../../assets/img/LogoLogin.jpg";
import "../../../home.scss";
import Historial1DataService from "../../../../../services/historial2";

const NuevoHistorialOrt = () => {
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

		console.log(data);

		dataService.create(data)
			.then(response => {
				console.log(response);
				if(response.status === 200){
					window.alert("Registro creado exitosamente");
					window.location.href=`/PacienteHistoHistoriales2/${id}`;
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
						

						<Col sm={5}>
							<Label for="fecha">Fecha:</Label>
							<Input type="date" name="FechaOrtod"
								id="fechaOrt" required />
						</Col>

						<Col sm={11}>
							<Label >Enfermedades Crónicas:</Label>
							<Input type="textarea" name="EnfermedadesCronicas" id="Ort1" required />
							<Label >Alteraciones Congénitas:</Label>
							<Input type="textarea" name="AlteracionesCongenitas" id="Ort2" required />
							<Label >Intervenciones Quirúrgicas:</Label>
							<Input type="textarea" name="IntervecionesQuirurgicas" id="Ort3" required />
							<Label >Tratamiento Previo:</Label>
							<Input type="textarea" name="TratamientoPrevio" id="Ort4" required />
						</Col>
						

						<Col sm={11}>
							<Label >Patrón Facial:</Label>
							<select class="form-control" name="PatronFacial" id="Ort5" required>
								<option selected>-Escoga una opción-</option>
								<option>Mesofacial</option>
								<option>Dólico Facial</option>
								<option>Braquifacial</option>
							</select>
							<Label >Perfil:</Label>
							<select class="form-control" name="Perfil" id="Ort6" required>
								<option selected>-Escoga una opción-</option>
								<option>Recto</option>
								<option>Cóncavo</option>
								<option>Convexo</option>
							</select>
							<Label >Asimetría:</Label>
							<select class="form-control" name="Asimetria" id="Ort7" required>
								<option selected>-Escoga una opción-</option>
								<option>Mandíbula derecha</option>
								<option>Mandíbula izquierda</option>
								<option>otras</option>
							</select>
							<Label >Altura Facila:</Label>
							<Input type="number" name="AlturaFacial" id="Ort4" required />
							<Label >Ancho Facial:</Label>
							<Input type="number" name="AnchoFacial" id="Ort4" required />
							<Label >Perfil Maxilar:</Label>
							<select class="form-control" name="PerfilMaxilar" id="Ort10" required>
								<option selected>-Escoga una opción-</option>
								<option>Ortognático</option>
								<option>Prognático</option>
								<option>Retrognático</option>
							</select>
							<Label >Perfil Mandibular:</Label>
							<select class="form-control" name="PerfilMandibular" id="Ort11" required>
								<option selected>-Escoga una opción-</option>
								<option>Ortognático</option>
								<option>Prognático</option>
								<option>Retrognático</option>
							</select>
							<Label >Surco Labio-Mentón:</Label>
							<select class="form-control" name="SurcoLabioMenton" id="Ort12" required>
								<option selected>-Escoga una opción-</option>
								<option>Normal</option>
								<option>Marcado</option>
								<option>Borrado</option>
							</select>
							<Label >Labios en Reposo:</Label>
							<select class="form-control" name="LabiosReposo" id="Ort13" required>
								<option selected>-Escoga una opción-</option>
								<option>Competentes</option>
								<option>Incompetentes</option>
							</select>
							<Label >Perfil Labial:</Label>
							<select class="form-control" name="PerfilLabial" id="Ort14" required>
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
							<select class="form-control" name="Respiracion" id="Ort15" required>
								<option selected>-Escoga una opción-</option>
								<option>Bucal</option>
								<option>Nasal</option>
								<option>Mixta</option>
							</select>
							<Label >Actividad Comisural:</Label>
							<select class="form-control" name="ActividadComisural" id="Ort16" required>
								<option selected>-Escoga una opción-</option>
								<option>Normal</option>
								<option>Contracción</option>
							</select>
							<Label >Actividad Lingual:</Label>
							<select class="form-control" name="ActividadLingual" id="Ort17" required>
								<option selected>-Escoga una opción-</option>
								<option>Normal</option>
								<option>Interposición Anterior</option>
								<option>Interposición lateral</option>
							</select>
							<Label >Labio Superior:</Label>
							<select class="form-control" name="LabioSuperior" id="Ort18" required>
								<option selected>-Escoga una opción-</option>
								<option>Normal</option>
								<option>Hipoactivo</option>
								<option>Hiperactivo</option>
							</select>
							<Label >Labio Inferior:</Label>
							<select class="form-control" name="LabioInferior" id="Ort19" required>
								<option selected>-Escoga una opción-</option>
								<option>Normal</option>
								<option>Hipoactivo</option>
								<option>Hiperactivo</option>
							</select>
							<Label >Masetero:</Label>
							<select class="form-control" name="Masetero" id="Ort20" required>
								<option selected>-Escoga una opción-</option>
								<option>Normal</option>
								<option>Hipoactivo</option>
								<option>Hiperactivo</option>
							</select>
							<Label >Mentoniano:</Label>
							<select class="form-control" name="Mentoniano" id="Ort21" required>
								<option selected>-Escoga una opción-</option>
								<option>Normal</option>
								<option>Hipoactivo</option>
								<option>Hiperactivo</option>
							</select>
							<Label >Habitos de Succión:</Label>
							<select class="form-control" name="HabitosDeSuccion" id="Ort22" required>
								<option selected>-Escoga una opción-</option>
								<option>Dedos</option>
								<option>Lengua</option>
								<option>Labios</option>
								<option>Onicofagia</option>
							</select>
							<Label >Análisis Esqueletal:</Label>
							<Input type="textarea" name="AnalisisEsqueletal" id="Ort23" required />
							<Label >Plan de Tratamiento:</Label>
							<Input type="textarea" name="PlanDeTratamientoOrtod" id="Ort24" required />
							<Label >Técnica y Aparatología a emplear:</Label>
							<Input type="textarea" name="TecnicaYApara" id="Ort25" required />
							<Label >Tiempo Estimado del tratamiento:</Label>
							<Input type="textarea" name="TiempoEstimadoTratamiento" id="Ort26" required />
							<Label >Pronóstico:</Label>
							<Input type="textarea" name="PronosticoOrtod" id="Ort27" required />

						</Col>


					</FormGroup>

					<Button onClick={save}>Guardar</Button>
					<Button onClick={function back() {window.location.href=`/PacienteHistoHistoriales2/${id}`}}>Cancelar</Button>
				</Form>
			</div>



		</div>




	)


};



export default NuevoHistorialOrt;