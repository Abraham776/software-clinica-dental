const db = require("../models");
const evolucionfull = require("../models/registroevolucion");
const evolucion = db.models.registroevolucion;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
	const datos = {
		idRegistroEvolucion: req.body.idRegistroEvolucion,
		ObservacionesRegistro: req.body.ObservacionesRegistro,
		FechaRegistro: req.body.FechaRegistro,
        Tratamiento: req.body.Tratamiento,
        Paciente_idPaciente: req.body.Paciente_idPaciente
	}

	evolucion.create(datos)
		.then(data => {
			res.send(data);
		})
		.catch(err => {
			res.status(500).send({
				message: err.message || "Pasó un error al crear el registro"
			})
		})
};

exports.findAll = (req, res) => {
	evolucion.findAll()
		.then(data => {
			res.send(data);
		})
		.catch(err => {
			res.status(500).send({
				message: err.message || "Pasó un error al retirar el registro"
			});
		});
};

exports.findOne = (req, res) => {
	const id = req.params.id;
	evolucion.findByPk(id)
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
	evolucion.update(req.body, {
		where: {idRegistroEvolucion:id}
	})
		.then(num => {
			if(num == 1) {
				res.send({
					message: "registro fue actualizado con exito"
				});
			} else {
				res.send({
					message: `No se puede actualizar el registro con id = ${id}`
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
	evolucion.destroy({
		where: {idRegistroEvolucion:id}
	})
		.then(num => {
			if(num == 1){
				res.send({ 
					message: "registro fue borrad0 exitosamente"
				});
			} else {
				res.send({ 
					message: `No se puede borrar el registro con con id = ${id}`
				});
			}
		})
		.catch(err => {
			res.status(500).send({ 
				message: `Error al borrar el registro con id = ${id}. Error = ${err}`
			})
		})
};