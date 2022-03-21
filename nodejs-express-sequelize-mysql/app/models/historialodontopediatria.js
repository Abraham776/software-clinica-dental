const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
	return sequelize.define('historialodontopediatria', {
		idHistorialOdontopediatria: {
			autoIncrement: true,
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true
		},
		FechaOdontopediatria: {
			type: DataTypes.DATEONLY,
			allowNull: true
		},
		MotivoConsultaOdontopediatria: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		EnfermedadesActualesOdontopedi: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		AntecedentesFamiliaresOdontopedia: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		AtencionOdontologica: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		MatricesPerinatales: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		TipoAlimentacion: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		HigieneBucal: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		Habitos: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		PesoOdontopedia: {
			type: DataTypes.FLOAT,
			allowNull: true
		},
		AlturaOdontopedia: {
			type: DataTypes.FLOAT,
			allowNull: true
		},
		FrecuenciaRespiratoria: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		ObservacionesFaringe: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		PlanTratamientoOdontopedia: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		EstadoGeneralOdontopedia: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		EstadoBucalOdontopedia: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		PronosticoOdontopedia: {
			type: DataTypes.TEXT,
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
		tableName: 'historialodontopediatria',
		timestamps: false,
		indexes: [
			{
				name: "PRIMARY",
				unique: true,
				using: "BTREE",
				fields: [
					{ name: "idHistorialOdontopediatria" },
					{ name: "Paciente_idPaciente" },
				]
			},
			{
				name: "fk_HistorialOdontopediatria_Paciente1_idx",
				using: "BTREE",
				fields: [
					{ name: "Paciente_idPaciente" },
				]
			},
		]
	});
};
