import React from "react";
import { Button, Col, Form, FormGroup, Input, Label } from "reactstrap";
import Sidebar from "../../../componentes/sidebarP";
import LogoLogin from "../../../../../assets/img/LogoLogin.jpg";
import "../../../home.scss";

const HistorialOdontopediatria = () => {

    

    return(
        
        
        
		<div className="home-contenido">

		<Sidebar/>
			 <div className="contenido-in-historiales">
			{/* Inputs */}
			<Form inline>
			<center><h1>Historial Clinico de Odontopediatría</h1></center>
			
			<table class="paciente-historiales">
				<tr>
				<td><img src={LogoLogin} alt="logo" />	</td>
				<td><h2>Paciente:</h2>
				<Button href="NuevoHistorialOdon">Agregar nueva historia clinica</Button></td>
				</tr>
			</table>
			<center><table class="default">
				<tr>
					<th>Fecha de Consulta</th>
					<th text align="center">Motivo de Consulta</th>
					<th></th>
				</tr>
				<tr>
					<td>11/03/2022</td>
					<td>La siguiente consulta fue realizada pq se me </td>
					<th><Button href="NuevoHistorialOdon">Ver</Button></th>
				</tr>
			</table></center>
				
				
			</Form>
		</div>
			

	
		</div>


   

)


};

export default HistorialOdontopediatria;
