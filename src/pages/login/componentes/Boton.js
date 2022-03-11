import React from "react";
import './boton.css';
const Boton = ({ text }) => {

	function Iniciar() {
		window.location.href = "/home";
	};

	return (

		<div className="botn">

			<button className="botonLo" onClick={Iniciar}>{text}</button>


		</div>


	)
};


export default Boton;