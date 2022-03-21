import React from "react";
import Sidebar from "../../componentes/sidebarP";
import "../../home.scss";
import Odontogram from './comunes/Odontograma/Odontogram';

const PacienteHistoOdonto = () => {
	var id = window.location.href;
	id = id.slice(id.lastIndexOf("/") + 1);
	const string = `{
        "16": {
            "Cavities": {
                "center": 0,
                "top": 0,
                "bottom": 0,
                "left": 0,
                "right": 0
            },
            "Extract": 0,
            "Crown": 0,
            "Filter": 0,
            "Fracture": 2
        },
        "17": {
            "Cavities": {
                "center": 2,
                "top": 2,
                "bottom": 2,
                "left": 2,
                "right": 2
            },
            "Extract": 0,
            "Crown": 0,
            "Filter": 0,
            "Fracture": 0
        }
    }`

	//	Función para separar los datos cargados en las filas de dientes del odontograma
	// 	data: JSON con keys iguales a los numeros de cada diente y valores de caries y otras operaciones del dentista
	// 	Regresa una array donde se concentran cada fila de dientes con sus objetos correspondientes
	function separateData(data) {
		//Inicializando objetos de cada fila
		let row1 = {};
		var row2 = {};
		var row3 = {};
		var row4 = {};
		var row5 = {};
		var row6 = {};
		var row7 = {};
		var row8 = {};

		//Iterando a través del JSON data para extraer la información y separarla en las filas de dientes correspondientes
		Object.keys(data).forEach((key) => {
			//Parse a integer del número de la llave en string
			// "16" => 16
			let keyNumber = parseInt(key, 10);

			if (18 >= keyNumber && keyNumber >= 11) {
				row1[key] = data[key];

			} else if (28 >= keyNumber && keyNumber >= 21) {
				row2[key] = data[key];

			} else if (55 >= keyNumber && keyNumber >= 51) {
				row3[key] = data[key];

			} else if (65 >= keyNumber && keyNumber >= 51) {
				row4[key] = data[key];

			} else if (85 >= keyNumber && keyNumber >= 81) {
				row5[key] = data[key];

			} else if (75 >= keyNumber && keyNumber >= 71) {
				row6[key] = data[key];

			} else if (48 >= keyNumber && keyNumber >= 41) {
				row7[key] = data[key];

			} else if (38 >= keyNumber && keyNumber >= 31) {
				row8[key] = data[key];

			}
		})

		//Array final de las filas completas
		var rows = [row1, row2, row3, row4, row5, row6, row7, row8]
		return rows;
	}


	return (
		<div className="home-contenido">
			<Sidebar id = {id}/>
			<div className="contenido-in">

			</div>
			<Odontogram data={separateData(JSON.parse(string))} />
		</div>
	)
};

export default PacienteHistoOdonto;