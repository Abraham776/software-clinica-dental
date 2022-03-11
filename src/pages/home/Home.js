import React from "react";
import "./home.scss"
import Sidebar from "./componentes/sidebar";
const Home = () => {
	return (
		<div className="home-contenido">
			<Sidebar />
			<div className="contenido-in">
				Hola
			</div>
		</div>
	)
};

export default Home;