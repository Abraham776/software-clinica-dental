import React, { useEffect, useState } from "react";
import "./home.scss"
import Sidebar from "./componentes/sidebar";
import { Bar, BarChart, CartesianGrid, Cell, Legend, Pie, PieChart, Tooltip, YAxis } from "recharts";
import pacientesDataService from "../../services/pacientes";
import citasDataService from "../../services/citas";
import { Grid, Paper } from "@mui/material";
import { Appointments, AppointmentTooltip, DateNavigator, MonthView, Scheduler, TodayButton, Toolbar } from "@devexpress/dx-react-scheduler-material-ui";
import { ViewState } from "@devexpress/dx-react-scheduler";

const Home = () => {

	const currentDate = new Date();
	const edadData = [];
	const sexoData = [{ "Hombres": 0, "Mujeres": 0, "Otro": 0 }];
	const citaData = [];
	const Content = (({
		children, appointmentData, ...restProps
	}) => (
		<AppointmentTooltip.Content {...restProps} appointmentData={appointmentData}>
			<Grid container alignItems="center">
				<Grid item xs={10}>
					<span>{appointmentData.location}</span>
				</Grid>
			</Grid>
		</AppointmentTooltip.Content>
	));
	const [pacientes, setPacientes] = useState([]);
	const [citas, setCitas] = useState([]);
	const PacientesDataService = new pacientesDataService();
	const CitasDataService = new citasDataService();

	useEffect(() => {
		PacientesDataService.getAll()
			.then(response => {
				setPacientes(response.data);
			})
			.catch(err => {
				console.log(err);
			});
		CitasDataService.getAll()
			.then(response => {
				setCitas(response.data);
			})
			.catch(err => {
				console.log(err);
			})
	}, []);

	citas.map(cita => {
		const obj = {};
		const date = new Date(cita.FechaCitas);
		const endDate = new Date(date.getTime() + 60 * 60000);
		obj["title"] = cita.NombreDelPacienteCitas;
		obj["location"] = cita.AnotaciónCitas;
		obj["startDate"] = date;
		obj["endDate"] = endDate;
		citaData.push(obj);
	})
	console.log(citaData);

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
			<div className="contenido-in" id="first">
				<PieChart width={200} height={250}>
					<Legend verticalAlign="bottom" />
					<Pie data={edadData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={50} label>
						{edadData.map((entry, index) => (
							<Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
						))}
					</Pie>
				</PieChart>
			</div>

			<div className="contenido-in" id="second">
				<BarChart width={730} height={250} data={sexoData}>
					<CartesianGrid strokeDasharray="3 3" />
					<YAxis label={{ value: 'Numero de pacientes', angle: -90, position: 'insideBottomLeft', offset: 20 }} />
					<Tooltip />
					<Legend />
					<Bar dataKey="Hombres" fill="#0088FE" />
					<Bar dataKey="Mujeres" fill="#00C49F" />
					<Bar dataKey="Otros" fill="#FFBB28" />
				</BarChart>
			</div>

			<div className="contenido-in">
				<Paper>
					<Scheduler
						data={citaData}
					>
						<ViewState
							defaultCurrentDate={currentDate}
						/>
						<MonthView />
						<Toolbar />
						<DateNavigator />
						<TodayButton />
						<Appointments />
						<AppointmentTooltip 
							contentComponent={Content}
						/>
					</Scheduler>
				</Paper>
			</div>
		</div>
	)
};

export default Home;