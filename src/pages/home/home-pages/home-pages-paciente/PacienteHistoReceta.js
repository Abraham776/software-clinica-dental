// Sánchez Plazola José Abraham
// 17/03/2022
// Vista de las recetas del paciente
import React, { useEffect, useState ,useRef }from "react";
import Sidebar from "../../componentes/sidebarP";
import "../../home.scss";
import { jsPDF } from "jspdf";
import LoadPdf from "./LoadPdf";
import { Button, Col, Form, FormGroup, Input, Label } from "reactstrap";
import tratamientoDataService from "../../../../services/tratamiento";
import pacienteDataService from "../../../../services/pacientes";
import { useReactToPrint } from "react-to-print";
import LogoLogin from "../../../../assets/img/LogoLogin.jpg"
import PacientesDataService from "../../../../services/pacientes";
import DoctorDataService from "../../../../services/doctor";

const PacienteHistoReceta = () => {
	var id = window.location.href;
	id = id.slice(id.lastIndexOf("/") + 1);
	const componentRef = useRef();

	const [doctores, setDoctores] = useState([]);
	const dataServiceDoc = new DoctorDataService();
	const [paciente, setPaciente] = useState([]);
	const dataServiceP = new PacientesDataService();


	useEffect(() => {
		
		dataServiceP.get(id)
			.then(response => {
				setPaciente(response.data);
			})
			.catch(err => {
				console.log(err);
			});			
	}, []);
	
	
	const generarPdf=()=>{
		
		dataServiceDoc.get(paciente.Doctor_idDoctor)
			.then(response => {
				setDoctores(response.data);
			})
			.catch(err => {
				console.log(err);
			})

			console.log(doctores.NombreDoctor);
		let alergia = document.getElementById("fechaField").value;
		let receta = document.getElementById("recetaField").value;
		let peso = document.getElementById("fechaField").value;
		let altura = document.getElementById("recetaField").value;
		let dis1 = document.getElementById("fechaField");
		let dis = document.getElementById("recetaField");
		document.getElementById("ale").innerHTML = alergia;
		document.getElementById("obse").innerHTML = receta;
		document.getElementById("nombrepac").innerHTML = paciente.NombrePaciente;
		document.getElementById("pesopac").innerHTML = paciente.Sexo;
		document.getElementById("alergias").innerHTML = paciente.AlergiaMedicamentoPaciente;
		document.getElementById("cel").innerHTML = doctores.NombreDoctor + doctores.Apellidos;
		document.getElementById("edad").innerHTML = paciente.Edad;
		dis1.disabled =true;
		dis.disabled =true;
		document.getElementById("Imprimir").style.display = 'block';
	}
	const actuaPdf=()=>{
		let dis1 = document.getElementById("fechaField");
		let dis = document.getElementById("recetaField");
		dis1.disabled =false;
		dis.disabled =false;
		document.getElementById("Imprimir").style.display = 'none';
	}
	function printDiv() {

		var contenido= document.getElementById("Imprimir").innerHTML;
		var contenidoOriginal= document.body.innerHTML;
   
		document.body.innerHTML = contenido;
   
		window.print();
   
		document.body.innerHTML = contenidoOriginal;
		window.location.reload(true);
   }


	return (
		<div className="home-contenido">
			<Sidebar id={id}/>
			<div className="form-inputs">
			<Form>
					<FormGroup>
						<Col sm={6}>
							<Label for="fecha">{}</Label>
							<Input type="date" name="fecha" id="fechaField" />
						</Col>
						<Label for="receta">Receta</Label>
						<Input type="textarea" name="receta" id="recetaField" />
					</FormGroup>
				</Form>
				<br />
				<Button className="me-3" onClick={generarPdf}>Generar nueva receta</Button>
				<Button className="me-3" onClick={actuaPdf}>Actualizar</Button>
				<Button className="impribot"  onClick={printDiv}>Imprimir</Button>
				
			</div>

	<div className="DivImprimir" id="Imprimir">
		<div className="Receta-ver" id="divreceta">
			<img src={LogoLogin} alt="Imagen del login" className="logooo" />
			<Label for="doct" className="larec">Av Independencia 4003, Benito Juárez, 82180 Mazatlán, Sin.</Label>
			<Label for="fnomdoct" className="larec2">Receta dental</Label>
			<Label for="teldoc" className="larec3">6693241323</Label>
			

			<center><div className="Receta-centro"><Label for="fecha" className="larec4" id="cel">DR. Victor Gomez Lizarraga</Label></div></center>


			
			<Label for="nompac" className="pac1">Nombre</Label>
			<Label for="nompac1" className="pac12" id="nombrepac">Juan pablo segundo minerva</Label>
			<Label for="pesopac" className="pac1">Genero</Label>
			<Label for="pesopac2" className="pac12" id="pesopac">64 Kg</Label>
			<Label for="alturapac2" className="pac1">Edad</Label>
			<Label for="alturapac" className="pac12" id="edad">1.72</Label>
			<Label for="fecha" className="pac1">Fecha</Label>
			<Label for="fechaac" className="pac12" id="ale"></Label>

			<div className="Receta-borde">
			<Label for="alergias" className="pac11">Alergias:</Label>

			<br></br>
			<Label for="alergiaspac" className="pac112" id="alergias">paracetamol,cronofobosis,hola, como, estas</Label>
			</div>
			<div className="receta-rec">
			<Label for="recetaeste" className="pacrece">Receta:</Label>

			<br></br>
			<Label for="recetaeste" className="pacrece1" id="obse"></Label>
			</div>
			</div>

		</div>

		</div>
	)
};

export default PacienteHistoReceta;