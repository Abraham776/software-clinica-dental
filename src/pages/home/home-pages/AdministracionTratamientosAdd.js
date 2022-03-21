// Sánchez Plazola José Abraham
// 11/03/2022
// Componente para añadir tratamientos a la base de datos de la clinica
import React from "react";
import { Button, Label, Form, FormGroup, Col, Input} from "reactstrap";
import Sidebar from "../componentes/sidebar";
import "../home.scss";

export const AdministracionTratamientosAdd = () => {
	return (
		<div className="home-contenido">
			<Sidebar />
			<div className="form-inputs">
				<Form inline>
					<FormGroup row>
						<Col sm={6}>
							<Label for="nombre">Nombre</Label>
							<Input type="text" name="nombre" id="nombreField" />
							<Label for="precio">Precio</Label>
							<Input type="text" name="precio" id="precioField" />
						</Col>
					</FormGroup>
					<Button className="me-3">Añadir</Button>
					<Button className="me-3" onClick={function back(){window.location.href = "/AdministracionTratamientos"}}>Volver</Button>
				</Form>
			</div>
		</div>
	)
}

export default AdministracionTratamientosAdd;