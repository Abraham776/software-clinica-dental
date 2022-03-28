import React, { useEffect, useState } from "react";
import { Col, Form, FormGroup, Input, Label } from "reactstrap";
import { Button, Table } from "reactstrap";
import Sidebar from "../../../componentes/sidebarP";
import "../../../home.scss";
import LogoLogin from "../../../../../assets/img/LogoLogin.jpg";
import Historial1DataService from "../../../../../services/historial1";


const PacienteHistoHistoriales1 = () => {
	var id = window.location.href;
	id = id.slice(id.lastIndexOf("/") + 1);

	const [historial1, setHistorial1] = useState([]);

	const dataService = new Historial1DataService();

	useEffect(() => {
		dataService.getAll(id)
			.then(response => {
				setHistorial1(response.data);
			})
			.catch(err => {
				console.log(err);
			});
	}, []);

	function confirmAction() {
		let confirmAction = window.confirm("¿Está seguro de querer borrar este registro? Esta acción es irreversible");
		return confirmAction;
	}
	const list = historial1.map(historialrehabilitacionoral => {
		return (
			<tr>
				<td> {historialrehabilitacionoral.MotivoConsultaRehabilitacion} </td>
				<td> {historialrehabilitacionoral.ObservacionesRehabilitacion} </td>
				<td><Button block onClick={function routePaciente() { window.location.href = `/ActuaHistoReha/${historialrehabilitacionoral.idHistorialRehabilitacionOral}` }}>Ingresar</Button></td>
				<td><Button block color="danger" onClick={function deletePaciente() {

					let response = confirmAction();
					if(!response){
						window.alert("Acción cancelada");
						return;
					}

					dataService.delete(historialrehabilitacionoral.idHistorialRehabilitacionOral)
						.then(response => {
							console.log(response.data);

							
							let index = historial1.map(dat => {
								return dat.idHistorialRehabilitacionOral === historialrehabilitacionoral.idHistorialRehabilitacionOral
							})
							index = index.indexOf(true);
							historial1.splice(index, 1)
							var newData = [];
							Object.assign(newData, historial1);
							
							setHistorial1(newData);
							window.alert("Registro borrado exitosamente");
							
						})
						.catch(e => {
							console.log(e);
							window.alert("Fallo al borrar registro");
						});
				}}>Eliminar</Button></td>
			</tr>
		)
	})
	return (
		<div className="home-contenido">
			<Sidebar id={id}/>
			<div className="contenido-in-historiales">
				{/* Inputs */}
				<Form inline>
					<center><h1>Rehabilitacion oral</h1></center>
					<br/>
					<h2>Paciente: <spam>Victor</spam></h2>
					<br/>
					   <Button onClick={function routeOrt(){window.location.href=`/NuevoHistorialReha/${id}`}}>Agregar nueva historia clinica</Button>
					   <br/>  <br/>  <br/> 
					<Table bordered hover responsive striped>
						
					<thead>
						<tr>
							<th> Foto </th>
							<th> Correo </th>
							<th> Adeudo</th>
						</tr>
					</thead>
					<tbody>
						{list}
						
					</tbody>
				</Table>
					


				</Form>
			</div>



		</div>




	)
};




export default PacienteHistoHistoriales1;