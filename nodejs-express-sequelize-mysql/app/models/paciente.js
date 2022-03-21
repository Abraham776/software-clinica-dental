const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
	return sequelize.define('paciente', {
		idPaciente: {
			autoIncrement: true,
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true
		},
		CodigoPostalPaciente: {
			type: DataTypes.INTEGER,
			allowNull: true
		},
		FotoPaciente: {
			type: DataTypes.BLOB,
			allowNull: true
		},
		NombrePaciente: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		ApellidosPaciente: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		EstadoCivilPaciente: {
			type: DataTypes.STRING(45),
			allowNull: true
		},
		FechaRegistroPaciente: {
			type: DataTypes.DATEONLY,
			allowNull: true
		},
		Edad: {
			type: DataTypes.INTEGER,
			allowNull: true
		},
		LugarNacimientoPaciente: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		Sexo: {
			type: DataTypes.STRING(45),
			allowNull: true
		},
		CiudadPaciente: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		DireccionPaciente: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		FechaNacimientoPaciente: {
			type: DataTypes.DATEONLY,
			allowNull: true
		},
		CelularPaciente: {
			type: DataTypes.STRING(45),
			allowNull: true
		},
		TelefonoFijoPaciente: {
			type: DataTypes.STRING(45),
			allowNull: true
		},
		Procedencia: {
			type: DataTypes.STRING(45),
			allowNull: true
		},
		AlergiaMedicamentoPaciente: {
			type: DataTypes.STRING(1000),
			allowNull: true
		},
		CorreoPaciente: {
			type: DataTypes.STRING(60),
			allowNull: true
		},
		OcupacionPaciente: {
			type: DataTypes.STRING(50),
			allowNull: true
		},
		Doctor_idDoctor: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			references: {
				model: 'doctor',
				key: 'idDoctor'
			}
		}
	}, {
		sequelize,
		tableName: 'paciente',
		timestamps: false,
		indexes: [
			{
				name: "PRIMARY",
				unique: true,
				using: "BTREE",
				fields: [
					{ name: "idPaciente" },
					{ name: "Doctor_idDoctor" },
				]
			},
			{
				name: "fk_Paciente_Doctor1_idx",
				using: "BTREE",
				fields: [
					{ name: "Doctor_idDoctor" },
				]
			},
		]
	});
};
