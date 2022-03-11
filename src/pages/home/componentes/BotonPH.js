import React from "react";
import './botonh.css';
const Boton = ({ text }) => {

	function Iniciar() {
		window.location.href = "/Home";
	};

	return (

		<div className="botnH">

			<button className="botonH" onClick={Iniciar}>
				{text}
			</button>


		</div>


	)
};


export default Boton;