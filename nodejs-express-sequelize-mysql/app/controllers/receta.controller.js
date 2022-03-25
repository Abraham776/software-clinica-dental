const db = require("../models");
const recetafull = require("../models/receta");
const receta = db.models.receta;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
	const datos = {
		idReceta: req.body.idReceta,
		Doctor_idDoctor: req.body.Doctor_idDoctor,
		Tratamientos_idTratamientos: req.body.Tratamientos_idTratamientos,
        Paciente_idPaciente: req.body.Paciente_idPaciente

	}

	receta.create(datos)
		.then(data => {
			res.send(data);
		})
		.catch(err => {
			res.status(500).send({
				message: err.message || "Pasó un error al crear la receta"
			})
		})
};

exports.findAll = (req, res) => {
	receta.findAll()
		.then(data => {
			res.send(data);
		})
		.catch(err => {
			res.status(500).send({
				message: err.message || "Pasó un error al retirar la receta"
			});
		});
};

exports.findOne = (req, res) => {
	const id = req.params.id;
	receta.findByPk(id)
		.then(data => {
			if (data) {
				res.send(data);
			} else {
				res.status(404).send({
					message: `No se puede encontrar la receta con id=${id}`
				});
			}
		})
		.catch(err => {
			res.status(500).send({
				message: `Error retirando la receta con id=${id}`
			});
		});
};

exports.update = (req, res) => {
	const id = req.params.id;
	receta.update(req.body, {
		where: {idReceta:id}
	})
		.then(num => {
			if(num == 1) {
				res.send({
					message: "la receta fue actualizada con exito"
				});
			} else {
				res.send({
					message: `No se puede actualizar la receta con id = ${id}`
				});
			}
		})
		.catch(err => {
			res.status(500).send({
				message: `Error al actualizar la receta con id = ${id}. Error = ${err}`
			});
		})
};

exports.delete = (req, res) => {
	const id = req.params.id;
	receta.destroy({
		where: {idReceta:id}
	})
		.then(num => {
			if(num == 1){
				res.send({ 
					message: "receta fue borrado exitosamente"
				});
			} else {
				res.send({ 
					message: `No se puede borrar la receta con con id = ${id}`
				});
			}
		})
		.catch(err => {
			res.status(500).send({ 
				message: `Error al borrar la receta con id = ${id}. Error = ${err}`
			})
		})
};