import React from 'react';
import './titulo.css';
const Titulo = ({ text }) => {

	return (
		<div className='titulo-contenido'>
			<label className='titulo-label'>{text}</label>
		</div>
	)
};

export default Titulo;