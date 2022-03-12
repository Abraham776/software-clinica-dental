import React from "react";
import { Button, Col, Form, FormGroup, Input, Label } from "reactstrap";
import Sidebar from "../../../componentes/sidebarP";
import LogoLogin from "../../../../../assets/img/LogoLogin.jpg";
import "../../../home.scss";

const NuevoHistorialOdon = () => {

    

    return(
        
        
        
            <div className="home-contenido">
    
    
    			<Sidebar/>
               
                 <div className="contenido-in-historiales">
                {/* Inputs */}
				<img src={LogoLogin} alt="logo" />
				<Form inline>
					<FormGroup row>
						<center><h1>Odontopediatría</h1></center>
                        <Col sm={5}>
                            <Label for="fecha">FECHA:</Label>
							<Input type="date" name="fecha"
								id="fechaOdon" required/>
                        </Col>

						<Col sm={11}>
                            <Label >Motivo de Consulta:</Label>
							<Input type="textarea" name="Motivo" id="Odon1" required/>
                            <Label >Enfermedades Actuales:</Label>
							<Input type="textarea" name="Enfermedades" id="Odon2" required/>
                            <Label >Antecedentes Familiares:</Label>
							<Input type="textarea" name="Antecedentes" id="Odon3" required/>
                            <Label >Atención Odontológica:</Label>
							<Input type="textarea" name="Atencion" id="Odon4" required/>
                            <Label >Nivel Socio-Económico:</Label>
							<select class="form-control" name="Nivel" id="Odon5" required>
							<option selected>-Escoga una opción-</option>
							<option>Alto</option>
							<option>Medio</option>
							<option>Bajo</option>
							</select>
                            <Label >Matrices Perinatales-Básicas:</Label>
							<select class="form-control" name="Matrices" id="Odon6" required>
							<option selected>-Escoga una opción-</option>
							<option>I</option>
							<option>II</option>
							<option>III</option>
							</select>
                            <Label >Tipo de Alimentación:</Label>
							<Input type="textarea" name="Alimentacion" id="Odon7" required/>
                            <Label >Observaciones Higiene Bucal:</Label>
							<Input type="textarea" name="Higiene" id="Odon8" required/>
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
                            <Label >Conducta del paciente:</Label>
							<select class="form-control" name="Conducta" id="Odon10" required>
							<option selected>-Escoga una opción-</option>
							<option>Cooperador</option>
							<option>Con capacidad potencial de cooperar</option>
							<option>Tímido</option>
							<option>Agresivo</option>
							<option>Miedoso</option>
							<option>Desafiante</option>
							<option>Lloroso</option>
							<option>Incapaz de cooperar</option>
							</select>
							</Col>
							<Col sm={5}>
                            <Label >Peso:</Label>
							<Input type="number" name="Peso" id="Odon11" required/>
                       		</Col>
							<Col sm={5}>
                            <Label >Altura:</Label>
							<Input type="number" name="Altura" id="Odon12" required/>
                       		 </Col>
							<Col sm={11}>
                            <Label >Frecuencia Respiratoria:</Label>
							<Input type="textarea" name="Frecuencia" id="Odon13" required/>
                            <Label >Observaciones de Faringe:</Label>
							<Input type="textarea" name="Faringe" id="Odon14" required/>
                            <Label >Plan de Tratamiento:</Label>
							<Input type="textarea" name="Tratamiento" id="Odon15" required/>
                            <Label >Estado General:</Label>
							<Input type="textarea" name="EstadoG" id="Odon16" required/>
                            <Label >Estado Bucal:</Label>
							<Input type="textarea" name="EstadoB" id="Odon17" required/>
                            <Label >Pronóstico:</Label>
							<Input type="textarea" name="PronosticoOdon" id="Odon18" required/>
						</Col>  
					</FormGroup>

					<Button >Guardar</Button>
					<Button href="PacienteHistoHistoriales3">Cancelar</Button>
				</Form>
            </div>
                
    
    
            </div>
    
    
       

    )


};



export default NuevoHistorialOdon;