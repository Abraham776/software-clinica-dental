const db = require("../models");
const imagenesfull = require("../models/imagenesdia");
const imagenes = db.models.registroevolucion;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
	const datos = {
		idImagenesDia: req.body.idImagenesDia,
		ImagenesDiagro: req.body.ImagenesDiagro,
		Paciente_idPaciente: req.body.Paciente_idPaciente
	}

	imagenes.create(datos)
		.then(data => {
			res.send(data);
		})
		.catch(err => {
			res.status(500).send({
				message: err.message || "Pasó un error al crear la imagen"
			})
		})
};

exports.findAll = (req, res) => {
	imagenes.findAll()
		.then(data => {
			res.send(data);
		})
		.catch(err => {
			res.status(500).send({
				message: err.message || "Pasó un error al retirar la imagen"
			});
		});
};

exports.findOne = (req, res) => {
	const id = req.params.id;
	imagenes.findByPk(id)
		.then(data => {
			if (data) {
				res.send(data);
			} else {
				res.status(404).send({
					message: `No se puede encontrar la imagen con id=${id}`
				});
			}
		})
		.catch(err => {
			res.status(500).send({
				message: `Error retirando la imagen con id=${id}`
			});
		});
};

exports.update = (req, res) => {
	const id = req.params.id;
	imagenes.update(req.body, {
		where: {idImagenesDia:id}
	})
		.then(num => {
			if(num == 1) {
				res.send({
					message: "la imagen fue actualizada con exito"
				});
			} else {
				res.send({
					message: `No se puede actualizar la imagen con id = ${id}`
				});
			}
		})
		.catch(err => {
			res.status(500).send({
				message: `Error al actualizar el registro con id = ${id}. Error = ${err}`
			});
		})
};

exports.delete = (req, res) => {
	const id = req.params.id;
	imagenes.destroy({
		where: {idImagenesDia:id}
	})
		.then(num => {
			if(num == 1){
				res.send({ 
					message: "registro fue borrado exitosamente"
				});
			} else {
				res.send({ 
					message: `No se puede borrar la imagen con con id = ${id}`
				});
			}
		})
		.catch(err => {
			res.status(500).send({ 
				message: `Error al borrar la iamgen con id = ${id}. Error = ${err}`
			})
		})
};