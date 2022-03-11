//	Sánchez Plazola José Abraham
//	27/02/2022
//  Componentes y driver de la función Odontograma del software
import React from 'react';
import Tooth from './Tooth';

//Componente dientes, maneja cada fila de dientes del odontograma e inicializa sus dientes dependientes
function Teeth({ start, end, x, y, handleChange, data = {} }) {
	//Inicializa una array para colocar los números de diente de acuerdo al odontograma
	let tooths = getArray(start, end);

	//Regresa cada componente diente como una tag svg con un escalado de 2.
	return (
		<g transform="scale(1.8)" id="gmain">
			{
				tooths.map((i) =>
					<Tooth
						onChange={handleChange}
						key={i}
						number={i}
						positionY={y}
						positionX={Math.abs((i - start) * 25) + x}
						initialState={data[i]}
					/>
				)
			}
		</g>
	)
}

//Dependiendo del ordenamiento (Los odontogramas siguen un orden especifico) obtiene una array normal o una array inversa (De mayor a menor o de menor a mayor)
function getArray(start, end) {
	if (start > end) return getInverseArray(start, end);

	let list = [];
	for (var i = start; i <= end; i++) {
		list.push(i);
	}

	return list;
}

function getInverseArray(start, end) {
	let list = [];

	for (var i = start; i >= end; i--) {
		list.push(i);
	}

	return list;
}

export default Teeth;