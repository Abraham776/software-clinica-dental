const db = require("../models");
const tratamientoTabla = require("../models/tratamientos");
const tratamiento = db.models.tratamientos;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
	const datos = {
		idTratamientos: req.body.idTratamientos,
		NombreTratamiento: req.body.NombreTratamiento,
		PrecioTratamiento: req.body.PrecioTratamiento,
		Doctor_idDoctor: 1,
	}

	tratamiento.create(datos)
		.then(data => {
			res.send(data);
		})
		.catch(err => {
			res.status(500).send({
				message: err.message || "Pasó un error al crear el tratamiento"
			})
		})
};

exports.findAll = (req, res) => {
	tratamiento.findAll()
		.then(data => {
			res.send(data);
		})
		.catch(err => {
			res.status(500).send({
				message: err.message || "Pasó un error al retirar tratamiento"
			});
		});
};

exports.findOne = (req, res) => {
	const id = req.params.id;
	tratamiento.findByPk(id)
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
	tratamiento.update(req.body, {
		where: {idTratamientos:id}
	})
		.then(num => {
			if(num == 1) {
				res.send({
					message: "tratamiento fue actualizado con exito"
				});
			} else {
				res.send({
					message: `No se puede actualizar el tratamiento con id = ${id}`
				});
			}
		})
		.catch(err => {
			res.status(500).send({
				message: `Error al actualizar el tratamiento con id = ${id}. Error = ${err}`
			});
		})
};

exports.delete = (req, res) => {
	const id = req.params.id;
	tratamiento.destroy({
		where: {idTratamientos:id}
	})
		.then(num => {
			if(num == 1){
				res.send({ 
					message: "tratamiento fue borrado exitosamente"
				});
			} else {
				res.send({ 
					message: `No se puede borrar el tratamiento con con id = ${id}`
				});
			}
		})
		.catch(err => {
			res.status(500).send({ 
				message: `Error al borrar el tratamiento con id = ${id}. Error = ${err}`
			})
		})
};