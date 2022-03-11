import React from "react";
import './input.css';
const Input = ({ type, placeholder }) => {
	return (

		<div>
			<input type={type} placeholder={placeholder} className="regular-style" />
		</div>


	)
};


export default Input;