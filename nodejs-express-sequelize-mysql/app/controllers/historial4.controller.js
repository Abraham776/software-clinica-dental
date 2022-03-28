const db = require("../models");
const historial4pa = require("../models/historialedodoncia");
const historial4 = db.models.historialedodoncia;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
	const datos = {
        FechaEdo: req.body.FechaEdo,
        MotivoEdo: req.body.MotivoEdo,
        Gingivitis: req.body.Gingivitis,
        DolorEdo: req.body.DolorEdo,
        InflamacionEdo: req.body.InflamacionEdo,
        DolorPercusionEdo: req.body.DolorPercusionEdo,
        DolorPalpacion: req.body.DolorPalpacion,
        Bolsas: req.body.Bolsas,
        DiagnosticoPulparDePresuncion: req.body.DiagnosticoPulparDePresuncion,
        DiagnosticoPeriapical: req.body.DiagnosticoPeriapical,
        DiagnosticoDefinitivo: req.body.DiagnosticoDefinitivo,
        TratamientoEdo: req.body.TratamientoEdo,
        RestauracionPost: req.body.RestauracionPost,
        Pronostico: req.body.Pronostico,
        Paciente_idPaciente: req.body.Paciente_idPaciente

	}

	historial4.create(datos)
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
	historial4.findAll(
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
	historial4.findByPk(id)
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
	historial4.update(req.body, {
		where: {idHistorialEdodoncia:id}
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
	historial4.destroy({
		where: {idHistorialEdodoncia:id}
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