import React, {useState} from 'react';
import './Odontogram.css';
import Teeth from './Teeth';

function Odontogram({ data = [] }) {
	let odontogramState = {};
	let teethArr = [];

	console.log(data);

	const handleToothUpdate = (id, toothState) => {
		odontogramState[id] = toothState;
	};

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