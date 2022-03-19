import React from "react";
import "./home.scss"
import Sidebar from "./componentes/sidebar";
import { Bar, BarChart, CartesianAxis, CartesianGrid, Cell, Label, Legend, Pie, PieChart, Tooltip, XAxis, YAxis } from "recharts";
const Home = () => {

	const data01 = [
		{
			"name": "17 años",
			"value": 11
		},
		{
			"name": "18 años",
			"value": 14
		},
		{
			"name": "31 años",
			"value": 15
		},
		{
			"name": "25 años",
			"value": 32
		}
	];
	const data = [
		{
			"Hombres": 11,
			"Mujeres": 24,
			"Otros": 5
		},
	];

	const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

	return (
		<div className="home-contenido">
			<Sidebar />
			<div className="contenido-in">
				Edades de los pacientes
			</div>
			<div className="contenido-in" id="first">
				<PieChart width={200} height={250}>
					<Legend verticalAlign="bottom" />
					<Pie data={data01} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={50} label>
						{data01.map((entry, index) => (
							<Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
						))}
					</Pie>
				</PieChart>
			</div>

			<div className="contenido-in" id="second">
				<BarChart width={730} height={250} data={data}>
					<CartesianGrid strokeDasharray="3 3" />
					<YAxis label={{ value: 'Numero de pacientes', angle: -90, position: 'insideBottomLeft', offset: 20 }}/>
					<Tooltip />
					<Legend />
					<Bar dataKey="Hombres" fill="#0088FE" />
					<Bar dataKey="Mujeres" fill="#00C49F" />
					<Bar dataKey="Otros" fill="#FFBB28" />
				</BarChart>
			</div>
		</div>
	)
};

export default Home;