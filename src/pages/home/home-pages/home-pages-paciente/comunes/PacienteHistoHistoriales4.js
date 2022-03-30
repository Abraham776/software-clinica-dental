import React, { useEffect, useState } from "react";
import { Col, Form, FormGroup, Input, Label } from "reactstrap";
import { Button, Table } from "reactstrap";
import Sidebar from "../../../componentes/sidebarP";
import LogoLogin from "../../../../../assets/img/LogoLogin.jpg";
import "../../../home.scss";
import Historial1DataService from "../../../../../services/historial4";

const HitorialEndodoncia = () => {
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
	const list = historial1.map(historialedodoncia => {
		return (
			<tr>
				<td> {historialedodoncia.FechaEdo}</td>
				<td> {historialedodoncia.Pronostico}</td>
				<td><Button block onClick={function routePaciente() { window.location.href = `/ActuaHistoEndo/${historialedodoncia.idHistorialEdodoncia}` }}>Ingresar</Button></td>
				<td><Button block color="danger" onClick={function deletePaciente() {

					let response = confirmAction();
					if(!response){
						window.alert("Acción cancelada");
						return;
					}

					dataService.delete(historialedodoncia.idHistorialEdodoncia)
						.then(response => {
							console.log(response.data);

							
							let index = historial1.map(dat => {
								return dat.idHistorialEdodoncia === historialedodoncia.idHistorialEdodoncia
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
					<center><h1>Endodoncia</h1></center>
					<br/>
					<h2>Paciente: <spam>Victor</spam></h2>
					<br/>
					   <Button onClick={function routeOrt(){window.location.href=`/NuevoHistorialEndo/${id}`}}>Agregar nueva historia clinica</Button>
					   <br/>  <br/>  <br/> 
					<Table bordered hover responsive striped>
						
					<thead>
						<tr>
							<th> Fecha </th>
							<th> Pronostico </th>
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

export default HitorialEndodoncia;