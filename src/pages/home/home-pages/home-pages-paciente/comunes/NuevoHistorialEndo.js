import React from "react";
import { Button, Col, Form, FormGroup, Input, Label } from "reactstrap";
import Sidebar from "../../../componentes/sidebarP";
import LogoLogin from "../../../../../assets/img/LogoLogin.jpg";
import "../../../home.scss";

const NuevoHistorialEndo = () => {

    

    return(
        
        
        
            <div className="home-contenido">
    
    
    			<Sidebar/>
               
                 <div className="contenido-in-historiales">
                {/* Inputs */}
				<img src={LogoLogin} alt="logo" />
				<Form inline>
				<FormGroup row>
						<center><h1>Endodoncia</h1></center>
                        <Col sm={5}>
                            <Label for="fecha">FECHA:</Label>
							<Input type="date" name="fecha"
								id="fechaOrt" required/>
                        </Col>

						<Col sm={11}>
							<Label >Motivo de la consulta:</Label>
							<Input type="textarea" name="Motivo" id="Endo1" required/>
							<Label >Historia Médica:</Label>
							<Input type="textarea" name="Medica" id="Endo2" required/>
							<Label >Historia Dental:</Label>
							<Input type="textarea" name="Dental" id="Endo3" required/>
							<Label >Gingivitis:</Label>
							<Input type="textarea" name="Gingivitis" id="Endo4" required/>
							<Label >Dolor Presente:</Label>
							<Input type="textarea" name="Dolor" id="Endo5" required/>
							<Label >Inflamación Presente:</Label>
							<Input type="textarea" name="Inflamacion" id="Endo6" required/>
							<Label >Dolor a la Percusión:</Label>
							<Input type="textarea" name="Percusion" id="Endo7" required/>
							<Label >Dolor a la Palpación:</Label>
							<Input type="textarea" name="Palapacion" id="Endo8" required/>
							<Label >Bolsas:</Label>
							<Input type="textarea" name="Bolsas" id="Endo9" required/>
							<Label >Diagnóstico Pulpar de Presunción:</Label>
							<Input type="textarea" name="Presuncion" id="Endo10" required/>
							<Label >Diagnóstico Periapical:</Label>
							<Input type="textarea" name="Periapical" id="Endo11" required/>
							<Label >Diagnóstico Definitivo:</Label>
							<Input type="textarea" name="Definitivo" id="Endo12" required/>
							<Label >Tratamiento Indicado:</Label>
							<Input type="textarea" name="Tratamiento" id="Endo13" required/>
							<Label >Restauración Post-Endodóntica Indicada:</Label>
							<Input type="textarea" name="Restauracion" id="Endo14" required/>
							<Label >Pronóstico:</Label>
							<Input type="textarea" name="Pronostico" id="Endo15" required/>
						</Col>  
					</FormGroup>

					<Button >Guardar</Button>
					<Button href="PacienteHistoHistoriales4">Cancelar</Button>
				</Form>
            </div>
                
    
    
            </div>
    
    
       

    )


};



export default NuevoHistorialEndo;