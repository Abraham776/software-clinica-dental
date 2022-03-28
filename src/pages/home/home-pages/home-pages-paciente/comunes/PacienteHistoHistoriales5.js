import React, { useEffect, useState } from "react";
import { Col, Form, FormGroup, Input, Label } from "reactstrap";
import { Button, Table } from "reactstrap";
import Sidebar from "../../../componentes/sidebarP";
import LogoLogin from "../../../../../assets/img/LogoLogin.jpg";
import "../../../home.scss";

const HistorialOdontologia = () => {
	var id = window.location.href;
	id = id.slice(id.lastIndexOf("/") + 1);
	return (
		<div className="home-contenido">
			<Sidebar id={id}/>
			<div className="contenido-in-historiales">
				{/* Inputs */}
				<Form inline>
					<center><h1>Odontologia general</h1></center>
					<br/>
					<h2>Paciente: <spam>Victor</spam></h2>
					<br/>
					   <Button onClick={function routeOrt(){window.location.href=`/NuevoHistorialGeneral/${id}`}}>Agregar nueva historia clinica</Button>
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
						
						
					</tbody>
				</Table>
					


				</Form>
			</div>



		</div>




	)


};

export default HistorialOdontologia;