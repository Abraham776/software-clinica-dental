import React, { useEffect, useState } from "react";
import { Button, Col, Form, FormGroup, Input, Label } from "reactstrap";
import Sidebar from "../../../componentes/sidebarP";
import LogoLogin from "../../../../../assets/img/LogoLogin.jpg";
import "../../../home.scss";
import Historial1DataService from "../../../../../services/historial1";


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
		var data = {};

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
						<center><h1>Rehabilitacion oral</h1></center>

						<Col sm={5}>
							<Label for="fecha">Fecha:</Label>
							<Input type="date" name="Fecha"
								id="fechaOrt" required value={pacientes.Fecha}
                                
                                
                                onChange={(function onChange(e){
                                    const Fecha = e.target.value;
                                    setPacientes(function(prevState){
                                        return {
                                            ...prevState.pacientes,
                                            Fecha: Fecha,
                                        }
                                    })
                                })}  
                                
                                
                                
                                />
								
							
						</Col>

						<Col sm={11}>
							<Label for="fecha">Motivo de la consulta</Label>
							<Input type="textarea" name="MotivoConsultaRehabilitacion"
								id="fechaOrt" required value={pacientes.MotivoConsultaRehabilitacion}
                                
                                onChange={(function onChange(e){
                                    const MotivoConsultaRehabilitacion = e.target.value;
                                    setPacientes(function(prevState){
                                        return {
                                            ...prevState.pacientes,
                                            MotivoConsultaRehabilitacion: MotivoConsultaRehabilitacion,
                                        }
                                    })
                                })}  
                                
             
                                
                                />
							<Label >Habitos:</Label>
							<Input type="textarea" name="HabitosRehabilitacion" id="Ort1" required value={pacientes.HabitosRehabilitacion} 
                            onChange={(function onChange(e){
								const HabitosRehabilitacion = e.target.value;
								setPacientes(function(prevState){
									return {
										...prevState.pacientes,
										HabitosRehabilitacion: HabitosRehabilitacion,
									}
								})
							})}
                            
                            />
							<Label >Infecciones:</Label>
							<Input type="textarea" name="InfeccionesRehabilitacion" id="Ort2" required value={pacientes.InfeccionesRehabilitacion}
                            
                            onChange={(function onChange(e){
                                const InfeccionesRehabilitacion = e.target.value;
                                setPacientes(function(prevState){
                                    return {
                                        ...prevState.pacientes,
                                        InfeccionesRehabilitacion: InfeccionesRehabilitacion,
                                    }
                                })
                            })}  
                            
                            
                            
                            
                            />
							<Label >Enfermedades eruptivas:</Label>
							<Input type="textarea" name="EnfermedadesEruptivas" id="Ort3" required value={pacientes.EnfermedadesEruptivas}
                            
                            
                            onChange={(function onChange(e){
                                const EnfermedadesEruptivas = e.target.value;
                                setPacientes(function(prevState){
                                    return {
                                        ...prevState.pacientes,
                                        EnfermedadesEruptivas: EnfermedadesEruptivas,
                                    }
                                })
                            })} 
                            
                            
                            />
							<Label >Enfermedades sistematicas:</Label>
							<Input type="textarea" name="EnfermedadesSistematicas" id="Ort4" required value={pacientes.EnfermedadesSistematicas}
                            
                            onChange={(function onChange(e){
                                const EnfermedadesSistematicas = e.target.value;
                                setPacientes(function(prevState){
                                    return {
                                        ...prevState.pacientes,
                                        EnfermedadesSistematicas: EnfermedadesSistematicas,
                                    }
                                })
                            })} 
                            
                            
                            
                            
                            
                            
                            />
						</Col>
						<Col sm={11}>
							<Label >Transfusiones:</Label>
							<select class="form-control" name="Transfusiones" id="Ort5" required value={pacientes.Transfusiones}
                            
                            
                            onChange={(function onChange(e){
                                const Transfusiones = e.target.value;
                                setPacientes(function(prevState){
                                    return {
                                        ...prevState.pacientes,
                                        Transfusiones: Transfusiones,
                                    }
                                })
                            })} 
                            
                            
                            
                            
                            
                            
                            >
								<option selected>-Tipo de sangre-</option>
								<option>Tipo A</option>
								<option>Tipo B</option>
								<option>Tipo AB</option>
								<option>Tipo O</option>
							</select>
							<Label >Alergias bucales:</Label>
							<select class="form-control" name="AlergiasRehabilitacion" id="Ort6" required value={pacientes.AlergiasRehabilitacion}
                            
                            
                            
                            onChange={(function onChange(e){
                                const AlergiasRehabilitacion = e.target.value;
                                setPacientes(function(prevState){
                                    return {
                                        ...prevState.pacientes,
                                        AlergiasRehabilitacion: AlergiasRehabilitacion,
                                    }
                                })
                            })} 
                            
                            
                            
                            
                            
                            
                            >
								<option selected>-Escoga una opción-</option>
								<option>Si</option>
								<option>No</option>
							</select>
						</Col>
						<Col sm={11}>
							<Label >Otros:</Label>
							<Input type="textarea" name="OtrosReahbilitaciones" id="Ort4" required value={pacientes.OtrosReahbilitaciones}
                            
                            
                            onChange={(function onChange(e){
                                const OtrosReahbilitaciones = e.target.value;
                                setPacientes(function(prevState){
                                    return {
                                        ...prevState.pacientes,
                                        OtrosReahbilitaciones: OtrosReahbilitaciones,
                                    }
                                })
                            })} 
                            
                            
                            
                            />
							<Label >Movimiento apertura:</Label>
							<Input type="textarea" name="MovimientoDeAperturaMandibula" id="Ort4" required value={pacientes.MovimientoDeAperturaMandibula}
                            
                            
                            
                            onChange={(function onChange(e){
                                const MovimientoDeAperturaMandibula = e.target.value;
                                setPacientes(function(prevState){
                                    return {
                                        ...prevState.pacientes,
                                        MovimientoDeAperturaMandibula: MovimientoDeAperturaMandibula,
                                    }
                                })
                            })} 
                            
                            
                            />
							<Label >Movimiento de cierre:</Label>
							<Input type="textarea" name="MovimientoDeCierreMandibula" id="Ort23" required value={pacientes.MovimientoDeCierreMandibula}
                            
                            
                            onChange={(function onChange(e){
                                const MovimientoDeCierreMandibula = e.target.value;
                                setPacientes(function(prevState){
                                    return {
                                        ...prevState.pacientes,
                                        MovimientoDeCierreMandibula: MovimientoDeCierreMandibula,
                                    }
                                })
                            })} 
                            
                            />
							<Label >Hipertrofia muscular:</Label>
							<Input type="textarea" name="HipertrofiaMuscular" id="Ort24" required value={pacientes.HipertrofiaMuscular}
                            
                            onChange={(function onChange(e){
                                const HipertrofiaMuscular = e.target.value;
                                setPacientes(function(prevState){
                                    return {
                                        ...prevState.pacientes,
                                        HipertrofiaMuscular: HipertrofiaMuscular,
                                    }
                                })
                            })} 
                            
                            />
							<Label >Movimiento lateral derecho:</Label>
							<Input type="textarea" name="MovimientoLateralDerecho" id="Ort25" required value={pacientes.MovimientoLateralDerecho}
                            
                            
                            onChange={(function onChange(e){
                                const MovimientoLateralDerecho = e.target.value;
                                setPacientes(function(prevState){
                                    return {
                                        ...prevState.pacientes,
                                        MovimientoLateralDerecho: MovimientoLateralDerecho,
                                    }
                                })
                            })} 


                            />
							<Label >Movimiento lateral izquierdo:</Label>
							<Input type="textarea" name="MovimientoLateralIzquierdo" id="Ort26" required value={pacientes.MovimientoLateralIzquierdo}
                            
                            
                            
                            onChange={(function onChange(e){
                                const MovimientoLateralIzquierdo = e.target.value;
                                setPacientes(function(prevState){
                                    return {
                                        ...prevState.pacientes,
                                        MovimientoLateralIzquierdo: MovimientoLateralIzquierdo,
                                    }
                                })
                            })} 
                            
                            
                            
                            />
							<Label >Tratamiento:</Label>
							<Input type="textarea" name="TratamientoRehabilitacion" id="Ort27" required value={pacientes.TratamientoRehabilitacion}   
                            
                            onChange={(function onChange(e){
                                const TratamientoRehabilitacion = e.target.value;
                                setPacientes(function(prevState){
                                    return {
                                        ...prevState.pacientes,
                                        TratamientoRehabilitacion: TratamientoRehabilitacion,
                                    }
                                })
                            })} 

                            />
							<Label >Observacion:</Label>
							<Input type="textarea" name="ObservacionesRehabilitacion" id="Ort27" required value={pacientes.ObservacionesRehabilitacion}
                            
                            
                            onChange={(function onChange(e){
                                const ObservacionesRehabilitacion = e.target.value;
                                setPacientes(function(prevState){
                                    return {
                                        ...prevState.pacientes,
                                        ObservacionesRehabilitacion: ObservacionesRehabilitacion,
                                    }
                                })
                            })} 
                            
                            
                            
                            
                            />

						</Col>


					</FormGroup>

					<Button onClick={update}>Modificar</Button>
					<Button onClick={function back() {window.location.href=`/PacienteHistoHistoriales1/${pacientes.Paciente_idPaciente}`}}>Cancelar</Button>
				</Form>
			</div>



		</div>




	)


};



export default NuevoHistorialOrt;