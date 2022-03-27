import React from "react";
import { Button, Col, Form, FormGroup, Input, Label } from "reactstrap";
import Sidebar from "../../../componentes/sidebarP";
import LogoLogin from "../../../../../assets/img/LogoLogin.jpg";
import "../../../home.scss";

const NuevoHistorialGeneral = () => {
	var id = window.location.href;
	id = id.slice(id.lastIndexOf("/") + 1);
	return (
		<div className="home-contenido">
			<Sidebar id={id}/>
			<div className="contenido-in-historiales">
				{/* Inputs */}
				<img src={LogoLogin} alt="logo" />
				<Form inline>
					<FormGroup row>
						<center><h1 className="titulo-g">Odontología General</h1></center>
						<Col sm={5}>
							<Label for="fecha">FECHA:</Label>
							<Input type="date" name="fecha"
								id="fechaGen" required />
						</Col>

						<Col sm={11}>
							<Label >Motivo de la Consulta:</Label>
							<Input type="textarea" name="Motivo" id="Gen1" required />
							<Label >Antecedentes Familiares:</Label>
							<Input type="textarea" name="AntecedentesF" id="Gen2" required />
							<Label >Antecedentes Medicos:</Label>
							<Input type="textarea" name="AntecedentesM" id="Gen3" required />
							<Label >Anomalías:</Label>
							<Input type="textarea" name="Anomalias" id="Gen4" required />
							<Label >Dolores:</Label>
							<Input type="textarea" name="Dolores" id="Gen5" required />
							<Label >Estado de Higiene Bucal:</Label>
							<Input type="textarea" name="Higiene" id="Gen6" required />
							<Label >Presencia de Sarro:</Label>
							<select class="form-control" name="Sarro" id="Gen7" required>
								<option selected>-Escoga una opción-</option>
								<option>Si</option>
								<option>No</option>
							</select>
							<Label >Enfermedad Periodontal:</Label>
							<select class="form-control" name="Periodontal" id="Gen8" required>
								<option selected>-Escoga una opción-</option>
								<option>Si</option>
								<option>No</option>
							</select>
							<Label >Diagnostico Presuntivo:</Label>
							<Input type="textarea" name="Diagnostico" id="Gen9" required />
							<Label >Plan de Tratamiento:</Label>
							<Input type="textarea" name="Tratamiento" id="Gen10" required />
							<Label >Observaciones:</Label>
							<Input type="textarea" name="Observaciones" id="Gen11" required />
							<Label >Pronóstico:</Label>
							<Input type="textarea" name="Pronostico" id="Gen12" required />
						</Col>
					</FormGroup>

					<Button >Guardar</Button>
					<Button onClick={function back(){ window.location.href = `/PacienteHistoHistoriales5/${id}` }}>Cancelar</Button>
				</Form>
			</div>



		</div>




	)


};



export default NuevoHistorialGeneral;