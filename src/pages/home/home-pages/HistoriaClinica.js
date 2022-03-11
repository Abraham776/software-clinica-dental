// Sánchez Plazola José Abraham
// 11/03/2022 Añadidos inputs

import React from "react";
import { Button, Col, Form, FormGroup, Input, Label } from "reactstrap";
import Sidebar from "../componentes/sidebar";
import "../home.scss";

const HistoriaClinica = () => {
	return (
		<div className="home-contenido">
			<Sidebar />

			<div className="form-inputs">
				{/* Inputs */}
				<Form inline>
					<FormGroup row>
						<Col sm={3}>
							<Label for="emailField">EMAIL:</Label>
							<Input type="email" name="email" id="emailField"
								placeholder="Enter your email" />
						</Col>

						<Col sm={3}>
							<Label for="passwordField">PASSWORD:</Label>
							<Input type="password" name="password"
								id="passwordField"
								placeholder="Enter your password" />
						</Col>
						
						<Col sm={3}>
							<Label for="passwordField">PASSWORD:</Label>
							<Input type="password" name="password"
								id="passwordField"
								placeholder="Enter your password" />
						</Col>
					</FormGroup>

					<Button>Submit</Button>
				</Form>
			</div>

		</div>
	)
};

export default HistoriaClinica;