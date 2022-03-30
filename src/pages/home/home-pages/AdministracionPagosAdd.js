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


	function abono(){
		let valor =document.getElementById("abono1").value
		if(pacientes.Total<parseInt(valor, 10)){
			window.alert("El usuario no tiene adeudo");
		}else{
			let totalnew = pacientes.Total - parseInt(valor, 10);
			var data ={Total: totalnew};
			dataService.update(id, data)
			.then(response => {
				console.log(response);
				if(response.status === 200){
					window.alert("Abonado");
				} else {
					window.alert("Ocurrió un error al crear el registro. Codigo " + response.status + "("+ response.statusText +"). "+"Contacte con el administrador");
				}
			})
			.catch(err => {
				console.log(err);
			})
			window.location.reload();
		}
		
	}
	function AgregarAdeudo(){
		let fot = 0;
		let valor =document.getElementById("tratamientosSS").value
		const valortra = trata.map(tratamientos => {
			if(valor == tratamientos.NombreTratamiento){
				
				fot= tratamientos.PrecioTratamiento;
				return (
				 fot
					)
			}
				
			
		});
		
		let valornuevo = (pacientes.Total + parseInt(fot, 10));
		console.log(valortra)
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
			window.location.reload();
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
					<Button className="boton-loca" onClick={habilitar}>Agregar</Button>
					</div>
					<br/>
					<Button className="me-3" onClick={AgregarAdeudo}>Cobrar tratamiento</Button>
					<br/> <br/>
					<Label>Abonar</Label>
					<Input type="text"  name="abono" id="abono1" pattern="[0-9]+"/>
							
					
					<Button className="abono" onClick={abono} >Abonar</Button>
					<Button className="volveto" onClick={function back(){window.location.href = "/AdministracionPagos"}}>Volver</Button>
					
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