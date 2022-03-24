const db = require("../models");
const tablaCitas = require("../models/odontograma");
const citas = db.models.odontograma;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
	const datos = {
		idOdontograma: req.body.idOdontograma,
		JsonOdontograma: req.body.JsonOdontograma,
		Paciente_idPaciente: req.body.Paciente_idPaciente,
        Doctor_idDoctor: 1
	}

	citas.create(datos)
		.then(data => {
			res.send(data);
		})
		.catch(err => {
			res.status(500).send({
				message: err.message || "Pasó un error al crear el odontograma"
			})
		})
};

exports.findAll = (req, res) => {
	citas.findAll()
		.then(data => {
			res.send(data);
		})
		.catch(err => {
			res.status(500).send({
				message: err.message || "Pasó un error al retirar el odontograma"
			});
		});
};

exports.findOne = (req, res) => {
	const id = req.params.id;
	citas.findByPk(id)
		.then(data => {
			if (data) {
				res.send(data);
			} else {
				res.status(404).send({
					message: `No se puede encontrar registro con id=${id}`
				});
			}
		})
		.catch(err => {
			res.status(500).send({
				message: `Error retirando registro con id=${id}`
			});
		});
};

exports.update = (req, res) => {
	const id = req.params.id;
	citas.update(req.body, {
		where: {idCitas:id}
	})
		.then(num => {
			if(num == 1) {
				res.send({
					message: "odontograma fue actualizado con exito"
				});
			} else {
				res.send({
					message: `No se puede actualizar el odonntograma con id = ${id}`
				});
			}
		})
		.catch(err => {
			res.status(500).send({
				message: `Error al actualizar el odontograma con id = ${id}. Error = ${err}`
			});
		})
};

exports.delete = (req, res) => {
	const id = req.params.id;
	citas.destroy({
		where: {idPaciente:id}
	})
		.then(num => {
			if(num == 1){
				res.send({ 
					message: "odontograma fue borrad0 exitosamente"
				});
			} else {
				res.send({ 
					message: `No se puede borrar el odontograma con con id = ${id}`
				});
			}
		})
		.catch(err => {
			res.status(500).send({ 
				message: `Error al borrar el odontograma con id = ${id}. Error = ${err}`
			})
		})
};