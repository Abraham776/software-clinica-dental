// Sánchez Plazola José Abraham
// 16/03/2022
// Vista de las imagenes del paciente
import React, { useEffect, useState } from "react";
import { Button, Card, CardGroup, CardImg, CardSubtitle, CardTitle } from "reactstrap";
import Sidebar from "../../componentes/sidebarP";
import "../../home.scss";
import ImagenesDataService from "../../../../services/imagenes";

const PacienteHistoImagenes = () => {
	var id = window.location.href;
	id = id.slice(id.lastIndexOf("/") + 1);


	const [imagen, setImagen] = useState([]);

	const dataService = new ImagenesDataService();

	useEffect(() => {
		dataService.getAll(id)
			.then(response => {
				setImagen(response.data);
			})
			.catch(err => {
				console.log(err);
			});
	}, []);


	function confirmAction() {
		let confirmAction = window.confirm("¿Está seguro de querer borrar este registro? Esta acción es irreversible");
		return confirmAction;
	}
	console.log(imagen);
	const list = imagen.map(imagenesdia => { 
		return (
			
	<CardGroup>
		<Card>
			<CardImg
				alt="imagen"
				src= "{data:image/jpeg;base64,${imagenesdia.ImagenesDiagro}}"
				top
				width="10%"
			/>
			<CardSubtitle>
				<Button block onClick={function ver(){ window.open("{`data:image/jpeg;base64,${imagenesdia.ImagenesDiagro}`}", "_blank")}}>Ver imagen</Button>
				<Button block color="danger" onClick={function deletePaciente() {

	let response = confirmAction();
		if(!response){
		window.alert("Acción cancelada");
		return;
	}

			dataService.delete(imagenesdia.idImagenesDia)
				.then(response => {
				console.log(response.data);

		
					let index = imagen.map(dat => {
						return dat.idImagenesDia === imagenesdia.idImagenesDia
							})
						index = index.indexOf(true);
						imagen.splice(index, 1)
						var newData = [];
						Object.assign(newData, imagen);
		
						setImagen(newData);
						window.alert("Registro borrado exitosamente");
		
						})
						.catch(e => {
						console.log(e);
						window.alert("Fallo al borrar registro");
	});
}}>Eliminar</Button>
			</CardSubtitle>
		</Card>
	</CardGroup>)})
	return (
		<div className="home-contenido">
			<Sidebar id={id}/>
			<div >
				<center><h1 className="ima-log">Imagenes del paciente</h1></center>
					<br/>
			</div>

			<div className="img-pacientee">
			
				{list}
				<br/>
				<Button onClick={function (){window.location.href = `/PacienteHistoImagenesAdd/${id}`}}>Añadir nueva imagen</Button>
			</div>
		</div>
	)
	
};

export default PacienteHistoImagenes;