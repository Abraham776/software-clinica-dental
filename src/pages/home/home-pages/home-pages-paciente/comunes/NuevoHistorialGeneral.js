import React from "react";
import { Button, Col, Form, FormGroup, Input, Label } from "reactstrap";
import Sidebar from "../../../componentes/sidebarP";
import LogoLogin from "../../../../../assets/img/LogoLogin.jpg";
import "../../../home.scss";

const NuevoHistorialGeneral = () => {

    

    return(
        
        
        
            <div className="home-contenido">
    
    
    			<Sidebar/>
               
                 <div className="contenido-in-historiales">
                {/* Inputs */}
				<img src={LogoLogin} alt="logo" />
				<Form inline>
                <FormGroup row>
						<center><h1>Odontología General</h1></center>
                        <Col sm={5}>
                            <Label for="fecha">FECHA:</Label>
							<Input type="date" name="fecha"
								id="fechaGen" required/>
                        </Col>

						<Col sm={11}>
                            <Label >Motivo de la Consulta:</Label>
							<Input type="textarea" name="Motivo" id="Gen1" required/>
                            <Label >Antecedentes Familiares:</Label>
							<Input type="textarea" name="AntecedentesF" id="Gen1" required/>
                            <Label >Antecedentes Medicos:</Label>
							<Input type="textarea" name="AntecedentesM" id="Gen1" required/>
                            <Label >Anomalías:</Label>
							<Input type="textarea" name="Anomalias" id="Gen1" required/>
                            <Label >Dolores:</Label>
							<Input type="textarea" name="Dolores" id="Gen1" required/>
                            <Label >Estado de Higiene Bucal:</Label>
							<Input type="textarea" name="Higiene" id="Gen1" required/>
                            <Label >Presencia de Sarro:</Label>
							<Input type="textarea" name="Sarro" id="Gen1" required/>
                            <Label >Enfermedad Periodontal:</Label>
							<Input type="textarea" name="Periodontal" id="Gen1" required/>
                            <Label >Diagnostico Presuntivo:</Label>
							<Input type="textarea" name="Diagnostico" id="Gen1" required/>
                            <Label >Plan de Tratamiento:</Label>
							<Input type="textarea" name="Tratamiento" id="Gen1" required/>
                            <Label >Observaciones:</Label>
							<Input type="textarea" name="Observaciones" id="Gen1" required/>
                            <Label >Pronóstico:</Label>
							<Input type="textarea" name="Pronostico" id="Gen1" required/>
						</Col>  
					</FormGroup>

					<Button >Guardar</Button>
					<Button href="PacienteHistoHistoriales5">Cancelar</Button>
				</Form>
            </div>
                
    
    
            </div>
    
    
       

    )


};



export default NuevoHistorialGeneral;