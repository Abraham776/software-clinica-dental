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
							<Input type="text" name="Enfermedades" id="Ort1" required/>	
							<Label >Alteraciones Congénitas:</Label>
							<Input type="text" name="Alteraciones" id="Ort2" required/>	
							<Label >Intervenciones Quirúrgicas:</Label>
							<Input type="text" name="Intervenciones" id="Ort3" required/>	
							<Label >Tratamiento Previo:</Label>
							<Input type="text" name="Tratamiento" id="Ort4" required/>	
						</Col>
						<center><h1>Análisis Facial</h1></center>

						<Col sm={11}>
							<Label >Patrón Facial:</Label>
							<Input type="text" name="Patron" id="Ort5" required/>	
							<Label >Perfil:</Label>
							<Input type="text" name="Perfil" id="Ort6" required/>	
							<Label >Asimetría:</Label>
							<Input type="text" name="Asimetria" id="Ort7" required/>	
							<Label >Altura Facila:</Label>
							<Input type="text" name="Altura" id="Ort8" required/>	
							<Label >Ancho Facial:</Label>
							<Input type="text" name="Ancho" id="Ort9" required/>	
							<Label >Perfil Maxilar:</Label>
							<Input type="text" name="Maxilar" id="Ort10" required/>	
							<Label >Perfil Mandibular:</Label>
							<Input type="text" name="Mandibular" id="Ort11" required/>	
							<Label >Surco Labio-Mentón:</Label>
							<Input type="text" name="Surco" id="Ort12" required/>	
							<Label >Labios en Reposo:</Label>
							<Input type="text" name="Labios" id="Ort13" required/>	
							<Label >Perfil Labial:</Label>
							<Input type="text" name="Labial" id="Ort14" required/>	
						</Col>

						<center><h1>Análisis Funcional</h1></center>

						<Col sm={11}>
							<Label >Respiracion:</Label>
							<Input type="textarea" name="Respiracion" id="Ort15" required/>
							<Label >Actividad Comisural:</Label>
							<Input type="textarea" name="Comisural" id="Ort16" required/>
							<Label >Actividad Lingual:</Label>
							<Input type="textarea" name="Lingual" id="Ort17" required/>
							<Label >Labio Superior:</Label>
							<Input type="textarea" name="Superior" id="Ort18" required/>
							<Label >Labio Inferior:</Label>
							<Input type="textarea" name="Inferior" id="Ort19" required/>
							<Label >Masetero:</Label>
							<Input type="textarea" name="Masetero" id="Ort20" required/>
							<Label >Mentoniano:</Label>
							<Input type="textarea" name="Mentoniano" id="Ort21" required/>
							<Label >Habitos de Succión:</Label>
							<Input type="textarea" name="Succion" id="Ort22" required/>
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