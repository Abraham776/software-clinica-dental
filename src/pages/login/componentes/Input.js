import React from "react";
import './input.css';
const Input = ({ type, placeholder, name }) => {
	return (

		<div>
			<input type={type} placeholder={placeholder} className="regular-style" name={name}/>
		</div>


	)
};


export default Input;