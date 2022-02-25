import React from 'react';
import './Odontogram.css';
import Teeth from './Teeth';

function Odontogram() {
	let odontogramState = {};

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

	const handleToothUpdate = (id, toothState) => {
		odontogramState[id] = toothState;
	};

	const handlePrint = () => {
		console.log(odontogramState);
		// console.log(JSON.stringify(odontogramState, null, 2));
	};

	const handleUpdate = () => {
		odontogramState = JSON.parse(string);
		odontogramState.map( (i) => {})
		handleToothUpdate();
	}

	return (
		<>
			<div className="Odontogram">
				<svg version="1.1" viewBox='-100 -100 1000 400' width="100%">
					<Teeth start={18} end={11} x={0} y={0} handleChange={handleToothUpdate} />
					<Teeth start={21} end={28} x={210} y={0} handleChange={handleToothUpdate} />

					<Teeth start={55} end={51} x={75} y={40} handleChange={handleToothUpdate} />
					<Teeth start={61} end={65} x={210} y={40} handleChange={handleToothUpdate} />

					<Teeth start={85} end={81} x={75} y={80} handleChange={handleToothUpdate} />
					<Teeth start={71} end={75} x={210} y={80} handleChange={handleToothUpdate} />

					<Teeth start={48} end={41} x={0} y={120} handleChange={handleToothUpdate} />
					<Teeth start={31} end={38} x={210} y={120} handleChange={handleToothUpdate} />
				</svg>
			</div>

			<button onClick={handlePrint}>Imprimir odontograma a consola</button>
			<button onClick={handleUpdate}>Actualizar</button>
		</>
	);
}

export default Odontogram;