const db = require("../models");
const tablaDoctor = require("../models/doctor");
const doctor = db.models.doctor;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
	const datos = {
		Estatus: req.body.Estatus,
		Contraseña: req.body.Contraseña,
		NombreDoctor: req.body.NombreDoctor,
		UsuarioDoctor: req.body.UsuarioDoctor,
		Apellidos: req.body.Apellidos
	}

	doctor.create(datos)
		.then(data => {
			res.send(data);
		})
		.catch(err => {
			res.status(500).send({
				message: err.message || "Pasó un error al crear al doctor"
			})
		})
};

exports.findAll = (req, res) => {
	doctor.findAll()
		.then(data => {
			res.send(data);
		})
		.catch(err => {
			res.status(500).send({
				message: err.message || "Pasó un error al retirar doctor"
			});
		});
};
exports.findOne = (req, res) => {
	const id = req.params.id;
	doctor.findByPk(id)
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

exports.delete = (req, res) => {
	const id = req.params.id;
	doctor.destroy({
		where: {idDoctor:id}
	})
		.then(num => {
			if(num == 1){
				res.send({ 
					message: "Doctor fue borrado exitosamente"
				});
			} else {
				res.send({ 
					message: `No se puede borrar doctor con con id = ${id}`
				});
			}
		})
		.catch(err => {
			res.status(500).send({ 
				message: `Error al borrar doctor con id = ${id}. Error = ${err}`
			})
		})
};