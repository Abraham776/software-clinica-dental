const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
	return sequelize.define('historialortod', {
		idHistorialOrtod: {
			autoIncrement: true,
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true
		},
		EnfermedadesCronicas: {
			type: DataTypes.STRING(300),
			allowNull: true
		},
		AlteracionesCongenitas: {
			type: DataTypes.STRING(300),
			allowNull: true
		},
		IntervecionesQuirurgicas: {
			type: DataTypes.STRING(300),
			allowNull: true
		},
		TratamientoPrevio: {
			type: DataTypes.STRING(300),
			allowNull: true
		},
		PatronFacial: {
			type: DataTypes.STRING(300),
			allowNull: true
		},
		Perfil: {
			type: DataTypes.STRING(300),
			allowNull: true
		},
		Asimetria: {
			type: DataTypes.STRING(300),
			allowNull: true
		},
		AlturaFacial: {
			type: DataTypes.FLOAT,
			allowNull: true
		},
		AnchoFacial: {
			type: DataTypes.FLOAT,
			allowNull: true
		},
		PerfilMaxilar: {
			type: DataTypes.STRING(300),
			allowNull: true
		},
		PerfilMandibular: {
			type: DataTypes.STRING(300),
			allowNull: true
		},
		SurcoLabioMenton: {
			type: DataTypes.STRING(300),
			allowNull: true
		},
		LabiosReposo: {
			type: DataTypes.STRING(300),
			allowNull: true
		},
		PerfilLabial: {
			type: DataTypes.STRING(300),
			allowNull: true
		},
		Respiracion: {
			type: DataTypes.STRING(300),
			allowNull: true
		},
		ActividadComisural: {
			type: DataTypes.STRING(300),
			allowNull: true
		},
		ActividadLingual: {
			type: DataTypes.STRING(300),
			allowNull: true
		},
		LabioSuperior: {
			type: DataTypes.STRING(300),
			allowNull: true
		},
		LabioInferior: {
			type: DataTypes.STRING(300),
			allowNull: true
		},
		Masetero: {
			type: DataTypes.STRING(300),
			allowNull: true
		},
		Mentoniano: {
			type: DataTypes.STRING(300),
			allowNull: true
		},
		HabitosDeSuccion: {
			type: DataTypes.STRING(500),
			allowNull: true
		},
		AnalisisEsqueletal: {
			type: DataTypes.STRING(500),
			allowNull: true
		},
		PlanDeTratamientoOrtod: {
			type: DataTypes.STRING(1000),
			allowNull: true
		},
		TecnicaYApara: {
			type: DataTypes.STRING(2000),
			allowNull: true
		},
		TiempoEstimadoTratamiento: {
			type: DataTypes.STRING(200),
			allowNull: true
		},
		PronosticoOrtod: {
			type: DataTypes.STRING(2000),
			allowNull: true
		},
		FechaOrtod: {
			type: DataTypes.DATEONLY,
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
		tableName: 'historialortod',
		timestamps: false,
		indexes: [
			{
				name: "PRIMARY",
				unique: true,
				using: "BTREE",
				fields: [
					{ name: "idHistorialOrtod" },
					{ name: "Paciente_idPaciente" },
				]
			},
			{
				name: "fk_HistorialOrtod_Paciente1_idx",
				using: "BTREE",
				fields: [
					{ name: "Paciente_idPaciente" },
				]
			},
		]
	});
};
