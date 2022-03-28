const db = require("../models");
const historial3pa = require("../models/historialodontopediatria");
const historial3 = db.models.historialodontopediatria;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
	const datos = {
		FechaOdontopediatria: req.body.FechaOdontopediatria,
        MotivoConsultaOdontopediatria: req.body.MotivoConsultaOdontopediatria,
        EnfermedadesActualesOdontopedi: req.body.EnfermedadesActualesOdontopedi,
        AntecedentesFamiliaresOdontopedia: req.body.AntecedentesFamiliaresOdontopedia,
        AtencionOdontologica: req.body.AtencionOdontologica,
        MatricesPerinatales: req.body.MatricesPerinatales,
        TipoAlimentacion: req.body.TipoAlimentacion,
        HigieneBucal: req.body.HigieneBucal,
        Habitos: req.body.Habitos,
        PesoOdontopedia: req.body.PesoOdontopedia,
        AlturaOdontopedia: req.body.AlturaOdontopedia,
        FrecuenciaRespiratoria: req.body.FrecuenciaRespiratoria,
        ObservacionesFaringe: req.body.ObservacionesFaringe,
        PlanTratamientoOdontopedia: req.body.PlanTratamientoOdontopedia,
        EstadoGeneralOdontopedia: req.body.EstadoGeneralOdontopedia,
        EstadoBucalOdontopedia: req.body.EstadoBucalOdontopedia,
        PronosticoOdontopedia: req.body.PronosticoOdontopedia,
        Paciente_idPaciente: req.body.Paciente_idPaciente

	}

	historial3.create(datos)
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
	historial3.findAll(
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
	historial3.findByPk(id)
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
	historial3.update(req.body, {
		where: {idHistorialOdontopediatria:id}
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
	historial3.destroy({
		where: {idHistorialOdontopediatria:id}
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