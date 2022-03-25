const db = require("../models");
const consefull = require("../models/consentimientopaciente");
const consentimientopaciente = db.models.consentimientopaciente;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
	const datos = {
		idConcentimientoPaciente: req.body.idConcentimientoPaciente,
		Ruta: req.body.Ruta,
		Paciente_idPaciente: req.body.Paciente_idPaciente

	}

	consentimientopaciente.create(datos)
		.then(data => {
			res.send(data);
		})
		.catch(err => {
			res.status(500).send({
				message: err.message || "Pasó un error al crear el consentimiento"
			})
		})
};

exports.findAll = (req, res) => {
	consentimientopaciente.findAll(
		{
			where: {Paciente_idPaciente: req.params.id}
		}
	)
		.then(data => {
			res.send(data);
		})
		.catch(err => {
			res.status(500).send({
				message: err.message || "Pasó un error al retirar el consentimiento"
			});
		});
};

exports.findOne = (req, res) => {
	const id = req.params.id;
	consentimientopaciente.findByPk(id)
		.then(data => {
			if (data) {
				res.send(data);
			} else {
				res.status(404).send({
					message: `No se puede encontrar el consentimiento con id=${id}`
				});
			}
		})
		.catch(err => {
			res.status(500).send({
				message: `Error retirando el consentimiento con id=${id}`
			});
		});
};

exports.update = (req, res) => {
	const id = req.params.id;
	consentimientopaciente.update(req.body, {
		where: {idReceta:id}
	})
		.then(num => {
			if(num == 1) {
				res.send({
					message: "el consentimiento fue actualizada con exito"
				});
			} else {
				res.send({
					message: `No se puede actualizar el consentimiento con id = ${id}`
				});
			}
		})
		.catch(err => {
			res.status(500).send({
				message: `Error al actualizar el consentimiento con id = ${id}. Error = ${err}`
			});
		})
};

exports.delete = (req, res) => {
	const id = req.params.id;
	consentimientopaciente.destroy({
		where: {idReceta:id}
	})
		.then(num => {
			if(num == 1){
				res.send({ 
					message: "consentimiento fue borrado exitosamente"
				});
			} else {
				res.send({ 
					message: `No se puede borrar el consentimiento con con id = ${id}`
				});
			}
		})
		.catch(err => {
			res.status(500).send({ 
				message: `Error al borrar el consentimiento con id = ${id}. Error = ${err}`
			})
		})
};