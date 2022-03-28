const db = require("../models");
const historial1pa = require("../models/historialrehabilitacionoral");
const historial1 = db.models.historialrehabilitacionoral;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
	const datos = {
		MotivoConsultaRehabilitacion: req.body.MotivoConsultaRehabilitacion,
        HabitosRehabilitacion: req.body.HabitosRehabilitacion,
        InfeccionesRehabilitacion: req.body.InfeccionesRehabilitacion,
        EnfermedadesEruptivas:   req.body.EnfermedadesEruptivas,
        EnfermedadesSistematicas: req.body.EnfermedadesSistematicas,
        Transfusiones: req.body.Transfusiones,
        AlergiasRehabilitacion: req.body.AlergiasRehabilitacion,
        OtrosReahbilitaciones: req.body.OtrosReahbilitaciones,
        MovimientoDeAperturaMandibula: req.body.MovimientoDeAperturaMandibula,
        MovimientoDeCierreMandibula: req.body.MovimientoDeCierreMandibula,
        HipertrofiaMuscular: req.body.HipertrofiaMuscular,
        MovimientoLateralDerecho: req.body.MovimientoLateralDerecho,
        MovimientoLateralIzquierdo: req.body.MovimientoLateralIzquierdo,
        Fecha: req.body.Fecha,
        TratamientoRehabilitacion: req.body.TratamientoRehabilitacion,
        ObservacionesRehabilitacion: req.body.ObservacionesRehabilitacion,
        Paciente_idPaciente: req.body.Paciente_idPaciente
	}

	historial1.create(datos)
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
	historial1.findAll(
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
	historial1.findByPk(id)
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
	historial1.update(req.body, {
		where: {idHistorialRehabilitacionOral:id}
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
	historial1.destroy({
		where: {idHistorialRehabilitacionOral:id}
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