// Sánchez Plazola José Abraham
// 16/03/2022
// Vista de las imagenes del paciente
import React from "react";
import { Button, Card, CardGroup, CardImg, CardSubtitle, CardTitle } from "reactstrap";
import Sidebar from "../../componentes/sidebarP";
import "../../home.scss";

const PacienteHistoImagenes = () => {
	var id = window.location.href;
	id = id.slice(id.lastIndexOf("/") + 1);
	return (
		<div className="home-contenido">
			<Sidebar id={id}/>
			<div className="img-paciente">
				<CardGroup>
					<Card>
						<CardImg
							alt="imagen"
							src="https://www.caballerodentalclinic.com/wp-content/uploads/2018/05/radiografia-periapical.png"
							top
							width="10%"
						/>
						<CardSubtitle>
							<Button block onClick={function ver(){ window.open("https://www.caballerodentalclinic.com/wp-content/uploads/2018/05/radiografia-periapical.png", "_blank")}}>Ver imagen</Button>
						</CardSubtitle>
					</Card>
				</CardGroup>
				<br/>
				<Button onClick={function (){window.location.href = `/PacienteHistoImagenesAdd/${id}`}}>Añadir nueva imagen</Button>
			</div>
		</div>
	)
};

export default PacienteHistoImagenes;