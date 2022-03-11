import React from "react";
import "./label.css"

const Label = ({ text }) => {
	return (
		<div>


			<label className="font">
				{text}
			</label>

		</div>


	)
};


export default Label;