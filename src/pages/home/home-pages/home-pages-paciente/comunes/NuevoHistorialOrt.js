import React from "react";
import { Button, Col, Form, FormGroup, Input, Label } from "reactstrap";
import Sidebar from "../../../componentes/sidebarP";
import LogoLogin from "../../../../../assets/img/LogoLogin.jpg";
import "../../../home.scss";

const NuevoHistorialOrt = () => {

    

    return(
        
        
        
            <div className="home-contenido">
    
    
    			<Sidebar/>
               
                 <div className="contenido-in-historiales">
                {/* Inputs */}
				<img src={LogoLogin} alt="logo" />
				<Form inline>
					<FormGroup row>
						<center><h1>Ortodoncia</h1></center>

						<Col sm={5}>
							<Label for="fecha">FECHA:</Label>
							<Input type="date" name="fecha"
								id="fechaOrt" required/>
						</Col>

						<Col sm={11}>
							<Label >Enfermedades Crónicas:</Label>
							<Input type="textarea" name="Enfermedades" id="Ort1" required/>	
							<Label >Alteraciones Congénitas:</Label>
							<Input type="textarea" name="Alteraciones" id="Ort2" required/>	
							<Label >Intervenciones Quirúrgicas:</Label>
							<Input type="textarea" name="Intervenciones" id="Ort3" required/>	
							<Label >Tratamiento Previo:</Label>
							<Input type="textarea" name="Tratamiento" id="Ort4" required/>	
						</Col>
						<center><h1>Análisis Facial</h1></center>

						<Col sm={11}>
							<Label >Patrón Facial:</Label>
							<select class="form-control" name="Patron" id="Ort5" required>
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
							<select class="form-control" name="Altura" id="Ort8" required>
							<option selected>-Escoga una opción-</option>
							<option>Equilibrada</option>
							<option>Larga</option>
							<option>Corta</option>
							</select>	
							<Label >Ancho Facial:</Label>
							<select class="form-control" name="Ancho" id="Ort9" required>
							<option selected>-Escoga una opción-</option>
							<option>Equilibrado</option>
							<option>Estrecho</option>
							<option>Amplio</option>
							</select>	
							<Label >Perfil Maxilar:</Label>
							<select class="form-control" name="Maxilar" id="Ort10" required>
							<option selected>-Escoga una opción-</option>
							<option>Ortognático</option>
							<option>Prognático</option>
							<option>Retrognático</option>
							</select>
							<Label >Perfil Mandibular:</Label>
							<select class="form-control" name="Mandibular" id="Ort11" required>
							<option selected>-Escoga una opción-</option>
							<option>Ortognático</option>
							<option>Prognático</option>
							<option>Retrognático</option>
							</select>
							<Label >Surco Labio-Mentón:</Label>
							<select class="form-control" name="Surco" id="Ort12" required>
							<option selected>-Escoga una opción-</option>
							<option>Normal</option>
							<option>Marcado</option>
							<option>Borrado</option>
							</select>
							<Label >Labios en Reposo:</Label>
							<select class="form-control" name="Labios" id="Ort13" required>
							<option selected>-Escoga una opción-</option>
							<option>Competentes</option>
							<option>Incompetentes</option>
							</select>
							<Label >Perfil Labial:</Label>
							<select class="form-control" name="Labial" id="Ort14" required>
							<option selected>-Escoga una opción-</option>
							<option>Prostusivo Superior</option>
							<option>Prostusivo Inferior</option>
							<option>Retrusivo Superior</option>
							<option>Retrusivo Inferior</option>
							<option>Normal</option>
							</select>
						</Col>

						<center><h1>Análisis Funcional</h1></center>

						<Col sm={11}>
							<Label >Respiración:</Label>
							<select class="form-control" name="Respiracion" id="Ort15" required>
							<option selected>-Escoga una opción-</option>
							<option>Bucal</option>
							<option>Nasal</option>
							<option>Mixta</option>
							</select>
							<Label >Actividad Comisural:</Label>
							<select class="form-control" name="Comisural" id="Ort16" required>
							<option selected>-Escoga una opción-</option>
							<option>Normal</option>
							<option>Contracción</option>
							</select>
							<Label >Actividad Lingual:</Label>
							<select class="form-control" name="Lingual" id="Ort17" required>
							<option selected>-Escoga una opción-</option>
							<option>Normal</option>
							<option>Interposición Anterior</option>
							<option>Interposición lateral</option>
							</select>
							<Label >Labio Superior:</Label>
							<select class="form-control" name="Superior" id="Ort18" required>
							<option selected>-Escoga una opción-</option>
							<option>Normal</option>
							<option>Hipoactivo</option>
							<option>Hiperactivo</option>
							</select>
							<Label >Labio Inferior:</Label>
							<select class="form-control" name="Inferior" id="Ort19" required>
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
							<select class="form-control" name="Succion" id="Ort22" required>
							<option selected>-Escoga una opción-</option>
							<option>Dedos</option>
							<option>Lengua</option>
							<option>Labios</option>
							<option>Onicofagia</option>
							</select>
							<Label >Análisis Esqueletal:</Label>
							<Input type="textarea" name="Esqueleto" id="Ort23" required/>
							<Label >Plan de Tratamiento:</Label>
							<Input type="textarea" name="PTratamiento" id="Ort24" required/>
							<Label >Técnica y Aparatología a emplear:</Label>
							<Input type="textarea" name="Aparatologia" id="Ort25" required/>
							<Label >Tiempo Estimado del tratamiento:</Label>
							<Input type="textarea" name="Tiempo" id="Ort26" required/>
							<Label >Pronóstico:</Label>
							<Input type="textarea" name="PronosticoOrt" id="Ort27" required/>

						</Col>

						
					</FormGroup>

					<Button >Guardar</Button>
					<Button href="PacienteHistoHistoriales2">Cancelar</Button>
				</Form>
            </div>
                
    
    
            </div>
    
    
       

    )


};



export default NuevoHistorialOrt;