const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
	return sequelize.define('historialedodoncia', {
		idHistorialEdodoncia: {
			autoIncrement: true,
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true
		},
		FechaEdo: {
			type: DataTypes.DATEONLY,
			allowNull: true
		},
		MotivoEdo: {
			type: DataTypes.STRING(1000),
			allowNull: true
		},
		Gingivitis: {
			type: DataTypes.STRING(200),
			allowNull: true
		},
		DolorEdo: {
			type: DataTypes.STRING(500),
			allowNull: true
		},
		InflamacionEdo: {
			type: DataTypes.STRING(300),
			allowNull: true
		},
		DolorPercusionEdo: {
			type: DataTypes.STRING(300),
			allowNull: true
		},
		DolorPalpacion: {
			type: DataTypes.STRING(300),
			allowNull: true
		},
		Bolsas: {
			type: DataTypes.STRING(1000),
			allowNull: true
		},
		DiagnosticoPulparDePresuncion: {
			type: DataTypes.STRING(1000),
			allowNull: true
		},
		DiagnosticoPeriapical: {
			type: DataTypes.STRING(1000),
			allowNull: true
		},
		DiagnosticoDefinitivo: {
			type: DataTypes.STRING(1000),
			allowNull: true
		},
		TratamientoEdo: {
			type: DataTypes.STRING(1000),
			allowNull: true
		},
		RestauracionPost: {
			type: DataTypes.STRING(2000),
			allowNull: true
		},
		Pronostico: {
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
		tableName: 'historialedodoncia',
		timestamps: false,
		indexes: [
			{
				name: "PRIMARY",
				unique: true,
				using: "BTREE",
				fields: [
					{ name: "idHistorialEdodoncia" },
					{ name: "Paciente_idPaciente" },
				]
			},
			{
				name: "fk_HistorialEdodoncia_Paciente1_idx",
				using: "BTREE",
				fields: [
					{ name: "Paciente_idPaciente" },
				]
			},
		]
	});
};
