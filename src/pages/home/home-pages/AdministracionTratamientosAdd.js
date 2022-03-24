// Sánchez Plazola José Abraham
// 11/03/2022
// Componente para añadir tratamientos a la base de datos de la clinica
import React from "react";
import { Button, Label, Form, FormGroup, Col, Input} from "reactstrap";
import Sidebar from "../componentes/sidebar";
import "../home.scss";
import tratamientoDataService from "../../../services/tratamiento";

export const AdministracionTratamientosAdd = () => {
	const dataService = new tratamientoDataService();

	function save(){
		var form = document.getElementById("form");
		var data = {};

		Array.from(form.elements).forEach(element => {
			if(element.type !== "button"){
				data[element.name] = element.value;
			}
		});

		// console.log(data);

		dataService.create(data)
			.then(response => {
				console.log(response);
			})
			.catch(err => {
				console.log(err);
			})
	}

	return (
		<div className="home-contenido">
			<Sidebar />
			<div className="form-inputs">
				<Form inline id="form">
					<FormGroup row>
						<Col sm={6}>
							<Label for="nombre">Nombre</Label>
							<Input type="text" name="NombreTratamiento" id="nombreField" />
							<Label for="precio">Precio</Label>
							<Input type="number" name="PrecioTratamiento" id="precioField" />
						</Col>
					</FormGroup>
					<Button className="me-3" onClick={save}>Añadir</Button>
					<Button className="me-3" onClick={function back(){window.location.href = "/AdministracionTratamientos"}}>Volver</Button>
				</Form>
			</div>
		</div>
	)
}

export default AdministracionTratamientosAdd;