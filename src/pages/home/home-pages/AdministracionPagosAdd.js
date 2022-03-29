// Sánchez Plazola José Abraham
// 11/03/2022
// Componente para añadir doctores (usuarios) a la base de datos de la clinica

import React, { useEffect, useState } from "react";
import { Button, Col, Form, FormGroup, Input, Label } from "reactstrap";
import Sidebar from "../componentes/sidebar";
import "../home.scss";
import PacientesDataService from "../../../services/pagos";
import TraDataService from "../../../services/tratamiento";
import LogoLogin from "../../../assets/img/LogoLogin.jpg"

export const AdministracionDoctoresAdd = () => {

	var id = window.location.href;
	id = id.slice(id.lastIndexOf("/") + 1);
	const [pacientes, setPacientes] = useState([]);
	const dataService = new PacientesDataService();
	const [trata, setTrata] = useState([]);
	const dataServiceT = new TraDataService();

	useEffect(() => {
			dataService.get(id)
			.then(response => {
				setPacientes(response.data);
			})
			.catch(err => {
				console.log(err);
			});
			dataServiceT.getAll()
			.then(response => {
				setTrata(response.data);
			})
			.catch(err => {
				console.log(err);
			})
	}, []);


	function generar(){
		document.getElementById("Imprimir").style.display = 'block';
		let boton=document.getElementById("tratamientosSS")
		boton.disabled = true;
		const valortra = trata.map(tratamientos => {
			if(boton == tratamientos.NombreTratamiento)
			return (
				tratamientos.PrecioTratamiento
				
			)
		});
	}
	function AgregarAdeudo(){
		let valor =document.getElementById("tratamientosSS").value
		const valortra = trata.map(tratamientos => {
			if(valor == tratamientos.NombreTratamiento)
			return (
				tratamientos.PrecioTratamiento
				
			)
		});
		
		let valornuevo = (pacientes.Total + parseInt(valortra, 10));
		var data ={Total: valornuevo};
		dataService.update(id, data)
			.then(response => {
				console.log(response);
				if(response.status === 200){
					window.alert("Total Aumentado");
				} else {
					window.alert("Ocurrió un error al crear el registro. Codigo " + response.status + "("+ response.statusText +"). "+"Contacte con el administrador");
				}
			})
			.catch(err => {
				console.log(err);
			})
	}
	function habilitar(){
		let boton=document.getElementById("tratamientosSS")
		boton.disabled = false;
	}


	const list = trata.map(tratamientos => {
		return (
			<option>{tratamientos.NombreTratamiento}</option>
		)
	});

	return (
		<div className="home-contenido">
			<Sidebar />
			<div className="form-inputs">
			<h2>Adeudo: <spam className="Total-rojo">{pacientes.Total}</spam></h2>
			<br></br>
			<br></br>
				<Form  id="form" name="form">

					<div className="Este">

					<Label>Tratamiento</Label>
					<Input type="select" name="Tratamiento" id="tratamientosSS" disabled >
							{list}
					</Input>
					<Button className="boton-loca" onClick={AgregarAdeudo}>Agregar</Button>
					</div>
					<br/>
					<Button className="me-3" onClick={habilitar}>Cobrar tratamiento</Button>
					<Button className="me-3" onClick={function back(){window.location.href = "/AdministracionPagos"}}>Volver</Button>
					
				</Form>
				<div className="DivImprimirr" id="Imprimir">
		<div className="Receta-ver" id="divreceta">
			<img src={LogoLogin} alt="Imagen del login" className="logooo" />
			<Label for="doct" className="larec">Av Independencia 4003, Benito Juárez, 82180 Mazatlán, Sin.</Label>
			<Label for="fnomdoct" className="larec2">Recibo</Label>
			<Label for="teldoc" className="larec3">6693241323</Label>			

			<div className="receta-rec">
			<Label for="recetaeste" className="pacrece">Tratamiento:</Label>

			<br></br>
			<Label for="recetaeste" className="pacrece1" id="obse"></Label>
			</div>
			<br></br><br></br>
			</div>
			
		</div>

		</div>
			</div>
		
	)
}

export default AdministracionDoctoresAdd;