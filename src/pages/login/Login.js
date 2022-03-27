import React, { useEffect, useState } from "react";
import Titulo from "./componentes/Titulo";
import Label from "./componentes/Label";
import Input from "./componentes/Input";
import Boton from "./componentes/Boton";
import Logo from "./componentes/Logo";
import './componentes/boton.css';
import "./login.css";
import doctorDataService from "../../services/doctor";
import { Button, Form } from "reactstrap";

const Login = () => {
	const dataService = new doctorDataService();
	const [doctores, setDoctores] = new useState([]);

	useEffect(() => {
		dataService.getAll()
			.then(response => {
				setDoctores(response.data);
			})
			.catch(err => {
				console.log(err);
			});
	}, []);

	function login() {
		let logOn = false;
		var form = document.getElementById("form");
		var data = {};
		Array.from(form.elements).forEach(element => {
			if (element.type !== "button") {
				data[element.name] = element.value;
			}
		});

		doctores.map(doctor => {
			if(data.UsuarioDoctor === doctor.UsuarioDoctor && data.Contraseña === doctor.Contraseña){
				window.alert("Bienvenido, Dr. " + doctor.NombreDoctor + " " + doctor.Apellidos);
				window.location.href = "/Home"
				logOn = true;
			}
		});
		if(!logOn){
			window.alert("Combinación de nombre y contraseña incorrectos, intente de nuevo");
		}
	}

	return (
		<div className="login-contenido">
			<div className="login-cuadro">
				<Logo />
				<Titulo text='Inicio de sesion' />
				<Form id="form">
					<Label text='Usuario' />
					<Input type="text" name="UsuarioDoctor"  placeholder="Ingrese su usuario" />
					<Label text='Contraseña' />
					<Input type="password" name="Contraseña" placeholder="Ingrese su contraseña"  />


				</Form>
				<div className="Submit-boton">
					<div className="botn">
						<button className="botonLo" onClick={login}>Iniciar</button>
					</div>
				</div>

				<br />
			</div>
		</div>

	)


};

export default Login;