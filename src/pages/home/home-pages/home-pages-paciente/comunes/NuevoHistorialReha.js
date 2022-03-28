import React from "react";
import { Button, Col, Form, FormGroup, Input, Label } from "reactstrap";
import Sidebar from "../../../componentes/sidebarP";
import LogoLogin from "../../../../../assets/img/LogoLogin.jpg";
import "../../../home.scss";
import Historial1DataService from "../../../../../services/historial1";

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

		//console.log(data);

		dataService.create(data)
			.then(response => {
				console.log(response);
				if(response.status === 200){
					window.alert("Registro creado exitosamente");
					window.location.href=`/PacienteHistoHistoriales1/${id}`;
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
						<center><h1>Rehabilitacion oral</h1></center>

						<Col sm={5}>
							<Label for="fecha">Fecha:</Label>
							<Input type="date" name="Fecha"
								id="fechaOrt" required />
								
							
						</Col>

						<Col sm={11}>
							<Label for="fecha">Motivo de la consulta</Label>
							<Input type="textarea" name="MotivoConsultaRehabilitacion"
								id="fechaOrt" required />
							<Label >Habitos:</Label>
							<Input type="textarea" name="HabitosRehabilitacion" id="Ort1" required />
							<Label >Infecciones:</Label>
							<Input type="textarea" name="InfeccionesRehabilitacion" id="Ort2" required />
							<Label >Enfermedades eruptivas:</Label>
							<Input type="textarea" name="EnfermedadesEruptivas" id="Ort3" required />
							<Label >Enfermedades sistematicas:</Label>
							<Input type="textarea" name="EnfermedadesSistematicas" id="Ort4" required />
						</Col>
						<Col sm={11}>
							<Label >Transfusiones:</Label>
							<select class="form-control" name="Transfusiones" id="Ort5" required>
								<option selected>-Tipo de sangre-</option>
								<option>Tipo A</option>
								<option>Tipo B</option>
								<option>Tipo AB</option>
								<option>Tipo O</option>
							</select>
							<Label >Alergias bucales:</Label>
							<select class="form-control" name="AlergiasRehabilitacion" id="Ort6" required>
								<option selected>-Escoga una opción-</option>
								<option>Si</option>
								<option>No</option>
							</select>
						</Col>
						<Col sm={11}>
							<Label >Otros:</Label>
							<Input type="textarea" name="OtrosReahbilitaciones" id="Ort4" required />
							<Label >Movimiento apertura:</Label>
							<Input type="textarea" name="MovimientoDeAperturaMandibula" id="Ort4" required />
							<Label >Movimiento de cierre:</Label>
							<Input type="textarea" name="MovimientoDeCierreMandibula" id="Ort23" required />
							<Label >Hipertrofia muscular:</Label>
							<Input type="textarea" name="HipertrofiaMuscular" id="Ort24" required />
							<Label >Movimiento lateral derecho:</Label>
							<Input type="textarea" name="MovimientoLateralDerecho" id="Ort25" required />
							<Label >Movimiento lateral izquierdo:</Label>
							<Input type="textarea" name="MovimientoLateralIzquierdo" id="Ort26" required />
							<Label >Tratamiento:</Label>
							<Input type="textarea" name="TratamientoRehabilitacion" id="Ort27" required />
							<Label >Observacion:</Label>
							<Input type="textarea" name="ObservacionesRehabilitacion" id="Ort27" required />

						</Col>


					</FormGroup>

					<Button onClick={save}>Guardar</Button>
					<Button onClick={function back() {window.location.href=`/PacienteHistoHistoriales1/${id}`}}>Cancelar</Button>
				</Form>
			</div>



		</div>




	)


};



export default NuevoHistorialOrt;