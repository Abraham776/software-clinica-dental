// Sánchez Plazola José Abraham
// 11/03/2022
// Componente para editar tratamientos de la base de datos de la clinica

import React, { useEffect, useState } from "react";
import { Button, Label, Form, FormGroup, Col, Input } from "reactstrap";
import Sidebar from "../componentes/sidebar";
import "../home.scss";
import tratamientoDataService from "../../../services/tratamiento";

const AdministracionTratamientosVista = () => {
	var id = window.location.href;
	id = id.slice(id.lastIndexOf("/") + 1);

	const [tratamiento, setTratamiento] = useState([]);
	const dataService = new tratamientoDataService();

	useEffect(() => {
		dataService.get(id)
			.then(response => {
				setTratamiento(response.data);
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
	}

	return (
		<div className="home-contenido">
			<Sidebar />
			<div className="form-inputs">
				<Form inline id="form">
					<FormGroup row>
						<Col sm={6}>
							<Label for="nombre">Nombre</Label>
							<Input type="text" name="NombreTratamiento" id="nombreField" value={tratamiento.NombreTratamiento} onChange={(function onChange(e){
								const NombreTratamiento = e.target.value;
								setTratamiento(function(prevState){
									return {
										...prevState.tratamiento,
										NombreTratamiento: NombreTratamiento,
									}
								})
							})}/>
							<Label for="precio">Precio</Label>
							<Input type="text" name="PrecioTratamiento" id="precioField" value={tratamiento.PrecioTratamiento} onChange={(function onChange(e){
								const PrecioTratamiento = e.target.value;
								setTratamiento(function(prevState){
									return {
										...prevState.tratamiento,
										PrecioTratamiento: PrecioTratamiento,
									}
								})
							})}/>
						</Col>
					</FormGroup>
					<Button className="me-3" onClick={update}>Actualizar</Button>
					<Button className="me-3" onClick={function back(){window.location.href = "/AdministracionTratamientos"}}>Volver</Button>
				</Form>
			</div>
		</div>
	)
}

export default AdministracionTratamientosVista;