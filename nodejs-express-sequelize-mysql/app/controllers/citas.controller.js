const db = require("../models");
const tablaCitas = require("../models/citas");
const citas = db.models.citas;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
	const datos = {
		AnotaciónCitas: req.body.AnotaciónCitas,
		NombreDelPacienteCitas: req.body.NombreDelPacienteCitas,
		FechaCitas: req.body.FechaCitas,
		Doctor_idDoctor: 1
	}

	citas.create(datos)
		.then(data => {
			res.send(data);
		})
		.catch(err => {
			res.status(500).send({
				message: err.message || "Pasó un error al crear la cita"
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
				message: err.message || "Pasó un error al retirar citas"
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
					message: "Cita fue actualizado con exito"
				});
			} else {
				res.send({
					message: `No se puede actualizar la cita con id = ${id}`
				});
			}
		})
		.catch(err => {
			res.status(500).send({
				message: `Error al actualizar la cita con id = ${id}. Error = ${err}`
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
					message: "Cita fue borrada exitosamente"
				});
			} else {
				res.send({ 
					message: `No se puede borrar la cita con con id = ${id}`
				});
			}
		})
		.catch(err => {
			res.status(500).send({ 
				message: `Error al borrar la cita con id = ${id}. Error = ${err}`
			})
		})
};