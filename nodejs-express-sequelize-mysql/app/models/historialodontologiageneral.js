const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
	return sequelize.define('historialodontologiageneral', {
		idHistorialOdontologiaGeneral: {
			autoIncrement: true,
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true
		},
		FechaGeneralOd: {
			type: DataTypes.DATEONLY,
			allowNull: true
		},
		MotivoConsultaGeneral: {
			type: DataTypes.STRING(1000),
			allowNull: true
		},
		AntecedentesMedicos: {
			type: DataTypes.STRING(1000),
			allowNull: true
		},
		AnomaliasGeneral: {
			type: DataTypes.STRING(1000),
			allowNull: true
		},
		DoloresGeneral: {
			type: DataTypes.STRING(1000),
			allowNull: true
		},
		HigieneBucalGeneral: {
			type: DataTypes.STRING(1000),
			allowNull: true
		},
		SarroGeneral: {
			type: DataTypes.STRING(1000),
			allowNull: true
		},
		EnfermedadesPerioGeneral: {
			type: DataTypes.STRING(1000),
			allowNull: true
		},
		Diagnostico: {
			type: DataTypes.STRING(1000),
			allowNull: true
		},
		TratamientoGeneral: {
			type: DataTypes.STRING(1000),
			allowNull: true
		},
		ObservacionesGenerales: {
			type: DataTypes.STRING(1000),
			allowNull: true
		},
		PronosticoGeneral: {
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
		tableName: 'historialodontologiageneral',
		timestamps: false,
		indexes: [
			{
				name: "PRIMARY",
				unique: true,
				using: "BTREE",
				fields: [
					{ name: "idHistorialOdontologiaGeneral" },
					{ name: "Paciente_idPaciente" },
				]
			},
			{
				name: "fk_HistorialOdontologiaGeneral_Paciente1_idx",
				using: "BTREE",
				fields: [
					{ name: "Paciente_idPaciente" },
				]
			},
		]
	});
};
