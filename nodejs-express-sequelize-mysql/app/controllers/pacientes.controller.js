const db = require("../models");
const paciente = require("../models/paciente");
const pacientes = db.models.paciente;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
	const datos = {
		AlergiaMedicamentoPaciente: req.body.AlergiaMedicamentoPaciente,
		CelularPaciente: req.body.CelularPaciente,
		CiudadPaciente: req.body.CiudadPaciente,
		CodigoPostalPaciente: req.body.CodigoPostalPaciente,
		CorreoPaciente: req.body.CorreoPaciente,
		DireccionPaciente: req.body.DireccionPaciente,
		Edad: req.body.Edad,
		EstadoCivilPaciente: req.body.EstadoCivilPaciente,
		FechaNacimientoPaciente: req.body.FechaNacimientoPaciente,
		FotoPaciente: req.body.FotoPaciente,
		LugarNacimientoPaciente: req.body.LugarNacimientoPaciente,
		NombrePaciente: req.body.NombrePaciente,
		OcupacionPaciente: req.body.OcupacionPaciente,
		Procedencia: req.body.Procedencia,
		Sexo: req.body.Sexo,
		TelefonoFijoPaciente: req.body.TelefonoFijoPaciente,
		Doctor_idDoctor: 1
	}

	pacientes.create(datos)
		.then(data => {
			res.send(data);
		})
		.catch(err => {
			res.status(500).send({
				message: err.message || `Pasó un error al crear el paciente. Err=${err}`
			})
		})
};

exports.findAll = (req, res) => {
	pacientes.findAll()
		.then(data => {
			res.send(data);
		})
		.catch(err => {
			res.status(500).send({
				message: err.message || "Pasó un error al retirar pacientes"
			});
		});
};

exports.findOne = (req, res) => {
	const id = req.params.id;
	pacientes.findByPk(id)
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
	pacientes.update(req.body, {
		where: {idPaciente:id}
	})
		.then(num => {
			if(num == 1) {
				res.send({
					message: "Paciente fue actualizado con exito"
				});
			} else {
				res.send({
					message: `No se puede actualizar el paciente con id = ${id}`
				});
			}
		})
		.catch(err => {
			res.status(500).send({
				message: `Error al actualizar el paciente con id = ${id}. Error = ${err}`
			});
		})
};

exports.delete = (req, res) => {
	const id = req.params.id;
	pacientes.destroy({
		where: {idPaciente:id}
	})
		.then(num => {
			if(num == 1){
				res.send({ 
					message: "Paciente fue borrado exitosamente"
				});
			} else {
				res.send({ 
					message: `No se puede borrar el paciente con con id = ${id}`
				});
			}
		})
		.catch(err => {
			res.status(500).send({ 
				message: `Error al borrar el paciente con id = ${id}. Error = ${err}`
			})
		})
};