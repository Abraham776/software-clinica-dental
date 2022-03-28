const db = require("../models");
const historial5pa = require("../models/historialodontologiageneral");
const historial5 = db.models.historialodontologiageneral;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
	const datos = {
        FechaGeneralOd: req.body.FechaGeneralOd,
        MotivoConsultaGeneral: req.body.MotivoConsultaGeneral,
        AntecedentesMedicos: req.body.AntecedentesMedicos,
        AnomaliasGeneral: req.body.AnomaliasGeneral,
        DoloresGeneral: req.body.DoloresGeneral,
        HigieneBucalGeneral: req.body.HigieneBucalGeneral,
        SarroGeneral: req.body.SarroGeneral,
        EnfermedadesPerioGeneral: req.body.EnfermedadesPerioGeneral,
        Diagnostico: req.body.Diagnostico,
        TratamientoGeneral: req.body.TratamientoGeneral,
        ObservacionesGenerales: req.body.ObservacionesGenerales,
        PronosticoGeneral: req.body.PronosticoGeneral,
        Paciente_idPaciente: req.body.Paciente_idPaciente

	}

	historial5.create(datos)
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
	historial5.findAll(
        {
			where: {Paciente_idPaciente: req.params.id}
		}

    )
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
	historial5.findByPk(id)
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
	historial5.update(req.body, {
		where: {idHistorialOdontologiaGeneral:id}
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
	historial5.destroy({
		where: {idHistorialOdontologiaGeneral:id}
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