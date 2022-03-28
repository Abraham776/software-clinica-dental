const db = require("../models");
const historial2pa = require("../models/historialortod");
const historial2 = db.models.historialortod;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
	const datos = {
		EnfermedadesCronicas: req.body.EnfermedadesCronicas,
        AlteracionesCongenitas: req.body.AlteracionesCongenitas,
        IntervecionesQuirurgicas: req.body.IntervecionesQuirurgicas,
        TratamientoPrevio: req.body.TratamientoPrevio,
        PatronFacial: req.body.PatronFacial,
        Perfil: req.body.Perfil,
        Asimetria: req.body.Asimetria,
        AlturaFacial: req.body.AlturaFacial,
        AnchoFacial: req.body.AnchoFacial,
        PerfilMaxilar: req.body.PerfilMaxilar,
        PerfilMandibular: req.body.PerfilMandibular,
        SurcoLabioMenton: req.body.SurcoLabioMenton,
        LabiosReposo: req.body.LabiosReposo,
        PerfilLabial: req.body.PerfilLabial,
        Respiracion: req.body.Respiracion,
        ActividadComisural: req.body.ActividadComisural,
        ActividadLingual: req.body.ActividadLingual,
        LabioSuperior: req.body.LabioSuperior,
        LabioInferior: req.body.LabioInferior,
        Masetero: req.body.Masetero,
        Mentoniano: req.body.Mentoniano,
        HabitosDeSuccion: req.body.HabitosDeSuccion,
        AnalisisEsqueletal: req.body.AnalisisEsqueletal,
        PlanDeTratamientoOrtod: req.body.PlanDeTratamientoOrtod,
        TecnicaYApara: req.body.TecnicaYApara,
        TiempoEstimadoTratamiento: req.body.TiempoEstimadoTratamiento,
        PronosticoOrtod: req.body.PronosticoOrtod,
        FechaOrtod: req.body.FechaOrtod,
        Paciente_idPaciente: req.body.Paciente_idPaciente

	}

	historial2.create(datos)
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
	historial2.findAll(
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
	historial2.findByPk(id)
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
	historial2.update(req.body, {
		where: {idHistorialOrtod:id}
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
	historial2.destroy({
		where: {idHistorialOrtod:id}
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