import React, { useEffect, useState } from "react";
import { Button } from "reactstrap";
import Sidebar from "../componentes/sidebar";
import "../home.scss";
import pacientesDataService from "../../../services/pacientes";
import { Bar, BarChart, CartesianGrid, Cell, Legend, Pie, PieChart, Tooltip, YAxis } from "recharts";


const Administracion = () => {
	const edadData = [];
	const sexoData = [{ "Hombres": 0, "Mujeres": 0, "Otro": 0 }];
	const [pacientes, setPacientes] = useState([]);
	const PacientesDataService = new pacientesDataService();
	useEffect(() => {
		PacientesDataService.getAll()
			.then(response => {
				setPacientes(response.data);
			})
			.catch(err => {
				console.log(err);
			});	
	}, []);
	pacientes.map(paciente => {
		switch (paciente.Sexo) {
			case "Masculino":
				sexoData[0]["Hombres"]++;
				break;

			case "Femenino":
				sexoData[0]["Mujeres"]++;
				break;

			case "Otro":
				sexoData[0]["Otro"]++;
				break;

			default:
				break;
		}
		const index = edadData.findIndex((e) => e.name === paciente.Edad + " años");
		if (index != -1) {
			edadData[index].value++;
		} else {
			edadData.push({ name: paciente.Edad + " años", value: 1 });
		}
	});

	const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
	return (
		<div className="home-contenido">
			<Sidebar />


			<div className="separar">
			<div className="circulo" id="first">
				<PieChart width={200} height={250}>
					<Legend verticalAlign="bottom" />
					<Pie data={edadData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={50} label>
						{edadData.map((entry, index) => (
							<Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
						))}
					</Pie>
				</PieChart>
			</div>
			
			<div className="barras" id="second">
			
				<BarChart width={330} height={250} data={sexoData}>
					<CartesianGrid strokeDasharray="3 3" />
					<YAxis label={{ value: 'Numero de pacientes', angle: -90, position: 'insideBottomLeft', offset: 20 }} />
					<Tooltip />
					<Legend />
					<Bar dataKey="Hombres" fill="#0088FE" />
					<Bar dataKey="Mujeres" fill="#00C49F" />
					<Bar dataKey="Otros" fill="#FFBB28" />
				</BarChart>
			</div>
			


			
			<div className="botonesAd">
				<Button block size="lg" onClick={function change(){window.location.href = "./administraciontratamientos";}}>Tratamientos</Button>
				<br/>
				<Button block size="lg" onClick={function change(){window.location.href = "./AdministracionDoctores";}}>Doctores</Button>
				<br/>
				<Button block size="lg" onClick={function change(){window.location.href = "./administracionpagos";}}>Pagos</Button>
			</div>
			
			</div>
		</div>
	)
};

export default Administracion;