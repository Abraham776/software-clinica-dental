import React, { useEffect, useState } from "react";
import { Button, Table } from "reactstrap";
import Sidebar from "../componentes/sidebar";
import "../home.scss";
import PacientesDataService from "../../../services/pacientes";
import PagosDataService from "../../../services/pagos";

const AdministracionDoctores = () => {
	
	const [pacientes, setPacientes] = useState([]);
	const dataService = new PacientesDataService();
	const [pago, setPago] = useState([]);
	const dataServicepago = new PagosDataService ();

	useEffect(() => {
		dataService.getAll()
			.then(response => {
				setPacientes(response.data);
			})
			.catch(err => {
				console.log(err);
			});
		dataServicepago.getAll()
			.then(response => {
				setPago(response.data);
			})
			.catch(err => {
				console.log(err);
			});
	}, []);
	
	
	pago.map(recibo => {
		
		return (
				 recibo.Total
		)
	})
	const list = pacientes.map(paciente => {
		return (
			<tr>
				<td> {paciente.NombrePaciente} </td>
				<td> {paciente.CorreoPaciente} </td>
				<td> {pago.map(recibo => {
					if(recibo.Paciente_idPaciente== paciente.idPaciente){
						return(recibo.Total)	
					}			
				
				})}  
	
	
	
	       </td>	
				<td><Button block onClick={function routePaciente() { window.location.href = `/administracionpagosAdd/${paciente.idPaciente}` }}>Ver adeudo</Button></td>
			</tr>
		)
	})











	return (
		<div className="home-contenido">
			<Sidebar />
			<div className="form-inputs">
				<Table bordered hover responsive striped>
					<thead>
						<tr>
							<th> Nombre </th>
							<th> Correo </th>
							<th> Adeudo</th>
						</tr>
					</thead>
					<tbody>
						{list}
						
					</tbody>
				</Table>

				<Button className="me-3" onClick={function back() { window.location.href = "/Administracion" }}>Volver</Button>
			</div>
		</div>
	)
}

export default AdministracionDoctores;