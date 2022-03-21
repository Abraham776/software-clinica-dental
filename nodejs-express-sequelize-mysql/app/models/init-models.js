var DataTypes = require("sequelize").DataTypes;
var _citas = require("./citas");
var _consentimientopaciente = require("./consentimientopaciente");
var _doctor = require("./doctor");
var _historialedodoncia = require("./historialedodoncia");
var _historialodontologiageneral = require("./historialodontologiageneral");
var _historialodontopediatria = require("./historialodontopediatria");
var _historialortod = require("./historialortod");
var _historialrehabilitacionoral = require("./historialrehabilitacionoral");
var _imagenesdia = require("./imagenesdia");
var _odontograma = require("./odontograma");
var _paciente = require("./paciente");
var _receta = require("./receta");
var _recibo = require("./recibo");
var _registroevolucion = require("./registroevolucion");
var _tratamientos = require("./tratamientos");
var _tratamientos_has_recibo = require("./tratamientos_has_recibo");

function initModels(sequelize) {
	var citas = _citas(sequelize, DataTypes);
	var consentimientopaciente = _consentimientopaciente(sequelize, DataTypes);
	var doctor = _doctor(sequelize, DataTypes);
	var historialedodoncia = _historialedodoncia(sequelize, DataTypes);
	var historialodontologiageneral = _historialodontologiageneral(sequelize, DataTypes);
	var historialodontopediatria = _historialodontopediatria(sequelize, DataTypes);
	var historialortod = _historialortod(sequelize, DataTypes);
	var historialrehabilitacionoral = _historialrehabilitacionoral(sequelize, DataTypes);
	var imagenesdia = _imagenesdia(sequelize, DataTypes);
	var odontograma = _odontograma(sequelize, DataTypes);
	var paciente = _paciente(sequelize, DataTypes);
	var receta = _receta(sequelize, DataTypes);
	var recibo = _recibo(sequelize, DataTypes);
	var registroevolucion = _registroevolucion(sequelize, DataTypes);
	var tratamientos = _tratamientos(sequelize, DataTypes);
	var tratamientos_has_recibo = _tratamientos_has_recibo(sequelize, DataTypes);

	recibo.belongsToMany(tratamientos, { as: 'Tratamientos_idTratamientos_tratamientos', through: tratamientos_has_recibo, foreignKey: "Recibo_idRecibo", otherKey: "Tratamientos_idTratamientos" });
	tratamientos.belongsToMany(recibo, { as: 'Recibo_idRecibo_recibos', through: tratamientos_has_recibo, foreignKey: "Tratamientos_idTratamientos", otherKey: "Recibo_idRecibo" });
	citas.belongsTo(doctor, { as: "Doctor_idDoctor_doctor", foreignKey: "Doctor_idDoctor" });
	doctor.hasMany(citas, { as: "cita", foreignKey: "Doctor_idDoctor" });
	paciente.belongsTo(doctor, { as: "Doctor_idDoctor_doctor", foreignKey: "Doctor_idDoctor" });
	doctor.hasMany(paciente, { as: "pacientes", foreignKey: "Doctor_idDoctor" });
	receta.belongsTo(doctor, { as: "Doctor_idDoctor_doctor", foreignKey: "Doctor_idDoctor" });
	doctor.hasMany(receta, { as: "receta", foreignKey: "Doctor_idDoctor" });
	tratamientos.belongsTo(doctor, { as: "Doctor_idDoctor_doctor", foreignKey: "Doctor_idDoctor" });
	doctor.hasMany(tratamientos, { as: "tratamientos", foreignKey: "Doctor_idDoctor" });
	consentimientopaciente.belongsTo(paciente, { as: "Paciente_idPaciente_paciente", foreignKey: "Paciente_idPaciente" });
	paciente.hasMany(consentimientopaciente, { as: "consentimientopacientes", foreignKey: "Paciente_idPaciente" });
	historialedodoncia.belongsTo(paciente, { as: "Paciente_idPaciente_paciente", foreignKey: "Paciente_idPaciente" });
	paciente.hasMany(historialedodoncia, { as: "historialedodoncia", foreignKey: "Paciente_idPaciente" });
	historialodontologiageneral.belongsTo(paciente, { as: "Paciente_idPaciente_paciente", foreignKey: "Paciente_idPaciente" });
	paciente.hasMany(historialodontologiageneral, { as: "historialodontologiagenerals", foreignKey: "Paciente_idPaciente" });
	historialodontopediatria.belongsTo(paciente, { as: "Paciente_idPaciente_paciente", foreignKey: "Paciente_idPaciente" });
	paciente.hasMany(historialodontopediatria, { as: "historialodontopediatria", foreignKey: "Paciente_idPaciente" });
	historialortod.belongsTo(paciente, { as: "Paciente_idPaciente_paciente", foreignKey: "Paciente_idPaciente" });
	paciente.hasMany(historialortod, { as: "historialortods", foreignKey: "Paciente_idPaciente" });
	historialrehabilitacionoral.belongsTo(paciente, { as: "Paciente_idPaciente_paciente", foreignKey: "Paciente_idPaciente" });
	paciente.hasMany(historialrehabilitacionoral, { as: "historialrehabilitacionorals", foreignKey: "Paciente_idPaciente" });
	imagenesdia.belongsTo(paciente, { as: "Paciente_idPaciente_paciente", foreignKey: "Paciente_idPaciente" });
	paciente.hasMany(imagenesdia, { as: "imagenesdia", foreignKey: "Paciente_idPaciente" });
	odontograma.belongsTo(paciente, { as: "Paciente_idPaciente_paciente", foreignKey: "Paciente_idPaciente" });
	paciente.hasMany(odontograma, { as: "odontogramas", foreignKey: "Paciente_idPaciente" });
	receta.belongsTo(paciente, { as: "Paciente_idPaciente_paciente", foreignKey: "Paciente_idPaciente" });
	paciente.hasMany(receta, { as: "receta", foreignKey: "Paciente_idPaciente" });
	recibo.belongsTo(paciente, { as: "Paciente_idPaciente_paciente", foreignKey: "Paciente_idPaciente" });
	paciente.hasMany(recibo, { as: "recibos", foreignKey: "Paciente_idPaciente" });
	registroevolucion.belongsTo(paciente, { as: "Paciente_idPaciente_paciente", foreignKey: "Paciente_idPaciente" });
	paciente.hasMany(registroevolucion, { as: "registroevolucions", foreignKey: "Paciente_idPaciente" });
	tratamientos_has_recibo.belongsTo(recibo, { as: "Recibo_idRecibo_recibo", foreignKey: "Recibo_idRecibo" });
	recibo.hasMany(tratamientos_has_recibo, { as: "tratamientos_has_recibos", foreignKey: "Recibo_idRecibo" });
	receta.belongsTo(tratamientos, { as: "Tratamientos_idTratamientos_tratamiento", foreignKey: "Tratamientos_idTratamientos" });
	tratamientos.hasMany(receta, { as: "receta", foreignKey: "Tratamientos_idTratamientos" });
	tratamientos_has_recibo.belongsTo(tratamientos, { as: "Tratamientos_idTratamientos_tratamiento", foreignKey: "Tratamientos_idTratamientos" });
	tratamientos.hasMany(tratamientos_has_recibo, { as: "tratamientos_has_recibos", foreignKey: "Tratamientos_idTratamientos" });

	return {
		citas,
		consentimientopaciente,
		doctor,
		historialedodoncia,
		historialodontologiageneral,
		historialodontopediatria,
		historialortod,
		historialrehabilitacionoral,
		imagenesdia,
		odontograma,
		paciente,
		receta,
		recibo,
		registroevolucion,
		tratamientos,
		tratamientos_has_recibo,
	};
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
