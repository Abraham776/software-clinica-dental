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
	

	
		

	return (
		<div className="home-contenido">
			<Sidebar />
			
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