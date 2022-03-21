const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
	return sequelize.define('receta', {
		idReceta: {
			autoIncrement: true,
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true
		},
		Doctor_idDoctor: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			references: {
				model: 'doctor',
				key: 'idDoctor'
			}
		},
		Tratamientos_idTratamientos: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			references: {
				model: 'tratamientos',
				key: 'idTratamientos'
			}
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
		tableName: 'receta',
		timestamps: false,
		indexes: [
			{
				name: "PRIMARY",
				unique: true,
				using: "BTREE",
				fields: [
					{ name: "idReceta" },
					{ name: "Doctor_idDoctor" },
					{ name: "Tratamientos_idTratamientos" },
					{ name: "Paciente_idPaciente" },
				]
			},
			{
				name: "fk_Receta_Doctor1_idx",
				using: "BTREE",
				fields: [
					{ name: "Doctor_idDoctor" },
				]
			},
			{
				name: "fk_Receta_Tratamientos1_idx",
				using: "BTREE",
				fields: [
					{ name: "Tratamientos_idTratamientos" },
				]
			},
			{
				name: "fk_Receta_Paciente1_idx",
				using: "BTREE",
				fields: [
					{ name: "Paciente_idPaciente" },
				]
			},
		]
	});
};
