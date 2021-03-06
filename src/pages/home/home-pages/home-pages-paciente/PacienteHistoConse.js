// Sánchez Plazola José Abraham
// 16/03/2022
// Vista del pdf de consentimiento
import React, { useRef } from "react";
import Sidebar from "../../componentes/sidebarP";
import "../../home.scss";
import LoadPdf from "./LoadPdf";
import { Button, Col, Form, FormGroup, Input, Label } from "reactstrap";
import ConsentimientoInformado from "./ConsentimientoInformado.pdf";
import { useReactToPrint } from "react-to-print";
import ConseDataService from "../../../../services/consentimiento";

const PacienteHistoConse = () => {
	var id = window.location.href;
	id = id.slice(id.lastIndexOf("/") + 1);
	const componentRef = useRef();
	const handlePrint = useReactToPrint({
		content: () => componentRef.current
	});

	return (
		<div className="home-contenido">
			
			<Sidebar id={id}/>
			<div className="form-inputs">
			<div>
			<center><h1 className="ima-logggg">Consentimiento</h1></center>
			<br/><br/>
			</div>
			<Button
					onClick={handlePrint}
				>
					Imprimir consentimiento
				</Button>
				<Form inline name="form" id="form">
					<FormGroup row>
						<Col sm={6}>
						</Col>
					</FormGroup>
				</Form>
				<LoadPdf pdf={ConsentimientoInformado} ref={componentRef} />
			</div>
		</div>
	)
};

export default PacienteHistoConse;
