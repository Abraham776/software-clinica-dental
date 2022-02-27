//	Sánchez Plazola José Abraham
//	27/02/2022
//  Componentes y driver de la función Odontograma del software

import React from 'react';
import './Odontogram.css';
import Teeth from './Teeth';

//Componente odontograma, renderiza finalmente todas las filas de dientes
function Odontogram({ data = [] }) {
	//OdontogramState recolecta el estado de cada diente del odontograma
	let odontogramState = {};

	//teethArr inicializa cada componente "Teeth" que corresponde a una fila de dientes del odontograma
	let teethArr = [];

	//handleToothUpdate es llamado cada vez que un diente se le asigna un nuevo estado, escribe a odontogramState.
	const handleToothUpdate = (id, toothState) => {
		odontogramState[id] = toothState;
	};

	//Inicializa la array de dientes dependiendo si hay datos anteriores o no
	//
	//TODO: Checar interacción con parametros por defecto, puede ser innecesaria esta inicialización condicional
	//
	if(data.length > 0) {
		teethArr = [
			<Teeth start={18} end={11} x={0} y={0} handleChange={handleToothUpdate} data={data[0]}/>,
			<Teeth start={21} end={28} x={210} y={0} handleChange={handleToothUpdate} data={data[1]}/>,

			<Teeth start={55} end={51} x={75} y={40} handleChange={handleToothUpdate} data={data[2]}/>,
			<Teeth start={61} end={65} x={210} y={40} handleChange={handleToothUpdate} data={data[3]}/>,

			<Teeth start={85} end={81} x={75} y={80} handleChange={handleToothUpdate} data={data[4]}/>,
			<Teeth start={71} end={75} x={210} y={80} handleChange={handleToothUpdate} data={data[5]}/>,

			<Teeth start={48} end={41} x={0} y={120} handleChange={handleToothUpdate} data={data[6]}/>,
			<Teeth start={31} end={38} x={210} y={120} handleChange={handleToothUpdate} data={data[7]}/>,
		];
	} else {
		teethArr = [
			<Teeth start={18} end={11} x={0} y={0} handleChange={handleToothUpdate} />,
			<Teeth start={21} end={28} x={210} y={0} handleChange={handleToothUpdate} />,

			<Teeth start={55} end={51} x={75} y={40} handleChange={handleToothUpdate} />,
			<Teeth start={61} end={65} x={210} y={40} handleChange={handleToothUpdate} />,

			<Teeth start={85} end={81} x={75} y={80} handleChange={handleToothUpdate} />,
			<Teeth start={71} end={75} x={210} y={80} handleChange={handleToothUpdate} />,

			<Teeth start={48} end={41} x={0} y={120} handleChange={handleToothUpdate} />,
			<Teeth start={31} end={38} x={210} y={120} handleChange={handleToothUpdate}/>,
		];
	}

	//Regresa el renderizado de la array de dientes
	return (
		<>
			<div className="Odontogram">
				<svg version="1.1" viewBox='-100 -100 1000 400' width="100%">
					{teethArr}
				</svg>
			</div>
		</>
	);
}

export default Odontogram;