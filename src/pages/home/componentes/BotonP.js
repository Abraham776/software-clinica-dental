import React from "react";
const Boton = ({ text }) => {

	function Iniciar() {
		window.location.href = "/PacienteHisto";
	};

	return (

		<div className="botnP">

			<button className="botonP" onClick={Iniciar}>
				{text}
			</button>


		</div>


	)
};


export default Boton;