import React from 'react';
import ReactDOM from 'react-dom';
import Odontogram from './Components/Odontogram'
import TestMenu from './Components/TestMenu'

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

function separateData(data) {
	let row1 = {};
	var row2 = {};
	var row3 = {};
	var row4 = {};
	var row5 = {};
	var row6 = {};
	var row7 = {};
	var row8 = {};
	Object.keys(data).forEach((key) => {
		let keyNumber = parseInt(key, 10);

		if(18 >= keyNumber && keyNumber >= 11){
			row1[key] = data[key];

		} else if(28 >= keyNumber && keyNumber >= 21) {
			row2[key] = data[key];

		} else if(55 >= keyNumber && keyNumber >= 51) {
			row3[key] = data[key];

		} else if(65 >= keyNumber && keyNumber >= 51) {
			row4[key] = data[key];

		} else if(85 >= keyNumber && keyNumber >= 81) {
			row5[key] = data[key];

		} else if(75 >= keyNumber && keyNumber >= 71) {
			row6[key] = data[key];

		} else if(48 >= keyNumber && keyNumber >= 41) {
			row7[key] = data[key];

		} else if(38 >= keyNumber && keyNumber >= 31){
			row8[key] = data[key];

		}
		
		// console.log(rows);
	})
	var rows = [row1, row2, row3, row4, row5, row6, row7, row8]
	return rows;
}

// let jason = JSON.parse(string);
// console.log(jason);
// console.log( separateData(jason) );

// let a = { "16":jason["16"] };
// let c = { "17":jason["17"] };
// a = {...a, ...c};
// console.log(a);

// let b = [];
// Object.keys(jason).forEach(
// 	(key) => {
// 		a[key] = jason[key];
// 		console.log(parseInt(key, 10));
// 		// b[parseInt(key, 10)] = jason[key];
// 	}
// );
// b = [a, c];
// console.log(b);


ReactDOM.render(
	<React.StrictMode>
		<Odontogram data = {separateData(JSON.parse(string))}/>
	</React.StrictMode>,
	document.getElementById('root')
);
