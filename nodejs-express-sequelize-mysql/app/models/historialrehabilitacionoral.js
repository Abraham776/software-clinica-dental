const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
	return sequelize.define('historialrehabilitacionoral', {
		idHistorialRehabilitacionOral: {
			autoIncrement: true,
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true
		},
		MotivoConsultaRehabilitacion: {
			type: DataTypes.STRING(1000),
			allowNull: true
		},
		HabitosRehabilitacion: {
			type: DataTypes.STRING(1000),
			allowNull: true
		},
		InfeccionesRehabilitacion: {
			type: DataTypes.STRING(1000),
			allowNull: true
		},
		EnfermedadesEruptivas: {
			type: DataTypes.STRING(1000),
			allowNull: true
		},
		EnfermedadesSistematicas: {
			type: DataTypes.STRING(1000),
			allowNull: true
		},
		Transfusiones: {
			type: DataTypes.STRING(1000),
			allowNull: true
		},
		AlergiasRehabilitacion: {
			type: DataTypes.STRING(1000),
			allowNull: true
		},
		OtrosReahbilitaciones: {
			type: DataTypes.STRING(1000),
			allowNull: true
		},
		MovimientoDeAperturaMandibula: {
			type: DataTypes.STRING(1000),
			allowNull: true
		},
		MovimientoDeCierreMandibula: {
			type: DataTypes.STRING(1000),
			allowNull: true
		},
		HipertrofiaMuscular: {
			type: DataTypes.STRING(1000),
			allowNull: true
		},
		MovimientoLateralDerecho: {
			type: DataTypes.STRING(1000),
			allowNull: true
		},
		MovimientoLateralIzquierdo: {
			type: DataTypes.STRING(1000),
			allowNull: true
		},
		Fecha: {
			type: DataTypes.DATEONLY,
			allowNull: true
		},
		TratamientoRehabilitacion: {
			type: DataTypes.STRING(1000),
			allowNull: true
		},
		ObservacionesRehabilitacion: {
			type: DataTypes.STRING(1000),
			allowNull: true
		},
		Paciente_idPaciente: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			references: {
				model: 'paciente',
				key: 'idPaciente'
			}
		}
	}, {
		sequelize,
		tableName: 'historialrehabilitacionoral',
		timestamps: false,
		indexes: [
			{
				name: "PRIMARY",
				unique: true,
				using: "BTREE",
				fields: [
					{ name: "idHistorialRehabilitacionOral" },
					{ name: "Paciente_idPaciente" },
				]
			},
			{
				name: "fk_HistorialRehabilitacionOral_Paciente1_idx",
				using: "BTREE",
				fields: [
					{ name: "Paciente_idPaciente" },
				]
			},
		]
	});
};
