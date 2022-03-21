import React from "react";
import { Button, Col, Form, FormGroup, Input, Label } from "reactstrap";
import Sidebar from "../../../componentes/sidebarP";
import LogoLogin from "../../../../../assets/img/LogoLogin.jpg";
import "../../../home.scss";

const NuevoHistorialEndo = () => {
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
						<center><h1>Endodoncia</h1></center>
						<Col sm={5}>
							<Label for="fecha">FECHA:</Label>
							<Input type="date" name="fecha"
								id="fechaOrt" required />
						</Col>

						<Col sm={11}>
							<Label >Motivo de la consulta:</Label>
							<Input type="textarea" name="Motivo" id="Endo1" required />
							<Label >Historia Médica:</Label>
							<Input type="textarea" name="Medica" id="Endo2" required />
							<Label >Historia Dental:</Label>
							<Input type="textarea" name="Dental" id="Endo3" required />
							<Label >Gingivitis:</Label>
							<select class="form-control" name="Gingivitis" id="Endo4" required>
								<option selected>-Escoga una opción-</option>
								<option>Si</option>
								<option>No</option>
							</select>
							<Label >Dolor Presente:</Label>
							<select class="form-control" name="Dolor" id="Endo5" required>
								<option selected>-Escoga una opción-</option>
								<option>Si</option>
								<option>No</option>
							</select>
							<Label >Inflamación Presente:</Label>
							<select class="form-control" name="Inflamacion" id="Endo6" required>
								<option selected>-Escoga una opción-</option>
								<option>Si</option>
								<option>No</option>
							</select>
							<Label >Dolor a la Percusión:</Label>
							<select class="form-control" name="Percision" id="Endo7" required>
								<option selected>-Escoga una opción-</option>
								<option>Horizontal</option>
								<option>Vertical</option>
							</select>
							<Label >Dolor a la Palpación:</Label>
							<select class="form-control" name="Palpacion" id="Endo8" required>
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
							<select class="form-control" name="Presuncion" id="Endo10" required>
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
							<select class="form-control" name="Perapical" id="Endo11" required>
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
							<select class="form-control" name="Definitivo" id="Endo12" required>
								<option selected>-Escoga una opción-</option>
								<option>Pulpitis Reversible</option>
								<option>Pulpa Necrótica</option>
							</select>
							<Label >Tratamiento Indicado:</Label>
							<Input type="textarea" name="Tratamiento" id="Endo13" required />
							<Label >Restauración Post-Endodóntica Indicada:</Label>
							<select class="form-control" name="Restauracion" id="Endo14" required>
								<option selected>-Escoga una opción-</option>
								<option>Poste</option>
								<option>Amalgama/Resina</option>
								<option>Corona</option>
							</select>
							<Label >Pronóstico:</Label>
							<Input type="textarea" name="Pronostico" id="Endo15" required />
						</Col>
					</FormGroup>

					<Button >Guardar</Button>
					<Button onClick={function back() { window.location.href = `/PacienteHistoHistoriales4/${id}`}}>Cancelar</Button>
				</Form>
			</div>
		</div>
	)


};



export default NuevoHistorialEndo;